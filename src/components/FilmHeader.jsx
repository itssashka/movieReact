import React from "react";
import FavoriteButton from "./UI/FavoriteButton/FavoriteButton";

const FilmHeader = ({filmInfo}) => {
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
                        <div>{filmInfo?.genres?.map((genre) => genre.genre + " ")}</div>
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
                <FavoriteButton isFavorite={true}/>
            </div>
        </div>
    );
};

export default FilmHeader;
