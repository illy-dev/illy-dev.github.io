import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="sticky">
            <ul className=" list-none m-0 p-0 overflow-hidden">
                <li className=" float-left navbar-styles"><Link to={`/`} className="navbar-styles hover:head-animation overflow-hidden">illy is a dev</Link></li>
                <li className=" float-right navbar-styles"><Link to={`/how`} className="navbar-styles hover:animate-bounce">How?</Link></li>
                <li className=" float-right navbar-styles"><Link to={`/projects`} className="navbar-styles hover:animate-bounce">Projects</Link></li>
                <li className=" float-right navbar-styles"><Link to={`/aboutme`} className="navbar-styles hover:animate-bounce">About me</Link></li>
            </ul>
            <hr className=" border-[1px] w-[100%] border-white" />
        </div>
    );
}