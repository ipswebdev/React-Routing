import useSorting from "../hooks/use-sorting";
import Table from "./Table";
// import { useState } from "react";

function SortableTable(props){
    const { data,config } = props
    const {sortOrder,handleSorting,sortBy,sortedItems} = useSorting(data,config)
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
                    return (<th key={col.label} onClick={()=>handleSorting(col)}>{col.label} {icon}</th>)
                }
            }
        }
    })

    return <Table {...props} data={sortedItems} config={updatedConfig} />
}

export default SortableTable;