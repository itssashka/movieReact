import User from "./User";

export default class Favorite {
    constructor() {
        this.currentUser = User.currentUser();
        this.user = new User();
    }

    addToFavorite(filmId = null, filmName, posterURL) {
        const newFilm = { 
            filmId: filmId,
            filmName: filmName,
            posterURL: posterURL
        };
        const users = JSON.parse(localStorage.getItem("Users"));
        const usersList = users.users.map((user) => {
            if (user.userEmail === this.currentUser) {
                user.favoriteFilms.push(newFilm);
            }

            return user;
        });

        const newUsers = { users: usersList };
        localStorage.setItem("Users", JSON.stringify(newUsers));
    }

    getFavorites() {
        const userInfo = this.user.checkUser(this.currentUser);
        const newFavorite = userInfo.favoriteFilms.filter(film => film !== null);
        return newFavorite;
    }

    isFavorite(filmId = null) {
        const userInfo = this.user.checkUser(this.currentUser);
        let isFavorite = false;
        userInfo.favoriteFilms.forEach((film) => {
            if(!film) return film;
            if (film.filmId === filmId) {
                isFavorite = true;
            }
        });

        return isFavorite;
    }

    removeFromFavorite(filmId = null) {
        const users = JSON.parse(localStorage.getItem("Users"));
        const newUsersList = users.users.map((user) => {
            if (user.userEmail === this.currentUser) {
                user.favoriteFilms = user.favoriteFilms.map(film => {
                    if(!film || film.filmId !== filmId) return film;
                    return null;
                })

                return user;
            }
        });

        const newUsers = {users: newUsersList};
        localStorage.setItem('Users', JSON.stringify(newUsers));
    }
}
