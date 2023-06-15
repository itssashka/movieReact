import React, { useState } from "react";
import st from "./AddComment.module.css";
import MyButton from "../UI/MyButton/MyButton";

const AddComment = ({ addComment }) => {
    const [commentText, setCommentText] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const submitHandle = (e) => {
        e.preventDefault();
        if(commentText.length === 0) {
            console.log('empty');
            setIsEmpty(true);
        } else {
            addComment(commentText);
            setCommentText('');
            setIsEmpty(false);
        }
    }

    return (
        <form action={st.form} onSubmit={submitHandle}>
            <textarea
                className={st.input}
                placeholder="Оставить отзыв"
                onChange={(e)=>setCommentText(e.target.value)}
                value={commentText}
            />
            {isEmpty && <div className={st.error}>Поле должно быть заполнено</div>}
            <MyButton type="submit">Отправить</MyButton>
        </form>
    );
};

export default AddComment;
