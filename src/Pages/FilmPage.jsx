import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import FilmService from "../API/FilmService";
import '../styles/film.css'
import FilmHeader from "../components/FilmHeader";
import VideoPlayer from "../components/UI/VideoPlayer/VideoPlayer";
import CommentBlock from "../components/CommentsBlock";
import KinopoiskButton from "../components/UI/KinopoiskButton/KinopoiskButton";
import Loader3 from "../components/UI/Loader3/Loader3";

const FilmPage = () => {
    const { id } = useParams();
    const [filmInfo, setInfo] = useState({});
    const [budget, setBudget] = useState({});
    const [filmTrailers, setFilmTrailers] = useState(null);

    const [fetchFilm, isLoading, error] = useFetch(
        async (filmId) => {
            const data = await FilmService.getFilmInfo(filmId);
            setInfo(data);
        }
    )
    const [fetchBudget] = useFetch(
        async (filmId) => {
            const data = await FilmService.getFilmBudget(filmId);
            setBudget(data);
        }
    )

    const [fetchTrailer, isTrailerLoading, trError] = useFetch(
        async (filmId) => {
            const data = await FilmService.getFilmTrailer(filmId);
            setFilmTrailers(data);
            console.log();
        }
    )

    useEffect(() => {
        fetchFilm(id);
        fetchBudget(id);
        fetchTrailer(id)
    }, []);


    return (
        <div className="film_container flex_column">
            {isLoading && (<div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px'}}><Loader3/></div>)}
            <FilmHeader filmInfo={filmInfo} budget={budget}/>
            {filmTrailers && <VideoPlayer trailers={filmTrailers}/>}
            <KinopoiskButton url={filmInfo.webUrl}/>
            <div className="comments_header" style={{marginTop: '20px'}}>Комментарии</div>
            <CommentBlock/>
        </div>
    );
};

export default FilmPage;