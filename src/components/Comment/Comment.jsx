import React from "react";
import st from "./Comment.module.css";
import MySVG from "../MySVG/MySVG";

const Comment = () => {
    return (
        <div className={st.comment}>
            <div className={st.header}>
                <div className={st.user_name}>solidwape@gmail.com</div>
                <div className={st.btn_del}><MySVG name="removeSVG"/></div>
            </div>
            <div className={st.comment_body}>Классный фильм блин</div>
        </div>
    );
};

export default Comment;
