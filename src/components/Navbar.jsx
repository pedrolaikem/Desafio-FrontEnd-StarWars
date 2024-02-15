import LogoSW from "./imgs/Star_Wars_Logo.svg";
import DarthVader from "./imgs/darthVader.png";

function Navbar() {
    return (
        //Navbar
        <nav className="sticky top-0 z-[999]">
            <div className=" flex items-center justify-between bg-black border-b-2 w-screen h-[8vh] font-inter font-extrabold">
                {/* Link Home */}
                <a
                    href="/"
                    className="font-inter text-xl text-white ml-12 hover:translate-y-2 hover:ease-in-out duration-[0.25s] hover:bg-white hover:text-black"
                >
                    Home
                </a>
                {/* Logo Star Wars */}
                <a href="/">
                    <img
                        src={LogoSW}
                        alt="Logo-Star-Wars"
                        className="w-[91px] 2xl:w-[75px] lg:w-[60px] "
                    />
                </a>
                {/* Darth Vader */}
                <img
                    src={DarthVader}
                    alt="DarthVader"
                    className="2xl:w-[40px] w-[50px] mr-12"
                />
            </div>
        </nav>
    );
}
export default Navbar;
