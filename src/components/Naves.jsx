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

export default function Naves({ apiUrl, folder }) {

    const [ships, setShips] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleChange = (event, value) => {
        navigate(`/naves=page${value}`);
    };

    useEffect(() => {
        const starWarsShip = async () => {
            try {
                setLoading(true);
                const res = await axios.get(apiUrl);
                setShips(res.data.results);
                setLoading(false);
                console.log(res.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        starWarsShip();
    }, [apiUrl]);
    return (
        <div className="flex flex-col items-center justify-center w-screen h-[90vh] gap-24 ">
            <h1 className="text-white text-6xl">Naves</h1>
            {loading ? ( // Verificando se está carregando os novos dados
                <CircularProgress /> //Se sim, continua com o CircularProgress
            ) : ships ? (
                <div className="grid grid-cols-5 gap-12 ">
                    {ships.map((ship, index) => (
                        <Link
                            key={index}
                            to={`/naves/${encodeURIComponent(
                                ship.name
                            )}/${encodeURIComponent(
                                `./naves/${folder}/${index}.jpg`
                            )}`}
                        >
                            <Cards
                                key={index}
                                img={`./src/components/naves/${folder}/${index}.jpg`}
                                transform={"translateY(-24px)"}
                            />
                            <div>
                                <h1 className="text-[#FFFF00] text-center font-inter text-xl">
                                    {ship.name}
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
                        count={4}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                    />
                </Stack>
            </div>
        </div>
    );
}
