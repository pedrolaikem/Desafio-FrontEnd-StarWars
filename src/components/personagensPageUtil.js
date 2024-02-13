import axios from "axios";

export const formatSkinColor = (skinColor) => {
    switch (skinColor) {
        case "fair":
            return "Pele clara";
        case "white":
            return "Branco";
        case "gold":
            return "Dourado";
        case "caucasian":
            return "Caucasiano";
        case "black":
            return "Preto";
        case "grey":
            return "Cinza";
        case "pale":
            return "Pálida";
        default:
            return "Desconhecido";
    }
};

export const formatGender = (gender) => {
    switch (gender) {
        case "male":
            return "Masculino";
        case "female":
            return "Feminino";
        default:
            return "Não possui gênero";
    }
};

export const formatHairColor = (hairColor) => {
    switch (hairColor) {
        case "blond":
            return "Loiro";
        case "brown":
            return "Castanho";
        case "black":
            return "Preto";
        case "red":
            return "Vermelho";
        default:
            return "Não possui ou desconhecido";
    }
};

export const formatEyeColor = (eyeColor) => {
    switch (eyeColor) {
        case "blue":
            return "Azul";
        case "yellow":
            return "Amarelo";
        case "brown":
            return "Castanho";
        case "green":
            return "Verde";
        case "hazel":
            return "Avelã";
        case "grey":
            return "Cinza";
        case "amber":
            return "Cor de âmbar";
        case "black":
            return "Preto";
        case "white":
            return "Branco";
        default:
            return "Não possui ou desconhecido";
    }
};

export const fetchVehicleNames = async (res, setVehicles) => {
    if (res.data.vehicles.length > 0) {
        const vehicleNames = await Promise.all(
            res.data.vehicles.map((vehicleAPI) =>
                axios
                    .get(vehicleAPI)
                    .then((vehicleResponse) => vehicleResponse.data.name)
            )
        );
        setVehicles(vehicleNames);
    } else {
        setVehicles(["Não possui ou desconhecido"]);
    }
};

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

export const fetchSpeciesNames = async (res, setSpecies) => {
    if (res.data.species.length > 0) {
        const speciesNames = await Promise.all(
            res.data.species.map((specieAPI) =>
                axios
                    .get(specieAPI)
                    .then((specieAPIResponse) => specieAPIResponse.data.name)
            )
        );
        setSpecies(speciesNames);
    } else {
        setSpecies(["Humano ou desconhecido"]);
    }
};

export const fetchShipsNames = async (res, setShips) => {
    if (res.data.starships.length > 0) {
        const shipsNames = await Promise.all(
            res.data.starships.map((shipsAPI) =>
                axios
                    .get(shipsAPI)
                    .then((shipsAPIResponse) => shipsAPIResponse.data.name)
            )
        );
        setShips(shipsNames);
    } else {
        setShips(["Não possui ou desconhecido"]);
    }
};

export const fetchHomeData = async (res, setHome) => {
    try {
        const homeResponse = await axios.get(res);
        setHome(homeResponse.data.name);
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
};
