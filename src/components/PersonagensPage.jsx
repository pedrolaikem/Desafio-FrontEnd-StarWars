import Personagens from "./Personagens";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import CircularProgress from "@mui/joy/CircularProgress";
import {
    formatGender,
    formatHairColor,
    formatEyeColor,
    formatSkinColor,
    fetchVehicleNames,
    fetchFilmTitles,
    fetchSpeciesNames,
    fetchShipsNames,
    fetchHomeData,
} from "./personagensPageUtil";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PersonagensPage() {
    //Variaveis
    //Parametros de rota

    const { personagem, imagem } = useParams();

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

    useEffect(() => {
        const getCharacter = async () => {
            try {
                setLoading(true);
                const res = await axios.get(generateAPIURL(adjustedIndex));
                setChar(res.data);

                //Chamadas para as informações
                setGender(formatGender(res.data.gender));
                setHair(formatHairColor(res.data.hair_color));
                setEyes(formatEyeColor(res.data.eye_color));
                setSkin(formatSkinColor(res.data.skin_color));
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
                <div className="grid grid-cols-2 items-center justify-items-center h-[90vh]">
                    <div className="text-white text-lg w-[40%] ">
                        <Cards img={imagemRelativa} loading="lazy" />
                        <h1 className="text-[#FFFF00] text-center font-inter text-xl pt-2">
                            {decodeURIComponent(personagem)}
                        </h1>
                    </div>
                    <div className=" container bg-blue-900/40 w-[50%]  rounded-2xl text-white ">
                        <div className="font-inter text-xl flex flex-col gap-3 pl-5">
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
                            {<p>Planeta de nascimento: {home}.</p>}
                            {<p>Naves: {ships.join(", ")}.</p>}
                        </div>
                    </div>
                    <div className="fixed left-24 top-28 w-10 rounded-full text-white text-center bg-blue-900/40">
                        <Link onClick={() => history.back()}>
                            <ArrowBackIcon fontSize="large" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
