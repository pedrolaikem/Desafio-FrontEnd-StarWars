import Personagens from "./Personagens";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import CircularProgress from "@mui/joy/CircularProgress";
import {
    formatGender,
    formatEyeColor,
    formatSkinColor,
    formatHairColor,
    fetchVehicleNames,
    fetchFilmTitles,
    fetchSpeciesNames,
    fetchShipsNames,
    fetchHomeData,
} from "./personagensPageUtil";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlanetasPage from "./PlanetasPage.jsx";
import linkToPlanet from "./linkToPlanet.js";

export default function PersonagensPage() {
    //Variaveis
    //Parametros de rota

    const { personagem, imagem } = useParams();
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
    //Imagem com path modificado que está sendo recebido dos Parametros de rota.

    const imagemRelativa = imagem.replace(".", "/src/components");

    // States settados para as informações do personagem.
    const [char, setChar] = useState();
    const [gender, setGender] = useState();
    const [hair, setHair] = useState();
    const [eyes, setEyes] = useState();
    const [skin, setSkin] = useState();
    const [vehicles, setVehicles] = useState([]);
    const [films, setFilms] = useState([]);
    const [ships, setShips] = useState([]);
    const [species, setSpecies] = useState([]);
    const [home, setHome] = useState();
    const [loading, setLoading] = useState(true);
    const [urlPlanet, setUrlPlanet] = useState("");
    const [urlNaves, setUrlNaves] = useState([]);

    // variaveis para gerar os links dos 82 personagens
    const folder = imagem.slice(14, 15);
    const indexImg = imagem.slice(16, 17);

    let adjustedIndex = (parseInt(folder) - 1) * 10 + parseInt(indexImg) + 1;
    const errorIndex = 17;
    if (adjustedIndex >= errorIndex) {
        adjustedIndex++;
    }

    //Função para gerar a URL da API com base no número do personagem
    const generateAPIURL = (characterNumber) => {
        return `https://swapi.dev/api/people/${characterNumber}/`;
    };

    //Chamando função linkToPlanet para pegar os valores de pasta e newUrl
    const { pasta, newUrl } = linkToPlanet(urlPlanet);

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
    const starshipLinks = urlNaves;
    const folderIndexImgArray = mapStarshipLinks(starshipLinks);
    console.log(folderIndexImgArray);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                setLoading(true);

                const res = await axios.get(generateAPIURL(adjustedIndex));
                setUrlNaves(res.data.starships);
                setChar(res.data);

                //Chamadas para as informações
                setGender(formatGender(res.data.gender));
                setHair(formatHairColor(res.data.hair_color));
                setEyes(formatEyeColor(res.data.eye_color));
                setSkin(formatSkinColor(res.data.skin_color));
                setUrlPlanet(res.data.homeworld);
                //Funções assincronas
                await fetchVehicleNames(res, setVehicles);
                await fetchFilmTitles(res, setFilms),
                    await fetchSpeciesNames(res, setSpecies),
                    await fetchShipsNames(res, setShips),
                    await fetchHomeData(res.data.homeworld, setHome);
                console.log(res.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        };
        getCharacter();
    }, []);

    return (
        <div>
            {loading ? (
                <div className=" flex w-screen h-[90vh] items-center justify-center">
                    <CircularProgress />
                </div>
            ) : (
                <div>
                    <div className="float-left mt-16 ml-12 sm:ml-0 w-10 rounded-full text-white text-center bg-blue-900/40">
                        <Link to="/">
                            <ArrowBackIcon fontSize="large" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 items-center justify-items-center h-[90vh] lg:grid-cols-1 lg:pt-2">
                        <div className="text-white text-lg w-[40%] ">
                            <Cards img={imagemRelativa} loading="lazy" />
                            <h1 className="text-[#FFFF00] text-center font-inter text-xl pt-2">
                                {decodeURIComponent(personagem)}
                            </h1>
                        </div>
                        <div className=" bg-blue-900/40 rounded-2xl text-white sm:mr-7">
                            <div className="font-inter text-xl flex flex-col gap-3 pl-5 ">
                                {
                                    <h1 className="font-inter font-extrabold text-center">
                                        Informações de {char.name}
                                    </h1>
                                }
                                {<p>Nome: {char.name}.</p>}
                                {<p>Altura: {char.height}m.</p>}
                                {<p>Peso: {char.mass}kg.</p>}
                                {<p>Gênero: {gender}.</p>}
                                {<p>Cor do cabelo: {hair}.</p>}
                                {<p>Cor da pele: {skin}.</p>}
                                {<p>Cor do olho: {eyes}.</p>}
                                {<p>Criado em: {char.created.slice(0, 10)}.</p>}
                                {<p>Editado em: {char.edited.slice(0, 10)}.</p>}
                                {<p>Data de nascimento: {char.birth_year}.</p>}
                                {/* Resultados que são link de API*/}
                                {<p>Veiculos: {vehicles.join(", ")}.</p>}
                                {
                                    <div>
                                        <p>Filmes:</p>
                                        {films.map((film, index) => (
                                            <div key={index}>
                                                <span>{film}</span>
                                                {index < films.length - 1 && (
                                                    <br />
                                                )}{" "}
                                                {/* Adiciona a quebra de linha se não for o último filme */}
                                            </div>
                                        ))}
                                    </div>
                                }
                                {<p>Espécie: {species}.</p>}
                                {/* Resultados que devem ser clicáveis, segundo o desafio. */}
                                {home ? (
                                    <Link
                                        className="underline"
                                        to={`/planetas/${encodeURIComponent(
                                            home
                                        )}/${encodeURIComponent(
                                            `./planetas/${pasta}/${newUrl}.jpg`
                                        )}`}
                                    >
                                        Planeta de nascimento: {home}.
                                    </Link>
                                ) : (
                                    <p>Informação de casa não disponível.</p>
                                )}

                                {folderIndexImgArray.map((item, index) => (
                                    <Link
                                        to={`/naves/${encodeURIComponent(
                                            ships[index]
                                        )}/${encodeURIComponent(
                                            `./naves/${item.folder}/${item.indexImg}.jpg`
                                        )}`}
                                    >   
                                        <p>Naves:</p>
                                        <p className="underline">
                                           {ships[index]}.
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
