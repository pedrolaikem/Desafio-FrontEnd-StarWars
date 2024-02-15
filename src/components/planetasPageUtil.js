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

export const fetchResidentsName = async (res, setPeoples) => {
    if (res.data.residents.length > 0) {
        const residentsNames = await Promise.all(
            res.data.residents.map((residentsAPI) =>
                axios
                    .get(residentsAPI)
                    .then((residentsAPIResponse) => residentsAPIResponse.data.name)
            )
        );
        setPeoples(residentsNames);
    }
};
