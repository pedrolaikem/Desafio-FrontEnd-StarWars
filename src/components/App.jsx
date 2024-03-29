import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personagens from "./Personagens";
import Planetas from "./Planetas";
import Naves from "./Naves";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import PersonagensPage from "./PersonagensPage";
import PlanetasPage from "./PlanetasPage.jsx";
import NavesPage from "./NavesPage.jsx"

function App() {
    // Lista de dados com informações sobre as rotas de personagens
    const personagensData = [
        { apiUrl: "https://swapi.dev/api/people/", folder: "1" },
        { apiUrl: "https://swapi.dev/api/people/?page=2", folder: "2" },
        { apiUrl: "https://swapi.dev/api/people/?page=3", folder: "3" },
        { apiUrl: "https://swapi.dev/api/people/?page=4", folder: "4" },
        { apiUrl: "https://swapi.dev/api/people/?page=5", folder: "5" },
        { apiUrl: "https://swapi.dev/api/people/?page=6", folder: "6" },
        { apiUrl: "https://swapi.dev/api/people/?page=7", folder: "7" },
        { apiUrl: "https://swapi.dev/api/people/?page=8", folder: "8" },
        { apiUrl: "https://swapi.dev/api/people/?page=9", folder: "9" },
    ];

    const planetasData = [
        { apiUrl: "https://swapi.dev/api/planets/", folder: "1" },
        { apiUrl: "https://swapi.dev/api/planets/?page=2", folder: "2" },
        { apiUrl: "https://swapi.dev/api/planets/?page=3", folder: "3" },
        { apiUrl: "https://swapi.dev/api/planets/?page=4", folder: "4" },
        { apiUrl: "https://swapi.dev/api/planets/?page=5", folder: "5" },
        { apiUrl: "https://swapi.dev/api/planets/?page=6", folder: "6" },
    ];
    const shipsData = [
        { apiUrl: "https://swapi.dev/api/starships/", folder: "1" },
        { apiUrl: "https://swapi.dev/api/starships/?page=2", folder: "2" },
        { apiUrl: "https://swapi.dev/api/starships/?page=3", folder: "3" },
        { apiUrl: "https://swapi.dev/api/starships/?page=4", folder: "4" },
    ];
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* Rotas das páginas de personagens */}
                    {personagensData.map((data, index) => (
                        <Route
                            key={index}
                            path={`/personagens=page${index + 1}`}
                            element={
                                <Personagens
                                    apiUrl={data.apiUrl}
                                    folder={data.folder}
                                />
                            }
                        />
                    ))}

                    <Route
                        path="/personagens/:personagem/:imagem"
                        element={<PersonagensPage />}
                    />

                    {/* Rotas das páginas de planetas */}
                    {planetasData.map((data, index) => (
                        <Route
                            key={index}
                            path={`/planetas=page${index + 1}`}
                            element={
                                <Planetas
                                    apiUrl={data.apiUrl}
                                    folder={data.folder}
                                />
                            }
                        />
                    ))}

                    <Route
                        path="/planetas/:planeta/:imagem"
                        element={<PlanetasPage />}
                    />

                    {/* Rotas das páginas de naves */}
                    {shipsData.map((data, index) => (
                        <Route
                            key={index}
                            path={`/naves=page${index + 1}`}
                            element={
                                <Naves
                                    apiUrl={data.apiUrl}
                                    folder={data.folder}
                                />
                            }
                        />
                    ))}
                    <Route
                        path="/naves/:nave/:imagem"
                        element={<NavesPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
