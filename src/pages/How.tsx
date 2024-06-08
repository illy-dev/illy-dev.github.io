import Navbar from "../Navbar"
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiVite, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function How() {
    return(
        <>
            <Navbar />

            <div className="flex flex-col pl-10">
                <h3 className="pt-10 pb-3">Sooo how does this Site work?</h3>

                <h5 className=" pb-4">Build with:</h5>
                <div className="flex flex-row mb-4"><IconContext.Provider value={{color: "#58c4dc", size: "2.5em"}}><FaReact /></IconContext.Provider><p className=" pt-[0.6rem] pl-[0.5rem]">React.js</p></div>
                <div className="flex flex-row mb-4"><IconContext.Provider value={{color: "#ffd028", size: "2.5em"}}><SiVite /></IconContext.Provider><p className=" pt-[0.6rem] pl-[0.5rem]">Vite.js</p></div>
                <div className="flex flex-row mb-4"><IconContext.Provider value={{color: "#38bdf8", size: "2.5em"}}><SiTailwindcss /></IconContext.Provider><p className=" pt-[0.6rem] pl-[0.5rem]">Tailwind CSS</p></div>
                <div className="flex flex-row mb-8"><IconContext.Provider value={{color: "#3178c6", size: "2.5em"}}><SiTypescript /></IconContext.Provider><p className=" pt-[0.6rem] pl-[0.5rem]">in Typescript</p></div>

                <h5>Source Code available <a href="https://github.com/illy-dev/illy-dev.github.io" className=" text-blue-500 underline">here</a></h5>
            </div>
        </>
    );
}