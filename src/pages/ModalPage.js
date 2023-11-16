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
    const actions = <button onClick={handleClose}>I Accept</button>;
    const modal = (
    <Modal actionBar={actions} toggleState={handleClose}>
        <p>Accept the agreement to proceed</p>
    </Modal>
    )
    return (
    <div>
        <button onClick={handleClick}>Open Modal</button>
        {showModal && modal}
    </div>)
}

export default ModalPage;