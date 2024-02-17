import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import CircularProgress from "@mui/joy/CircularProgress";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchFilmTitles, fetchResidentsName } from "./planetasPageUtil";
import { mapPeopleLinks } from "./peopleData.js";

export default function PlanetasPage() {
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

    //Função para desestruturar o array de URLs e poder utilizar no map para os nomes dos personagens serem clicáveis.
    const folderIndexImgArray = mapPeopleLinks(peopleUrl);

    useEffect(() => {
        const getPlanet = async () => {
            try {
                //Settar informações da API
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
                    {/* Voltar página */}
                    <div className="float-left mt-16 ml-12 sm:ml-0 w-10 rounded-full text-white text-center bg-blue-900/40">
                        <Link onClick={() => history.back()}>
                            <ArrowBackIcon fontSize="large" />
                        </Link>
                    </div>
                    {/* End Voltar página */}
                    {/* Planetas */}
                    <div className="grid grid-cols-2 items-center justify-items-center h-[90vh] lg:grid-cols-1 lg:pt-2">
                        <div className="text-white text-lg w-[40%] ">
                            <Cards img={imagemRelativa} loading="lazy" />
                            <h1 className="text-[#FFFF00] text-center font-inter text-xl pt-2">
                                {decodeURIComponent(planeta)}
                            </h1>
                        </div>
                        {/* Informações */}
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
                                        {/* Map para comparar o link com o banco de dados, e receber o folder e o indexImg corretos */}
                                        <p>Residentes: </p>
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
                                                        {peoples[index]}.
                                                    </p>
                                                </Link>
                                            )
                                        )}
                                        {/* End informações */}
                                    </div>
                                }
                            </div>
                        </div>
                        {/* End planetas */}
                    </div>
                </div>
            )}
        </div>
    );
}
