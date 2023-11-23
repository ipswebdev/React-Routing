import { useState } from "react";
import Modal from "../components/Modal";
function ModalPage({show,onBackdropClick}){
    const [showModal, setShowModal] = useState(show)
    const handleClick =  ()=> {
        setShowModal(true);
    }
    const handleClose= () => {
        setShowModal(false)
    }
    const actions = <button style={{position:'relative',zIndex:2}} onClick={handleClose}>I Accept</button>;
    const modal = (
    <Modal actionBar={actions} toggleState={handleClose}>
        <p style={{position:'relative',zIndex:2}}>
            Accept the agreement to proceed
        </p>
    </Modal>
    )
    return (
    <div>
        <button onClick={handleClick}>Open Modal</button>
        {showModal && modal}
    </div>)
}

export default ModalPage;