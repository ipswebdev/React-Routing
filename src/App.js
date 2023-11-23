import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import { useState } from 'react';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import RouteRenderer from './components/RouteRenderer';
import Sidebar from './components/Sidebar';
import TablePage from './pages/TablePage';

function App() { 
  const [modalState, setModalState] = useState(false);

  const changeModalState = (state) => {
    console.log('backdrop click! state',state)
    setModalState(state);
  } 
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
      <RouteRenderer path="/modal">
        <ModalPage onBackdropClick={(state)=> changeModalState(state)} show={modalState}></ModalPage>
      </RouteRenderer>
      <RouteRenderer path="/table">
        <TablePage></TablePage>
      </RouteRenderer>
    </div>
    
  )

}

export default App;
