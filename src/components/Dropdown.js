import { useEffect, useRef, useState } from 'react';
import './dropdown.scss';

function Dropdown({selectedItem,items,onSelect}){
    const [isOpen, toggleOpenState] = useState(false)
    
    const divParent = useRef();
    useEffect(()=>{
        const handler = (event) => {
            console.log(divParent)
            if(!divParent ||  !divParent.current){
                return;
            }
            if(!divParent.current.contains(event.target)){
                toggleOpenState(false)
            }
        }
        document.addEventListener('click',handler,true)
        return ()=>{
            document.removeEventListener('click',handler)
        }
    },[])

    const handleDropdownState = () => { 
        toggleOpenState(!isOpen)
    }
    const onitemSelected = (item) => {
        toggleOpenState(false);
        onSelect(item.value)
    }
    const renderedItems = items.map((item)=> {
        return (
            <div className="dropdown__item" key={item.value}  onClick={()=>{onitemSelected(item)}}>{item.label}</div>
        )
    })
    return (
        <div style={{'display':'inline-block'}} ref={divParent}>
            <div className={`${isOpen ? 'open' : ''} dropdown`}>
                <div onClick={() => {handleDropdownState()}} > Selected: {selectedItem && selectedItem.label || 'NO ITEM SELECTED'} ></div> 
                <div className="dropdown__content">{renderedItems}</div>
            </div>
        </div>
    )
}

export default Dropdown;