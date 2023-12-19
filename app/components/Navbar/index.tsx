'use client'

import { useState } from "react"

export default function Navbar() {
    const [navbar, setNavbar] = useState<boolean>(false)
    return (
        <nav className="fixed top-0 w-full h-[64px] bg-zinc-950 flex items-center justify-center border-b-2 border-red-900 z-[1000]">
            <img src="./images/logo.png" alt="" className="h-12 sm:absolute left-4" />
            <div className="absolute right-2 z-10 sm:hidden flex justify-center flex-col gap-[5px] w-[28px] h-[32px]" onClick={() => setNavbar(!navbar)}>
                <span className="w-full h-[1.6px] bg-white"></span>
                <span className="w-full h-[1.6px] bg-white"></span>
                <span className="w-full h-[1.6px] bg-white"></span>
            </div>
            <ul className={`absolute top-0 sm:relative flex flex-col sm:flex-row gap-8 sm:gap-4 sm:items-center text-lg bg-zinc-950 sm:bg-transparen w-full sm:max-w-xs h-screen sm:h-full sm:translate-x-0 p-12 sm:p-0 pt-12 sm:pt-0 transition duration-200 ${navbar ? 'translate-x-0' : 'translate-x-[100%]'}`}>
                <li><img src="./images/logo.png" alt="" className="h-8 sm:absolute left-4" /></li>
                <li onClick={() => setNavbar(false)} className="hover:text-white text-zinc-300 cursor-pointer"><a href="#servicos">Serviços</a></li>
                <li onClick={() => setNavbar(false)} className="hover:text-white text-zinc-300 cursor-pointer"><a href="#localizacao">Localização</a></li>
                <li onClick={() => setNavbar(false)} className="hover:text-white text-zinc-300 cursor-pointer"><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    )
}
{/* <nav className="fixed top-0 w-full h-[64px] bg-zinc-950 flex items-center justify-center border-b-2 border-red-900 z-[1000]">
    <img src="./images/logo.png" alt="" className="h-12 sm:absolute left-4" />
    <div className="absolute right-2 z-10 sm:hidden flex justify-center flex-col gap-[5px] w-[28px] h-[32px]" onClick={() => setNavbar(!navbar)}>
        <span className="w-full h-[1.6px] bg-white"></span>
        <span className="w-full h-[1.6px] bg-white"></span>
        <span className="w-full h-[1.6px] bg-white"></span>
    </div>
    <ul className={`absolute sm:relative sm:flex gap-4 items-center text-lg bg-zinc-950 sm:bg-transparent w-full sm:max-w-xs h-[100vh] sm:h-full sm:translate-x-0 transition duration-200 ${navbar ? 'translate-x-0' : 'translate-x-[100%]'}`}>
        <li className="hover:text-white text-zinc-300 cursor-pointer"><a href="#servicos">Serviços</a></li>
        <li className="hover:text-white text-zinc-300 cursor-pointer"><a href="#localizacao">Localização</a></li>
        <li className="hover:text-white text-zinc-300 cursor-pointer"><a href="#contato">Contato</a></li>
    </ul>
</nav> */}