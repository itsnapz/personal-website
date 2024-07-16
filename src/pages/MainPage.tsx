import Navbar from "./Navbar";

export default function MainPage(){
    return (
        <div className="h-screen bg-neutral-950">
            <div className="flex h-screen items-center flex-col text-center">
                <Navbar/>
                <div className="flex h-screen absolute justify-center items-center flex-col text-center mt-">
                    <p className="text-white font-bold text-4xl"><span className="text-purple-600">C# programmer</span> & Web developer.</p>
                    <p className="text-white font-medium text-sm my-5 bg-neutral-800 px-3 rounded-xl hover:bg-neutral-900 transition ease-in-out">Learning React, TypeScript, Lua & C#</p>
                    <div className="flex flex-row">
                        <div className="mx-2">
                            <a href='https://github.com/itsnapz' target='blank'><i className="fa-brands fa-github text-white text-5xl transition ease-in-out hover:scale-110"></i></a>
                        </div>
                        <div className="mx-2">
                            <a href='https://www.instagram.com/m_nnovotny' target='blank'><i className="fa-brands fa-instagram text-white text-5xl transition ease-in-out hover:scale-110"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}