import React, { Children, useState } from "react";
import st from "./MyInput.module.css";

const MyInput = ({ children,fieldName, ...props}) => {
    const [value, setValue] = useState('');
    return (
        <div className={st.input_conteiner}>
            <input className={st.input} required {...props}/>
            <div className={st.input_field_name}>{fieldName}</div>
            {children}
        </div>
    );
};

export default MyInput;
