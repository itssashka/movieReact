import axios from "axios";

export default class FilmService {
    static async getTopFilms(page) {
        const resp = await axios.get(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
            {
                headers: {
                    "X-API-KEY": "37a5b6ee-c8b2-4770-a156-7801d3dd5d89",
                    "Content-Type": "application/json",
                },
            }
        );
        return resp.data;
    }

    static async getFilmInfo(id) {
        const resp = await axios.get(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
            {
                headers: {
                    "X-API-KEY": "37a5b6ee-c8b2-4770-a156-7801d3dd5d89",
                    "Content-Type": "application/json",
                },
            }
        );
        return resp.data;
    }

    static async getFilmBudget(id) {
        const resp = await axios.get(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`,
            {
                headers: {
                    "X-API-KEY": "37a5b6ee-c8b2-4770-a156-7801d3dd5d89",
                    "Content-Type": "application/json",
                },
            }
        );

        return resp.data;
    }

    static async getFilmTrailer(id) {
        const resp = await axios.get(
            `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`,
            {
                headers: {
                    "X-API-KEY": "37a5b6ee-c8b2-4770-a156-7801d3dd5d89",
                    "Content-Type": "application/json",
                },
            }
        );

        return resp.data;
    }

    static async getSearchedFilms(filmName) {
        const resp = await axios.get(
            `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${filmName}`,
            {
                headers: {
                    "X-API-KEY": "37a5b6ee-c8b2-4770-a156-7801d3dd5d89",
                    "Content-Type": "application/json",
                },
            }
        );

        return resp.data;
    }
}
