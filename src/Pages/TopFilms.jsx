import React, { useEffect, useRef, useState } from "react";
import FilmsList from "../components/FilmsList";
import { useFetch } from "../hooks/useFetch";
import FilmService from "../API/FilmService";
import FilmsFilter from "../components/FilmsFilter";
import { useObserver } from "../hooks/useObserver";
import Loader3 from "../components/UI/Loader3/Loader3";

const TopFilms = () => {
    const [films, setFilms] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [showingFilmsCount, setShowingFilms] = useState(0);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [fetchFilms, isLoading, error] = useFetch(
        async (page) => {
            const data = await FilmService.getTopFilms(page);
            setFilms([...films, ...data.films]);
            setTotalPages(data.pagesCount);
            setShowingFilms(showingFilmsCount + data.films.length);
        }
    )

    useEffect(()=>{
        fetchFilms(page);
    }, [page]);

    useObserver(lastElement,page<totalPages, isLoading, () => {
        setPage(page+1);
    })

    return (
        <div className="container films_container">
            <div className="block_films">
                <h1>Топ 250</h1>                
                <div>{showingFilmsCount} фильмов из 250</div>
                <FilmsList films={films}/>
                {isLoading && (<div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px'}}><Loader3/></div>)}
                <div style={{width: '100%', height: '50px'}} ref={lastElement}></div>
            </div>
            <FilmsFilter/> 
                        
        </div>
    );
};

export default TopFilms;
