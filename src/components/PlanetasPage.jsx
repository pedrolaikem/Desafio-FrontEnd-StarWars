import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import CircularProgress from "@mui/joy/CircularProgress";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchFilmTitles, fetchResidentsName } from "./planetasPageUtil";

export default function PlanetasPage() {
    //Variaveis
    //Parametros de rota

    const { planeta, imagem } = useParams();

    //Imagem com path modificado que está sendo recebido dos Parametros de rota.

    const imagemRelativa = imagem.replace(".", "/src/components");

    // States settados para as informações do personagem.
    const [planet, setPlanet] = useState();
    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [peopleUrl, setPeopleUrl] = useState([]);

    // variaveis para gerar os links dos 82 personagens
    const folder = imagem.slice(11, 12);
    const indexImg = imagem.slice(13, 14);
    let adjustedIndex = (parseInt(folder) - 1) * 10 + parseInt(indexImg) + 1;

    //Função para gerar a URL da API com base no número do personagem
    const generateAPIURL = (planetNumber) => {
        return `https://swapi.dev/api/planets/${planetNumber}/`;
    };

    const peopleData2 = [
        {
            apiUrl: "https://swapi.dev/api/people/1/",
            folder: "1",
            indexImg: "0",
        },
        {
            apiUrl: "https://swapi.dev/api/people/2/",
            folder: "1",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/3/",
            folder: "1",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/4/",
            folder: "1",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/5/",
            folder: "1",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/6/",
            folder: "1",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/7/",
            folder: "1",
            indexImg: "6",
        },

        {
            apiUrl: "https://swapi.dev/api/people/8/",
            folder: "1",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/9/",
            folder: "1",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/10/",
            folder: "1",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/11/",
            folder: "2",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/12/",
            folder: "2",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/13/",
            folder: "2",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/14/",
            folder: "2",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/15/",
            folder: "2",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/16/",
            folder: "2",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/18/",
            folder: "2",
            indexImg: "6",
        },

        {
            apiUrl: "https://swapi.dev/api/people/19/",
            folder: "2",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/20/",
            folder: "2",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/21/",
            folder: "2",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/22/",
            folder: "3",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/23/",
            folder: "3",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/24/",
            folder: "3",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/25/",
            folder: "3",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/26/",
            folder: "3",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/27/",
            folder: "3",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/28/",
            folder: "3",
            indexImg: "6",
        },

        {
            apiUrl: "https://swapi.dev/api/people/29/",
            folder: "3",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/30/",
            folder: "3",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/31/",
            folder: "3",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/32/",
            folder: "4",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/33/",
            folder: "4",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/34/",
            folder: "4",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/35/",
            folder: "4",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/36/",
            folder: "4",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/37/",
            folder: "4",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/38/",
            folder: "4",
            indexImg: "6",
        },

        {
            apiUrl: "https://swapi.dev/api/people/39/",
            folder: "4",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/40/",
            folder: "4",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/41/",
            folder: "4",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/42/",
            folder: "5",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/43/",
            folder: "5",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/44/",
            folder: "5",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/45/",
            folder: "5",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/46/",
            folder: "5",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/47/",
            folder: "5",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/48/",
            folder: "5",
            indexImg: "6",
        },
        {
            apiUrl: "https://swapi.dev/api/people/49/",
            folder: "5",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/50/",
            folder: "5",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/51/",
            folder: "5",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/52/",
            folder: "6",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/53/",
            folder: "6",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/54/",
            folder: "6",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/55/",
            folder: "6",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/56/",
            folder: "6",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/57/",
            folder: "6",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/58/",
            folder: "6",
            indexImg: "6",
        },

        {
            apiUrl: "https://swapi.dev/api/people/59/",
            folder: "6",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/60/",
            folder: "6",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/61/",
            folder: "6",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/62/",
            folder: "7",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/63/",
            folder: "7",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/64/",
            folder: "7",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/65/",
            folder: "7",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/66/",
            folder: "7",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/67/",
            folder: "7",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/68/",
            folder: "7",
            indexImg: "6",
        },

        {
            apiUrl: "https://swapi.dev/api/people/69/",
            folder: "7",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/70/",
            folder: "7",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/71/",
            folder: "7",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/72/",
            folder: "8",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/73/",
            folder: "8",
            indexImg: "1",
        },

        {
            apiUrl: "https://swapi.dev/api/people/74/",
            folder: "8",
            indexImg: "2",
        },

        {
            apiUrl: "https://swapi.dev/api/people/75/",
            folder: "8",
            indexImg: "3",
        },

        {
            apiUrl: "https://swapi.dev/api/people/76/",
            folder: "8",
            indexImg: "4",
        },

        {
            apiUrl: "https://swapi.dev/api/people/77/",
            folder: "8",
            indexImg: "5",
        },

        {
            apiUrl: "https://swapi.dev/api/people/78/",
            folder: "8",
            indexImg: "6",
        },

        {
            apiUrl: "https://swapi.dev/api/people/79/",
            folder: "8",
            indexImg: "7",
        },

        {
            apiUrl: "https://swapi.dev/api/people/80/",
            folder: "8",
            indexImg: "8",
        },

        {
            apiUrl: "https://swapi.dev/api/people/81/",
            folder: "8",
            indexImg: "9",
        },

        {
            apiUrl: "https://swapi.dev/api/people/82/",
            folder: "9",
            indexImg: "0",
        },

        {
            apiUrl: "https://swapi.dev/api/people/83/",
            folder: "9",
            indexImg: "1",
        },
    ];

    const mapPeopleLinks = (peopleLinks) => {
        return peopleLinks.map((link) => {
            // Encontre o objeto correspondente nos dados das naves espaciais
            const peopleData = Object.values(peopleData2).find(
                (data) => data.apiUrl === link
            );
            if (!peopleData) {
                console.error(`Dados não encontrados para a URL: ${link}`);
                return null;
            }

            const { folder, indexImg } = peopleData;
            return { folder, indexImg };
        });
    };
    const peopleLinks = peopleUrl;
    const folderIndexImgArray = mapPeopleLinks(peopleLinks);
    console.log(folderIndexImgArray);

    useEffect(() => {
        const getPlanet = async () => {
            try {
                setLoading(true);
                const res = await axios.get(generateAPIURL(adjustedIndex));
                setPlanet(res.data);
                setPeopleUrl(res.data.residents);
                console.log(peopleUrl);
                await fetchFilmTitles(res, setFilms), console.log(res.data);
                await fetchResidentsName(res, setPeoples),
                    console.log(res.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        };
        getPlanet();
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
                                {decodeURIComponent(planeta)}
                            </h1>
                        </div>

                        <div className=" bg-blue-900/40 rounded-2xl text-white sm:mr-7">
                            <div className="font-inter text-xl flex flex-col gap-3 pl-5">
                                {
                                    <h1 className="font-inter font-extrabold text-center">
                                        Informações de {planet.name}
                                    </h1>
                                }
                                {<p>Nome: {planet.name}.</p>}
                                {<p>Criado em: {planet.created}</p>}
                                {<p>Editado em: {planet.edited}</p>}
                                {<p>Gravidade: {planet.gravity}</p>}
                                {
                                    <p>
                                        Período de órbita:{" "}
                                        {planet.orbital_period}
                                    </p>
                                }
                                {
                                    <p>
                                        Período de rotação:{" "}
                                        {planet.rotation_period}
                                    </p>
                                }
                                {
                                    <p>
                                        Terreno com água no planeta:{" "}
                                        {planet.surface_water}
                                    </p>
                                }
                                {<p>Terreno: {planet.terrain}</p>}
                                {<p>Diametro: {planet.diameter}</p>}
                                {<p>Clima: {planet.climate}</p>}
                                {<p>População: {planet.population}</p>}
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
                                {/* Links que tem ser clicáveis, segundo o desafio */}
                                {
                                    <div>
                                        {folderIndexImgArray.map(
                                            (item, index) => (
                                                <Link
                                                    to={`/personagens/${encodeURIComponent(
                                                        peoples[index]
                                                    )}/${encodeURIComponent(
                                                        `./personagens/${item.folder}/${item.indexImg}.jpg`
                                                    )}`}
                                                >
                                                    <p className="underline">
                                                        Residentes:{" "}
                                                        {peoples[index]}.
                                                    </p>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
