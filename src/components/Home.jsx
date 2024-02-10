import axios from 'axios'
import { useState } from 'react'
import Obiwan from './imgs/Obiwan.png'
import Cards from './Cards'
import Yoda from './imgs/Yoda.jpeg'
import Millenium from './imgs/Millenium-Falcon.jpeg'



function Home() {



    let Planeta = 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800' 
    return (
        <section className="w-screen">
                <div className="w-screen flex items-center justify-center overflow-hidden">
                    <div className="w-screen flex items-center justify-center gap-6">
                        <img src={Obiwan} alt="Obiwan" className='w-[40%] mr-[210px] mt-[132px]'/>
                        <div className="w-[50vw] h-[50vh] bg-black/50 font-inter  border-black flex flex-col items-center justify-center ">
                            <div className="flex flex-col gap-12 pr-[220px]">
                                <h1 className='text-white text-center text-5xl font-inter'>
                                    Seu conteúdo de Star Wars
                                </h1>
                                <div className='flex gap-12'>
                                    <a href="/personagens=page1"><Cards img={Yoda} title="Personagens"/></a>
                                    <a href="/planetas"><Cards img={Planeta} title="Planetas"/></a>
                                    <a href="/naves"><Cards img={Millenium} title="Naves"/></a>
                                </div> 
                            </div>
                        </div>      
                    </div>
                </div>  
        </section>
    )
} export default Home