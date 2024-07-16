import Navbar from "./Navbar";

export default function Work(){
    return (
        <div className="h-screen bg-neutral-950">
            <div className="flex h-screen items-center flex-col text-center">
                <Navbar/>
                <div className="flex items-center flex-col text-center mt-10">
                    <h2 className="text-white text-5xl font-bold">My Work</h2>
                </div>
            </div>
        </div>
    );
}