import React from "react";
import ReactDOM from "react-dom";

import "./Backdop.css";
const Backdop = props=>
    {
        
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onClick}></div>,
        document.getElementById('backdrop-hook')
        
    );
};
export default Backdop;
