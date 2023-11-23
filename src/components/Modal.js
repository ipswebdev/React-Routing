import { useState } from "react";
import { createPortal } from "react-dom";
function Modal({toggleState,children,actionBar}){
    return (
        createPortal(
            <div style={{position:'fixed',height:'100%',width:'100%',top:0,left:0,padding:'50px 250px'}}>
                <div onClick={toggleState} style={{'padding':'50px 10px','position':'absolute','top':'0','left':'0','backgroundColor':'#c0c0c0','height':'100%','width':'100%','opacity':0.4,zIndex:1}}></div>
                {children}
                {actionBar}
            </div>
        ,
        document.querySelector('.modal-container')
        )
        
    )
}

export default Modal;