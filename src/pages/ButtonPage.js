import Button from "../components/Button"
import { useState } from 'react';

function ButtonPage(){

      // Button Data

  const onClick = () => {
    
  }
  const onMouseEnter = () => {
    
  }
  const onMouseLeave = () => {
    // console.log('leave!')
  }
  const onMouseOver = () => {
    // console.log('Over!')
  }
  return (
    <div>
        <Button primary onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} onClick={onClick}>Click Me!</Button>
        <Button primary >Buy  Now!</Button>
        <Button rounded >Add To Cart!</Button>
        <Button >Clear Cart!</Button>
    </div>
  );

}

export default ButtonPage;