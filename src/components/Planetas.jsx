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

    const [planet, setPlanet] = useState();
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const handleChange = (event, value) => {
        navigate(`/planetas=page${value}`);
    };

    useEffect(() => {
        const starWarsPlanet = async () => {
            try {
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
        <div className="flex flex-col items-center justify-center w-screen h-[90vh] gap-24 ">
            <h1 className="text-white text-6xl">Planetas</h1>
            {loading ? ( // Verificando se está carregando os novos dados
                <CircularProgress /> //Se sim, continua com o CircularProgress
            ) : planet ? (
                <div className="grid grid-cols-5 gap-12 ">
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
                                <div className="absolute left-24 top-28 w-10 rounded-full text-white text-center bg-blue-900/40">
                                    <Link onClick={() => history.back()}>
                                        <ArrowBackIcon fontSize="large" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <CircularProgress />
            )}
            <div className="bg-white rounded-lg ">
                <Stack spacing={2}>
                    <Pagination
                        count={6}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                    />
                </Stack>
            </div>
        </div>
    );
}
