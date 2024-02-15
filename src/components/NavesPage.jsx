import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import CircularProgress from "@mui/joy/CircularProgress";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { adjustIndex } from "./adjustIndex";
import { fetchFilmTitles, fetchPilotsName } from "./navesPageutil.js";

export default function NavesPage() {
    //Variaveis
    //Parametros de rota

    const { nave, imagem } = useParams();

    //Imagem com path modificado que está sendo recebido dos Parametros de rota.

    const imagemRelativa = imagem.replace(".", "/src/components");

    // States settados para as informações da nave.
    const [ships, setShips] = useState();
    const [loading, setLoading] = useState(true);
    const [films, setFilms] = useState([]);
    const [peoples, setPeoples] = useState([]);

    // variaveis para gerar os links das naves
    const folder = imagem.slice(8, 9);
    const indexImg = imagem.slice(10, 11);
    let adjustedIndex = adjustIndex(folder, indexImg);

    //Função para gerar a URL da API com base no número da nave
    const generateAPIURL = (shipNumber) => {
        return `https://swapi.dev/api/starships/${shipNumber}/`;
    };

    useEffect(() => {
        const getShips = async () => {
            try {
                setLoading(true);
                const res = await axios.get(generateAPIURL(adjustedIndex));
                setShips(res.data);
                await fetchFilmTitles(res, setFilms);
                await fetchPilotsName(res, setPeoples);
                console.log(res.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        };
        getShips();
    }, []);

    return (
        <div>
            {loading ? (
                <div className=" flex w-screen h-[90vh] items-center justify-center">
                    <CircularProgress />
                </div>
            ) : (
                <div className="grid grid-cols-2 items-center justify-items-center h-[90vh]">
                    <div className="text-white text-lg w-[40%] ">
                        <Cards img={imagemRelativa} loading="lazy" />
                        <h1 className="text-[#FFFF00] text-center font-inter text-xl pt-2">
                            {decodeURIComponent(nave)}
                        </h1>
                    </div>

                    <div className=" container bg-blue-900/40 w-[50%]  rounded-2xl text-white ">
                        <div className="font-inter text-xl flex flex-col gap-3 pl-5">
                            {
                                <h1 className="font-inter font-extrabold text-center">
                                    Informações de {ships.name}
                                </h1>
                            }{" "}
                            {<p>Nome: {ships.name}.</p>}
                            {<p>Modelo: {ships.model}.</p>}
                            {<p>Classe da nave: {ships.starship_class}.</p>}
                            {<p>Fabricante da nave: {ships.manufacturer}.</p>}
                            {<p>Custo: {ships.cost_in_credits}.</p>}
                            {<p>Tamanho: {ships.length}m.</p>}
                            {<p>Tripulação: {ships.crew}.</p>}
                            {<p>Passageiros: {ships.passengers}.</p>}
                            {
                                <p>
                                    Velocidade máxima na atmosfera{" "}
                                    {ships.max_atmosphering_speed}.
                                </p>
                            }
                            {
                                <p>
                                    Classe de Hyperdrive:{" "}
                                    {ships.hyperdrive_rating}.
                                </p>
                            }
                            {<p>MGLT {ships.MGLT}.</p>}
                            {
                                <p>
                                    Capacidade de carga: {ships.cargo_capacity}
                                    KG.
                                </p>
                            }
                            {<p>Consumo: {ships.consumables}.</p>}
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
                            {<p>Criado em: {ships.created}.</p>}
                            {<p>Editado em: {ships.edited}.</p>}
                            {/* Precisa ser clicável, segundo o desafio */}
                            {
                                <div>
                                    <p>Pilotos:</p>
                                    {peoples.map((people, index) => (
                                        <div key={index}>
                                            <span>{people}</span>
                                            {index < peoples.length - 1 && (
                                                <br />
                                            )}{" "}
                                            {/* Adiciona a quebra de linha se não for o último filme */}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="absolute left-24 top-28 w-10 rounded-full text-white text-center bg-blue-900/40">
                        <Link onClick={() => history.back()}>
                            <ArrowBackIcon fontSize="large" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
