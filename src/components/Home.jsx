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
        <section className="w-screen h-[92vh] ">
            <div className=" ">
                <div className="w-screen flex md:flex-col-reverse items-center justify-center gap-6">
                    <img
                        src={Obiwan}
                        alt="Obiwan"
                        className="w-[39%] 2xl:w-[33%] 2xl:mt-[133px] xl:w-[32.5%] lg:w-[38%] xl:mt-[130px] mr-[210px] mt-[132px] md:mr-0 md:mt-6 sm:w-[51%] xsm:w-[58.3%] 2xsm:w-[68.3%]"
                    />
                    <div className="w-[50vw] md:w-[35vw] bg-black/50 font-inter border-black flex flex-col items-center justify-center pr-[150px] md:pr-0 ">
                        <div className="flex flex-col gap-12 ">
                            <h1 className="text-white text-center text-5xl md:text-3xl font-inter md:pt-12">
                                Seu conteúdo de Star Wars
                            </h1>
                            <div className="flex md:flex-col gap-12">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home;
