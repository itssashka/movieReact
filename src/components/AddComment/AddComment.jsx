import React, { useState } from "react";
import st from "./AddComment.module.css";
import MyButton from "../UI/MyButton/MyButton";

const AddComment = ({ filmId }) => {
    const [commentText, setCommentText] = useState('');


    return (
        <form action={st.form}>
            <textarea
                className={st.input}
                placeholder="Оставить отзыв"
                onChange={(e)=>setCommentText(e.target.value)}
            >{commentText}</textarea>
            <MyButton type="submit">Отправить</MyButton>
        </form>
    );
};

export default AddComment;
