import React from "react";
import st from "./MyModal.module.css";
import MySVG from "../MySVG/MySVG";
import MyModalSVG from "./MyModalSVG";

const MyModal = ({children, visible, setVisible}) => {
    const modalClasses=[st.modal]
    if(visible){
        modalClasses.push(st.open)
    }
    return (
        <div className={modalClasses.join(' ')}>
            
            <div className={st.modal_content} onClick={e=>e.stopPropagation()}>
                {/* <MyModalSVG/> */}
                {children}
            </div>
        </div>
    );
};

export default MyModal;
