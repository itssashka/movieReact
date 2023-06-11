import React from "react";
import MySVG from "./MySVG/MySVG";
import { Link, useNavigate } from "react-router-dom";


const FilmCard = ({ film }) => {
    const navigate = useNavigate();
    // console.log(film);
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
                <MySVG name="favoriteSVG"/>
            </div>
        </Link>
    );
};

export default FilmCard;
