import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  // Dropdown Data

  let dropdownItems = [
    {
      label:'sweet',
      value: 'n_spicy'
    },
    {
      label:'spicy',
      value: 'spicy'
    },
    {
      label:'medium spicy',
      value: 'm_spicy'
    },
    {
      label:'Gaand faad spicy',
      value: 'l_spicy'
    },
  ]

  const [selected,setSelected] = useState(null)
  const onSelect = (value) => {
    let selectedItem = dropdownItems.filter(item=> item.value === value);
    setSelected(selectedItem[0]);
  }

  
  return (
    <Dropdown selectedItem={selected} onSelect={onSelect} items={dropdownItems}></Dropdown> 
  )

}

export default DropdownPage;
