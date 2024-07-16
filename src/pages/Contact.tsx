import Navbar from "./Navbar";

export default function Contact(){
    return (
        <div className="h-screen bg-neutral-950">
            <div className="flex h-screen items-center flex-col text-center">
                <Navbar/>
                <div className="flex items-center text-center mt-10">
                    <h2 className="text-white text-5xl font-bold">Contact Me</h2>
                </div>
                <div className="flex flex-row mt-20 w-9/12 justify-evenly">
                    <div className="flex items-center">
                        <div className="flex flex-row items-center justify-center border-2 border-neutral-800 text-white px-5 py-1 rounded-lg">
                            <i className="fa-brands fa-discord w-4 h-4 px-3"></i>
                            <p className="font-semibold text-lg px-3">Discord</p>
                            <p className="">napz_</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex flex-row items-center justify-center border-2 border-neutral-800 text-white px-5 py-1 rounded-lg">
                            <i className="fa-solid fa-envelope w-4 h-4 px-3"></i>
                            <p className="font-semibold text-lg px-3">E-mail</p>
                            <p className="">m.novotnyeu@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}