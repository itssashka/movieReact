import React, { useEffect, useRef, useState } from "react";
import Comment from "./Comment/Comment";
import AddComment from "./AddComment/AddComment";
import User from "../utils/User";
import Comments from "../utils/Comments";
import usePagination from "../hooks/usePaginagtion";
import MyPagination from "./UI/MyPagination/MyPagination";

const CommentBlock = ({ filmId }) => {
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const {
        currentData,
        nextPage,
        changePage,
        prevPage,
        totalPages,
        currentPage,
    } = usePagination(comments, 5, isLoading);

    useEffect(() => {
        showComments();
        setCurrentUser(User.currentUser());
    }, []);

    const addComment = (comment) => {
        const user = new User();
        const isLogin = User.isLogin();
        const username = isLogin
            ? user.checkUser(currentUser).userName
            : "Гость";
        const commentObj = new Comments(filmId, username, currentUser, comment);
        commentObj.addComment();
        showComments();
    };

    const showComments = () => {
        setIsLoading(true);
        const commentsObj = new Comments(filmId);
        const unFilteredComments = commentsObj.getComments();
        let newComments = [];
        if (Object.keys(unFilteredComments).length !== 0) {
            newComments = commentsObj
                .getComments()
                .comments.filter((comment) => comment !== null);
        }
        setComments(newComments.reverse());
        setIsLoading(false);
        changePage(1)
    };

    const removeComment = (commentId, userEmail) => {
        const commentsObj = new Comments(filmId);
        if (currentUser === userEmail) commentsObj.removeComment(commentId);
        showComments();
    };

    return (
        <div className="comments_block flex_row">
            <div className="comments flex_column">
                {currentData.map(
                    (comment) =>
                        comment !== null && (
                            <Comment
                                currentUser={currentUser}
                                comment={comment}
                                key={comment.commentId}
                                removeComment={removeComment}
                            />
                        )
                )}
                {comments.length === 0 && <div>Комментарие пока нет</div>}
                {totalPages > 1 && <MyPagination currentPage={currentPage} totalPages={totalPages} setPage={changePage} nextPage={nextPage} prevPage={prevPage}/>}
            </div>
            <div className="add_comment_block">
                <AddComment addComment={addComment} />
            </div>
        </div>
    );
};

export default CommentBlock;
