const starshipData2 = [
    {
        apiUrl: "https://swapi.dev/api/starships/2/",
        folder: "1",
        indexImg: "0",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/3/",
        folder: "1",
        indexImg: "1",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/5/",
        folder: "1",
        indexImg: "2",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/9/",
        folder: "1",
        indexImg: "3",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/10/",
        folder: "1",
        indexImg: "4",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/11/",
        folder: "1",
        indexImg: "5",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/12/",
        folder: "1",
        indexImg: "6",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/13/",
        folder: "1",
        indexImg: "7",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/15/",
        folder: "1",
        indexImg: "8",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/17/",
        folder: "1",
        indexImg: "9",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/21/",
        folder: "2",
        indexImg: "0",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/22/",
        folder: "2",
        indexImg: "1",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/23/",
        folder: "2",
        indexImg: "2",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/27/",
        folder: "2",
        indexImg: "3",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/28/",
        folder: "2",
        indexImg: "4",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/29/",
        folder: "2",
        indexImg: "5",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/31/",
        folder: "2",
        indexImg: "6",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/32/",
        folder: "2",
        indexImg: "7",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/39/",
        folder: "2",
        indexImg: "8",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/40/",
        folder: "2",
        indexImg: "9",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/41/",
        folder: "3",
        indexImg: "0",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/43/",
        folder: "3",
        indexImg: "1",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/47/",
        folder: "3",
        indexImg: "2",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/48/",
        folder: "3",
        indexImg: "3",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/49/",
        folder: "3",
        indexImg: "4",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/52/",
        folder: "3",
        indexImg: "5",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/58/",
        folder: "3",
        indexImg: "6",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/59/",
        folder: "3",
        indexImg: "7",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/61/",
        folder: "3",
        indexImg: "8",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/63/",
        folder: "3",
        indexImg: "9",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/64/",
        folder: "4",
        indexImg: "0",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/65/",
        folder: "4",
        indexImg: "1",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/66/",
        folder: "4",
        indexImg: "2",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/68/",
        folder: "4",
        indexImg: "3",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/74/",
        folder: "4",
        indexImg: "4",
    },
    {
        apiUrl: "https://swapi.dev/api/starships/75/",
        folder: "4",
        indexImg: "5",
    },
];
const mapStarshipLinks = (starshipLinks) => {
    return starshipLinks.map((link) => {
        // Encontre o objeto correspondente nos dados das naves espaciais
        const starshipData = Object.values(starshipData2).find(
            (data) => data.apiUrl === link
        );
        if (!starshipData) {
            console.error(`Dados não encontrados para a URL: ${link}`);
            return null;
        }

        const { folder, indexImg } = starshipData;
        return { folder, indexImg };
    });
};

export { starshipData2, mapStarshipLinks };
