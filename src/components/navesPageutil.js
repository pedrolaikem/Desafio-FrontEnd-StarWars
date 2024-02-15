import axios from "axios";

//Fazer o map do array, desestruturando eles e devolvendo os nomes das informações que vieram em array.
export const fetchFilmTitles = async (res, setFilms) => {
    if (res.data.films.length > 0) {
        const filmsNames = await Promise.all(
            res.data.films.map((filmAPI) =>
                axios
                    .get(filmAPI)
                    .then((filmAPIResponse) => filmAPIResponse.data.title)
            )
        );
        setFilms(filmsNames);
    }
};

export const fetchPilotsName = async (res, setPeoples) => {
    if (res.data.pilots.length > 0) {
        const pilotsNames = await Promise.all(
            res.data.pilots.map((pilotsAPI) =>
                axios
                    .get(pilotsAPI)
                    .then((pilotsAPIResponse) => pilotsAPIResponse.data.name)
            )
        );
        setPeoples(pilotsNames);
    }
};
