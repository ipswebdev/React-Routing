import './accordion.scss';

function Accordion({ items,onClick }){
    const renderedItems = items.map((item)=> {
        return (
            <div  className={`${item.isOpen ? 'open' : ''} accordion`} key={item.id}>
                <div onClick={()=>{onClick(item.id)}} className="accordion__header">{item.heading}</div>
                <div className="accordion__content">{item.content}</div>
            </div>
        )
    })
    return (
        <div>{renderedItems}</div>
    )
}

export default Accordion;