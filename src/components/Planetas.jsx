//Importações relevantes
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, Route } from "react-router-dom";
//Componentes
import Cards from "./Cards";

//MUI Componentes
import CircularProgress from "@mui/joy/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Planetas({ apiUrl, folder }) {
    const [planet, setPlanet] = useState(); //Setar a informação do array de planetas
    const [loading, setLoading] = useState(true); //State para controlar o loading
    const navigate = useNavigate(); //UseNavigate para o pagination

    const handleChange = (event, value) => {
        navigate(`/planetas=page${value}`);
    };

    useEffect(() => {
        const starWarsPlanet = async () => {
            try {
                //Settar informações da API e passando para os States
                setLoading(true);
                const res = await axios.get(apiUrl);
                setPlanet(res.data.results);
                setLoading(false);
                console.log(res.data);
                console.log(res.data.results);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        starWarsPlanet();
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
            {/* Planetas */}
            <div className="flex flex-col items-center justify-center w-screen h-[70vh] lg:h-[100vh] md:h-[140vh] sm:h-[120vh] gap-24 lg:gap-8 sm:gap-4">
                <h1 className="text-white text-6xl sm:text-4xl">Planetas</h1>
                {loading ? ( // Verificando se está carregando os novos dados
                    <div className="flex flex-col items-center justify-center w-screen h-[49.5vh] ">
                        <CircularProgress />
                        {/* Se sim, continua com o CircularProgress */}
                    </div>
                ) : planet ? (
                    <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-2 sm:pr-6 ">
                        {planet.map((planeta, index) => (
                            <Link
                                key={index}
                                to={`/planetas/${encodeURIComponent(
                                    planeta.name
                                )}/${encodeURIComponent(
                                    `./planetas/${folder}/${index}.jpg`
                                )}`}
                            >
                                <Cards
                                    key={index}
                                    img={`./src/components/planetas/${folder}/${index}.jpg`}
                                    transform={"translateY(-24px)"}
                                />
                                <div>
                                    <h1 className="text-[#FFFF00] text-center font-inter text-xl">
                                        {planeta.name}
                                    </h1>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <CircularProgress />
                )}
                {/* End planetas */}
                {/* Pagination */}
                <div className="bg-zinc-300 rounded-3xl">
                    <Stack spacing={2}>
                        <Pagination
                            className="w-[100%]"
                            count={6}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                        />
                    </Stack>
                </div>
                {/* End pagination */}
                <div className="2xsm:mb-24 sm:mb-8"></div>
            </div>
        </div>
    );
}
