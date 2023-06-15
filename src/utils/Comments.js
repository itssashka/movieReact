export default class Comments {
    constructor(kpId, username, userEmail, comment){
        this.kpId = kpId;
        this.username = username;
        this.userEmail = userEmail;
        this.comment = comment
    }

    getComments() {
        let localStorageComments = JSON.parse(localStorage.getItem(this.kpId));
        if(!localStorageComments) {
            localStorageComments = {};
        }

        return localStorageComments;
    }

    addComment() {
        const date = new Date();
        const newComment = {
            date: `${date.toLocaleDateString('ru-Ru')} в ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`,
            username: this.username,
            userEmail: this.userEmail,
            comment: this.comment
        }

        if(localStorage.getItem(this.kpId) !== null) {
            const localStorageComments = JSON.parse(localStorage.getItem(this.kpId));
            newComment.commentId = localStorageComments.comments.length;
            localStorageComments.comments.push(newComment);
            localStorage.setItem(this.kpId, JSON.stringify(localStorageComments))
        }else{
            newComment.commentId = 0;
            const localStorageComments = {
                comments: [newComment]
            };
            localStorage.setItem(this.kpId, JSON.stringify(localStorageComments))
        }
    }

    removeComment(commentId) {
        const localStorageComments = JSON.parse(localStorage.getItem(this.kpId));
        console.log(localStorageComments);
        localStorageComments.comments = localStorageComments.comments.map(comment => {
            if(!comment || comment.commentId !== commentId) return comment;
            return null;
        })

        localStorage.setItem(this.kpId, JSON.stringify(localStorageComments))
    }
}