import { ReactNode } from "react";

interface CardProps {
    children: ReactNode
    title: string
    description: string
    inverse: boolean
}

export default function Card({ inverse, children, description, title }: CardProps) {
    return (
        <div className={`bg-clip-padding backdrop-filter backdrop-blur-sm border border-zinc-800 flex flex-col items-start justify-start text-left gap-3 group py-12 px-8 w-[280px] h-[200px] transition duration-200 hover:scale-105 rounded-xl ${inverse ? 'grad-radial-inverted' : 'grad-radial'}`}>
            <div className="group-hover:-translate-y-4 transition duration-400 flex gap-2 flex-col items-start">
                {children}
                <h4 className="text-white text-lg font-medium">{title}</h4>
            </div>
            <p className="absolute pe-2 text-zinc-400 transition duration-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-[68px]">{description}</p>
        </div>
    )
}