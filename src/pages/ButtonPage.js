import Button from "../components/Button"
import { useState } from 'react';

function ButtonPage(){
  const onClick = () => {
  }
  const onMouseEnter = () => {
  }
  const onMouseLeave = () => {
  }
  const onMouseOver = () => {
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