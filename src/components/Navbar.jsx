import LogoSW from "./imgs/Star_Wars_Logo.svg";
import DarthVader from "./imgs/darthVader.png";

function Navbar() {
    return (
        <nav className="sticky top-0 z-[999]">
            <div className=" flex items-center justify-between bg-black border-b-2 w-screen h-[8vh] font-inter font-extrabold  ">
                <a href="/" className="font-inter text-xl text-white ml-12">
                    Home
                </a>
                <a href="/">
                    <img
                        src={LogoSW}
                        alt="Logo-Star-Wars"
                        className="w-[91px] 2xl:w-[75px] lg:w-[60px] "
                    />
                </a>
                <img
                    src={DarthVader}
                    alt=""
                    className="2xl:w-[40px] w-[50px] mr-12"
                />
            </div>
        </nav>
    );
}
export default Navbar;
