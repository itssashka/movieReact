import React, { useEffect, useState } from "react";
import st from "./AccountFavorite.module.css";
import Favorite from "../../utils/Favorite";
import FavoriteButton from "../UI/FavoriteButton/FavoriteButton";
import { Link } from "react-router-dom";

const AccountFavorite = () => {
    const [favoriteFilms, setFavoriteFilms] = useState([]);

    useEffect(() => {
        const favorite = new Favorite();
        console.log(favorite.getFavorites());
        setFavoriteFilms(favorite.getFavorites());
    }, []);

    const removeFromFavorite = (filmId) => {
        const favorite = new Favorite();
        favorite.removeFromFavorite(filmId);
        setFavoriteFilms(favorite.getFavorites());
    };

    return (
        <div className={st.container}>
            <h3 className={st.header}>Понравившиеся фильмы</h3>
            {favoriteFilms.length === 0 && <div>Список пуст</div>}
            {favoriteFilms.map((film) => 
                <div className={st.film_card} key={film.filmId}>
                    <div className={st.film_img}>
                        <img src={film.posterURL} alt="" />
                    </div>
                    <Link to={`/film/${film.filmId}`} className={st.film_name}>
                        {film.filmName}
                    </Link>
                    <div
                        className={st.remove_btn}
                        onClick={() => removeFromFavorite(film.filmId)}
                    >
                        Удалить
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountFavorite;
