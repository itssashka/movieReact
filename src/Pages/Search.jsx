import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmsList from "../components/FilmsList";
import { useFetch } from "../hooks/useFetch";
import FilmService from "../API/FilmService";
import FilmsFilter from "../components/FilmsFilter";
import Loader3 from "../components/UI/Loader3/Loader3";

const Search = () => {
    let {request} = useParams();
    const [films, setFilms] = useState([]);

    const [fetchFilms, isLoading, error] = useFetch(async () => {
        const data = await FilmService.getSearchedFilms(request);
        setFilms(data.films);
    });

    useEffect(() => {
        console.log(request);
        setFilms([])
        fetchFilms();
    }, [request]);

    if (!films.length && !isLoading) {
        return (
            <div className="container">
                <h1>По запросу {request} ничего не найдено</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="block_films">
                <h1>Результаты поиска по запросу: {request}</h1>
                {isLoading && (
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "30px",
                        }}
                    >
                        <Loader3/>
                    </div>
                )}
                <FilmsList films={films} />
            </div>
            <FilmsFilter />
        </div>
    );
};

export default Search;
