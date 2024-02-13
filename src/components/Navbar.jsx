import LogoSW from './imgs/Star_Wars_Logo.svg'

function Navbar() {

    return (
        <div className="flex items-center justify-center bg-black border-b-2 w-screen h-[6vh] font-inter font-extrabold  ">
           <a href="/"><img src={LogoSW} alt="Logo-Star-Wars" className='w-[91px]'/></a>
        </div>
    )

} export default Navbar