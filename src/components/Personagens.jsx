//Importações relevantes
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, Route } from "react-router-dom";
//Componentes
import PersonagensPage from "./PersonagensPage";
import Cards from "./Cards";

//MUI Componentes
import CircularProgress from "@mui/joy/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Personagens({ apiUrl, folder, personagem }) {
    const [character, setCharacter] = useState(); // Adicionar estado para controlar os dados do array de personagem
    const [loading, setLoading] = useState(true); // Adicionando estado para controlar o carregamento
    const navigate = useNavigate(); //UseNavigate para o pagination

    const handleChange = (event, value) => {
        navigate(`/personagens=page${value}`);
    };

    useEffect(() => {
        const starWarsCharacter = async () => {
            try {
                //Settar informações da API e passando para os States
                setLoading(true);
                const res = await axios.get(apiUrl);
                setCharacter(res.data.results);
                setLoading(false);
                console.log(res.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        starWarsCharacter();
    }, [apiUrl]);

    return (
        <div>
            {/* Voltar página */}
            <div className="float-left  mt-16 sm:mt-8 ml-12 sm:ml-2 w-10 rounded-full text-white text-center bg-blue-900/40">
                <Link to="/">
                    <ArrowBackIcon fontSize="large" />
                </Link>
            </div>
            {/* End voltar página */}
            {/* Personagens */}
            <div className="flex flex-col items-center justify-center w-screen h-[70vh] lg:h-[100vh] md:h-[140vh] sm:h-[120vh] gap-24 lg:gap-8 sm:gap-4">
                <h1 className="text-white text-6xl sm:text-4xl">Personagens</h1>
                {loading ? ( // Verificando se está carregando os novos dados
                    <div className="flex flex-col items-center justify-center w-screen h-[49.5vh] ">
                        <CircularProgress />{" "}
                        {/* Se sim, continua com o CircularProgress */}
                    </div>
                ) : character ? (
                    <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-2 sm:pr-6 ">
                        {/* Map para receber os personagens no cards */}
                        {character.map((personagem, index) => (
                            <Link
                                key={index}
                                to={`/personagens/${encodeURIComponent(
                                    personagem.name
                                )}/${encodeURIComponent(
                                    `./personagens/${folder}/${index}.jpg`
                                )}`}
                            >
                                <Cards
                                    key={index}
                                    img={`src/components/personagens/${folder}/${index}.jpg`}
                                    transform={"translateY(-24px)"}
                                />
                                <div>
                                    <h1 className="text-[#FFFF00] text-center font-inter text-xl">
                                        {personagem.name}
                                    </h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <CircularProgress />
                )}
                {/* End personagens */}
                {/* Pagination */}
                <div className="bg-zinc-300 rounded-3xl  ">
                    <Stack spacing={2}>
                        <Pagination
                            count={9}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                        />
                    </Stack>
                </div>
                {/* End pagination */}
            </div>
        </div>
    );
}
