import Table from "./Table";
import { useState } from "react";

function SortableTable(props){
    const { data,config } = props
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    // const [sortedData , setSortedData] = useState(data);

    const updatedConfig = config.map((col)=>{
        if(!col.sortValue){
            return col;
        }else{
            return {
                ...col,
                header: () => {
                    let icon = '';
                    if(col.label === sortBy){
                        if(!sortOrder){
                            icon = '^v'
                        }else if(sortOrder === 'asc') {
                            icon = '^'
                        }else if(sortOrder == 'dsc'){
                            icon = 'v';
                        } 
                    }else{
                        icon = '^v'  
                    }
                    return (<th key={col.label} onClick={()=>handleClick(col)}>{col.label} {icon}</th>)
                }
            }
        }
    })

    const handleClick = (column) => {
        let label = column.label
        if (sortBy && label !== sortBy) {
            setSortBy(label);
            setSortOrder('asc')
            return;
        }
        if(sortOrder === null){
            setSortOrder('asc')
            setSortBy(label);
            
        }else if(sortOrder === 'asc'){
            setSortOrder('dsc')
            setSortBy(label);
            
        }else if(sortOrder === 'dsc'){
            setSortOrder(null)
            setSortBy(null);
            
        }
    }
    
        let sortedItems = [...data];
        
        if(sortOrder && sortBy){
            const configItem = config.find((col)=>col.label === sortBy)
            let order = 1
            if(sortOrder == 'asc'){
                order = 1;
            }else{
                order = -1;
            }            
            sortedItems.sort((a,b)=>{
                const valueA = configItem.sortValue(a);
                const valueB = configItem.sortValue(b);
                
                if(typeof(valueA) == 'string'){
                    return order * (valueA.localeCompare(valueB))
                }else{
                    return order * (valueA - valueB)
                }        
            })
        }
    return <Table {...props} data={sortedItems} config={updatedConfig} />
}

export default SortableTable;