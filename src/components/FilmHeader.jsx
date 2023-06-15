import React, { useEffect, useState } from "react";
import FavoriteButton from "./UI/FavoriteButton/FavoriteButton";
import Favorite from "../utils/Favorite";
import User from "../utils/User";
import { useContext } from "react";
import { AuthContext } from "../context";

const FilmHeader = ({ filmInfo }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const {isAuth} = useContext(AuthContext);

    useEffect(() => {
        const favorite = new Favorite();
        if (User.isLogin()) {
            const isFilmFavorite = favorite.isFavorite(filmInfo.kinopoiskId);
            setIsFavorite(isFilmFavorite);
        }
    }, [filmInfo]);

    const changeFavorite = (e) => {
        e.stopPropagation();
        const favorite = new Favorite();

        if (!isFavorite) {
            favorite.addToFavorite(
                filmInfo.kinopoiskId,
                filmInfo.nameRu,
                filmInfo.posterUrl
            );
        } else {
            favorite.removeFromFavorite(filmInfo.kinopoiskId);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="film_header flex_row">
            <div className="film_header-poster">
                <img src={filmInfo?.posterUrl} alt="" />
            </div>
            <div className="film_header-desc flex_column">
                <h1>{filmInfo.nameRu}</h1>
                <div>{filmInfo.nameOriginal}</div>
                <div>{filmInfo.slogan}</div>
                <div className="film_header-about">
                    <div className="about-item flex_row">
                        <p>Год:</p> <div>{filmInfo.year}</div>
                    </div>
                    <div className="about-item flex_row">
                        <p>Длительность:</p> <div>{filmInfo.filmLength}</div>
                    </div>
                    <div className="about-item flex_row">
                        <p>Страны:</p>{" "}
                        <div>
                            {filmInfo?.countries?.map(
                                (country) => country.country + " "
                            )}
                        </div>
                    </div>
                    <div className="about-item flex_row">
                        <p>Жанры:</p>{" "}
                        <div>
                            {filmInfo?.genres?.map(
                                (genre) => genre.genre + " "
                            )}
                        </div>
                    </div>
                    <div className="about-item flex_row">
                        <p>Рейтинг IMDB:</p>
                        <div>{filmInfo.ratingImdb}</div>
                    </div>
                    <div className="about-item flex_row">
                        <p>Рейтинг критиков:</p>
                        <div>{filmInfo.ratingFilmCritics}</div>
                    </div>
                </div>
            </div>
            <div className="film_header-score">
                <div className="rating">{filmInfo.ratingKinopoisk}</div>
                <div>{filmInfo.ratingKinopoiskVoteCount}</div>
                {isAuth && <FavoriteButton
                    isFavorite={isFavorite}
                    changeFavorite={changeFavorite}
                    id={filmInfo.kinopoiskId}
                />}
            </div>
        </div>
    );
};

export default FilmHeader;
