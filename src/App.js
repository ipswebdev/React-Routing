import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import { useState } from 'react';
import DropdownPage from './pages/DropdownPage';
import Link from './components/Link'
import RouteRenderer from './components/RouteRenderer';
import Sidebar from './components/Sidebar';

function App() { 
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
