import Accordion from "../components/Accodion";
import { useState } from 'react';

function AccordionPage(){
    // Accordion Data
    let accordionItems = [
      {
        id:"qaz",
        isOpen: false,
        heading: 'Angular',
        content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
      },{
        id:"1qaz",
        isOpen: false,
        heading: 'Angular',
        content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
      },{
        id:"2qaz",
        isOpen: false,
        heading: 'Angular',
        content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
      },{
        id:"3qaz",
        isOpen: true,
        heading: 'Angular',
        content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
      }
    ]

    const  [items, openStateToggle] = useState([...accordionItems]);


    const onAccordionClick = (id) => {
      const toggledItems = items.map(item => {
        if(id === item.id){
          return {
            ...item,
            isOpen: !item.isOpen,
          }
        }
        return {
          ...item,
          isOpen: false,
        }
      });

      openStateToggle(toggledItems);

      console.log('click',items);
    };

    return (
        <Accordion items={items} onClick={onAccordionClick} ></Accordion>
    )

}

export default AccordionPage;