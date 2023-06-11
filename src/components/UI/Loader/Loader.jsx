import React from "react";
import st from "./Loader.module.css";
import "./Loader.module.css";

const Loader = () => {
    return (
        <div>
            <div className={st.loader}>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 4 }}></span>
                <span style={{ "--i": 5 }}></span>
                <span style={{ "--i": 6 }}></span>
                <span style={{ "--i": 7 }}></span>
                <span style={{ "--i": 8 }}></span>
                <span style={{ "--i": 9 }}></span>
                <span style={{ "--i": 10 }}></span>
                <span style={{ "--i": 11 }}></span>
                <span style={{ "--i": 12 }}></span>
            </div>
        </div>
    );
};

export default Loader;
