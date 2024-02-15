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
        <div>
            <div className="float-left  mt-16 sm:mt-8 ml-12 sm:ml-2 w-10 rounded-full text-white text-center bg-blue-900/40">
                <Link to="/">
                    <ArrowBackIcon fontSize="large" />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-screen h-[70vh] lg:h-[100vh] md:h-[140vh] sm:h-[120vh] gap-24 lg:gap-8 sm:gap-4 ">
                <h1 className="text-white text-6xl sm:text-4xl">Naves</h1>
                {loading ? ( // Verificando se está carregando os novos dados
                    <div className="flex flex-col items-center justify-center w-screen h-[49.5vh] ">
                        <CircularProgress />{" "}
                        {/* Se sim, continua com o CircularProgress */}
                    </div>
                ) : ships ? (
                    <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-2 sm:pr-6 ">
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
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <CircularProgress />
                )}
                <div className=" bg-zinc-300 rounded-3xl ">
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
        </div>
    );
}
