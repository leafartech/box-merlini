'use client'

import { useState } from "react"

export default function Navbar() {
    const [navbar, setNavbar] = useState<boolean>(false)
    return (
        <nav className="fixed top-0 w-full h-[64px] bg-zinc-950 flex items-center justify-center border-b-2 border-red-900 z-[1000]">
            <img src="./images/logo.png" alt="" className="hidden sm:block h-12 absolute left-4" />
            <div className="absolute right-4 w-[32px] h-[32px] border border-white sm:hidden flex justify-center flex-col" onClick={() => setNavbar(!navbar)}>
                <span className="rounded-full w-full h-[2px] bg-red-500 -translate-y-1"></span>
                <span className="rounded-full w-full h-[2px] bg-red-500 translate-y-0"></span>
                <span className="rounded-full w-full h-[2px] bg-red-500 translate-y-1"></span>
            </div>
            <ul className={`absolute sm:relative flex gap-4 items-center text-lg translate-x-[100%] sm:translate-x-0 ${navbar ? 'translate-x-0 h-screen w-full bg-black' : ''}`}>
                <li className="hover:text-white text-zinc-300 cursor-pointer"><a href="#servicos">Serviços</a></li>
                <li className="hover:text-white text-zinc-300 cursor-pointer"><a href="#localizacao">Localização</a></li>
                <li className="hover:text-white text-zinc-300 cursor-pointer"><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    )
}