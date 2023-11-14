import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import { useState } from 'react';
import DropdownPage from './pages/DropdownPage';
import Link from './components/Link'
import RouteRenderer from './components/RouteRenderer';
import Sidebar from './components/Sidebar';

function App() {
  // Button Data

  // const onClick = () => {
  //   console.log('click!')
  // }
  // const onMouseEnter = () => {
  //   console.log('enter!')
  // }
  // const onMouseLeave = () => {
  //   console.log('leave!')
  // }
  // const onMouseOver = () => {
  //   console.log('Over!')
  // }
  // return (
  //   <div>
  //       <Button primary onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} onClick={onClick}>Click Me!</Button>
  //       <Button primary >Buy  Now!</Button>
  //       <Button rounded >Add To Cart!</Button>
  //       <Button >Clear Cart!</Button>
  //   </div>
  // );


  // Accordion Data

  // let accordionItems = [
  //   {
  //     id:"qaz",
  //     isOpen: false,
  //     heading: 'Angular',
  //     content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
  //   },{
  //     id:"1qaz",
  //     isOpen: false,
  //     heading: 'Angular',
  //     content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
  //   },{
  //     id:"2qaz",
  //     isOpen: false,
  //     heading: 'Angular',
  //     content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
  //   },{
  //     id:"3qaz",
  //     isOpen: true,
  //     heading: 'Angular',
  //     content: 'Angular is a JS Framework That is used to make SPA. SPAs are beautiful.'
  //   }
  // ]

  // const  [items, openStateToggle] = useState([...accordionItems]);


  // const onAccordionClick = (id) => {
  //   const toggledItems = items.map(item => {
  //     if(id === item.id){
  //       return {
  //         ...item,
  //         isOpen: !item.isOpen,
  //       }
  //     }
  //     return {
  //       ...item,
  //       isOpen: false,
  //     }
  //   });

  //   openStateToggle(toggledItems);

  //   console.log('click',items);
  // };

  // // Dropdown Data

  // let dropdownItems = [
  //   {
  //     label:'sweet',
  //     value: 'n_spicy'
  //   },
  //   {
  //     label:'spicy',
  //     value: 'spicy'
  //   },
  //   {
  //     label:'medium spicy',
  //     value: 'm_spicy'
  //   },
  //   {
  //     label:'Gaand faad spicy',
  //     value: 'l_spicy'
  //   },
  // ]

  // const [selected,setSelected] = useState(null)
  // const onSelect = (value) => {
  //   let selectedItem = dropdownItems.filter(item=> item.value === value);
  //   setSelected(selectedItem[0]);
  //   console.log('selected',selectedItem[0])
  // }
  
  return (
    <div>
      <Sidebar/>
      <RouteRenderer path="/">
        <DropdownPage></DropdownPage>
      </RouteRenderer>
      <RouteRenderer path="/accordion">
        <AccordionPage></AccordionPage>
      </RouteRenderer>
      <RouteRenderer path="/button">
        <ButtonPage></ButtonPage>
      </RouteRenderer>
    </div>
    
  )

}

export default App;
