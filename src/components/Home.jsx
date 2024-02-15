import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import Obiwan from "./imgs/Obiwan.png";
import Cards from "./Cards";
import Yoda from "./imgs/Yoda.jpeg";
import Millenium from "./imgs/Millenium-Falcon.jpeg";
import Planeta from "./imgs/Planeta.jpg";

function Home() {
    return (
        <section className="w-screen">
            <div className="w-screen flex md:flex-col-reverse items-center justify-center gap-6 2xl:gap-1 lg:gap-0">
                {/* Obi-wan Img */}
                <img
                    src={Obiwan}
                    alt="Obiwan"
                    className="w-[40.7%] 2xl:w-[48.4%] xl:w-[32.5%] lg:w-[68.4%] m:w-[51%] xsm:w-[58.3%] 2xsm:w-[68.3%] 2xl:mt-[133px]  xl:mt-[130px] mr-[210px] mt-[132px] lg:mr-[180px] md:mr-0 md:mt-6 "
                />
                {/* End obi-wan img */}
                <div className="w-[50vw] md:w-[35vw] bg-black/50 font-inter border-black flex flex-col items-center justify-center pr-[150px] 2xl:pr-[300px] lg:pr-[375px] md:pr-0 ">
                    <div className="flex flex-col gap-12 ">
                        {/* Titulo + cards */}
                        <h1 className="text-white text-center text-5xl lg:text-3xl md:text-3xl font-inter md:pt-12">
                            Seu conteúdo de Star Wars
                        </h1>
                        <div className="flex md:flex-col gap-12 lg:gap-8">
                            <Link to="/personagens=page1">
                                <Cards
                                    img={Yoda}
                                    title="Personagens"
                                    transform={"translateY(-24px)"}
                                />
                            </Link>
                            <Link to="/planetas=page1">
                                <Cards
                                    img={Planeta}
                                    title="Planetas"
                                    transform={"translateY(-24px)"}
                                />
                            </Link>
                            <Link to="/naves=page1">
                                <Cards
                                    img={Millenium}
                                    title="Naves"
                                    transform={"translateY(-24px)"}
                                />
                            </Link>
                            {/* End Titulo + cards */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;
