import React from "react";
import st from "./Comment.module.css";
import MySVG from "../MySVG/MySVG";

const Comment = ({comment, removeComment, currentUser}) => {
    return (
        <div className={st.comment}>
            <div className={st.header}>
                <div className={st.user_name}>{comment.username}</div>
                <div className={st.comment_date}>{comment.date}</div>
                {currentUser === comment.userEmail && <div className={st.btn_del} onClick={() => removeComment(comment.commentId, comment.userEmail)}><MySVG name="removeSVG"/></div>}
            </div>
            <div className={st.comment_body}>{comment.comment}</div>
        </div>
    );
};

export default Comment;
