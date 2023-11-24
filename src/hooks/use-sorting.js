import { useState } from "react";
function useSorting(data,config){

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleSorting = (column) => {
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

    return {sortBy,sortOrder,handleSorting,sortedItems}

}

export default useSorting;