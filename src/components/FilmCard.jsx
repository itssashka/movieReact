import React, { useEffect, useState } from "react";
import MySVG from "./MySVG/MySVG";
import { Link } from "react-router-dom";
import Favorite from "../utils/Favorite";
import FavoriteButton from "./UI/FavoriteButton/FavoriteButton";
import User from "../utils/User";
import { useContext } from "react";
import { AuthContext } from "../context";

const FilmCard = ({ film }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const {isAuth} = useContext(AuthContext);

    useEffect(() => {
        const favorite = new Favorite();

        if (User.isLogin()) {
            const isFilmFavorite = favorite.isFavorite(film.filmId);
            setIsFavorite(isFilmFavorite);
        }
    }, []);

    const changeFavorite = (e) => {
        e.preventDefault();
        const favorite = new Favorite();
        if (!isFavorite) {
            favorite.addToFavorite(
                film.filmId,
                film.nameRu,
                film.posterUrlPreview
            );
        } else {
            favorite.removeFromFavorite(film.filmId);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <Link className="film_card" to={`/film/${film.filmId}`}>
            <div className="film_poster">
                <img src={film.posterUrlPreview} alt={film.nameRu} />
            </div>
            <div className="film_desc">
                <div className="film_desc_top">
                    <div className="film_name">{film.nameRu}</div>
                    <div className="film_nameEn">{film.nameEn}</div>
                </div>
                <div className="film_desc_bottom">
                    <div>
                        <p>Страна:</p> {film?.countries[0].country}
                    </div>
                    <div>
                        <p>Жанры:</p>
                        {film.genres.map((genre) => `${genre.genre} `)}
                    </div>
                    <div>
                        <p>Год:</p> {film.year}
                    </div>
                    <div>
                        <p>Длительность:</p> {film.filmLength}
                    </div>
                </div>
            </div>
            <div className="film_rate">
                <div className="rating">{film.rating}</div>
                <div className="rating_votes">{film.ratingVoteCount}</div>
                {isAuth && <FavoriteButton
                    isFavorite={isFavorite}
                    changeFavorite={changeFavorite}
                    id={film.filmId}
                />}
            </div>
        </Link>
    );
};

export default FilmCard;
