import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="border-2 z-10 border-neutral-800 h-14 my-6 rounded-lg text-white flex flex-row items-center justify-between">
            <div className="flex items-center justify-center flex-row px-3 py-3">
                <Link to="/" className="mx-1 flex flex-row items-center justify-center rounded-lg py-1 transition ease-in-out hover:bg-neutral-700 active:bg-neutral-700">
                    <i className="fa-solid fa-house w-4 h-4 px-3"></i>
                    <p className="px-3">Home</p>
                </Link>
            </div>
            <div className="flex items-center justify-center flex-row px-3 py-3">
                <Link to="/work" className="mx-1 flex flex-row items-center justify-center transition ease-in-out hover:bg-neutral-700 rounded-lg py-1">
                    <i className="fa-solid fa-code w-4 h-4 px-3"></i>
                    <p className="px-3">Work</p>
                </Link>
            </div>
            <div className="flex items-center justify-center flex-row px-3 py-3">
                <Link to="/contact" className="mx-1 flex flex-row items-center justify-center transition ease-in-out hover:bg-neutral-700 rounded-lg py-1">
                    <i className="fa-solid fa-phone w-4 h-4 px-3"></i>
                    <p className="px-3">Contact</p>
                </Link>
            </div>
            <div className="flex items-center justify-center flex-row px-3 py-3">
                <Link to="https://github.com/itsnapz" target="blank" className="mx-1 flex flex-row items-center justify-center transition ease-in-out hover:bg-neutral-700 rounded-lg py-1">
                    <i className="fa-brands fa-github w-4 h-4 px-3"></i>
                    <p className="px-3">GitHub</p>
                </Link>
            </div>
        </div>
    );
}