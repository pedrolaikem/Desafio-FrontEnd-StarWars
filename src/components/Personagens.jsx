import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Componentes
import PersonagensPage from "./PersonagensPage";
import Cards from "./Cards";

// MUI Componentes
import CircularProgress from "@mui/joy/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Importa todas as imagens de forma dinâmica (ajuste o caminho conforme a estrutura real)
// Neste exemplo, considera-se que a pasta "personagens" está em "src/components/personagens"
const allImages = import.meta.glob(
  "./personagens/**/*.jpg",
  { eager: true } // com eager, o módulo já é importado e podemos acessar a propriedade .default
);

export default function Personagens({ apiUrl, folder, personagem }) {
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    navigate(`/personagens=page${value}`);
  };

  useEffect(() => {
    const starWarsCharacter = async () => {
      try {
        setLoading(true);
        const res = await axios.get(apiUrl);
        setCharacter(res.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    starWarsCharacter();
  }, [apiUrl]);

  // Função para obter a imagem com base na pasta e no índice
  const getImageByPath = (folder, index) => {
    // Monta o caminho relativo conforme o padrão do import.meta.glob
    // Exemplo: "./personagens/1/0.jpg"
    const path = `./personagens/${folder}/${index}.jpg`;
    if (allImages[path]) {
      return allImages[path].default;
    } else {
      console.error(`Imagem não encontrada: ${path}`);
      return ""; // ou uma imagem placeholder
    }
  };

  return (
    <div>
      {/* Voltar página */}
      <div className="float-left mt-16 sm:mt-8 ml-12 sm:ml-2 w-10 rounded-full text-white text-center bg-blue-900/40">
        <Link to="/">
          <ArrowBackIcon fontSize="large" />
        </Link>
      </div>
      {/* End voltar página */}

      {/* Personagens */}
      <div className="flex flex-col items-center justify-center w-screen h-[70vh] lg:h-[100vh] md:h-[140vh] sm:h-[120vh] gap-24 lg:gap-8 sm:gap-4">
        <h1 className="text-white text-6xl sm:text-4xl">Personagens</h1>
        {loading ? (
          <div className="flex flex-col items-center justify-center w-screen h-[49.5vh] ">
            <CircularProgress />
          </div>
        ) : character ? (
          <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-2 sm:pr-6 ">
            {character.map((personagemData, index) => {
              // Obtém a imagem usando a função getImageByPath
              const imageUrl = getImageByPath(folder, index);
              // Cria a URL para o Link de detalhes, codificando a imagem se necessário
              const imageLink = encodeURIComponent(imageUrl);
              return (
                <Link
                  key={index}
                  to={`/personagens/${encodeURIComponent(
                    personagemData.name
                  )}/${imageLink}`}
                >
                  <Cards
                    key={index}
                    img={imageUrl}
                    transform={"translateY(-24px)"}
                  />
                  <div>
                    <h1 className="text-[#FFFF00] text-center font-inter text-xl">
                      {personagemData.name}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <CircularProgress />
        )}
        {/* End personagens */}

        {/* Pagination */}
        <div className="bg-zinc-300 rounded-3xl">
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
