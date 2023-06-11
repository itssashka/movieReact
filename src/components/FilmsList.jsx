import React from "react";
import FilmCard from "./FilmCard";

const FilmsList = ({ films }) => {
    return (
        <div className="films_list">
            {films.map(film => 
                <FilmCard film={film} key={film.filmId}/>
            )}            
        </div>
    );
};

export default FilmsList;
