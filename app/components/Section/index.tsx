
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode
    id?: string
    className?: string
    classNameS?: string
}

export default function Section({ children, className, id, classNameS }: SectionProps) {
    return (
        <section className={`relative w-full flex items-center justify-center ${classNameS}`} id={id}>
            <div className={`w-full max-w-7xl flex items-center justify-center flex-col px-4 sm:px-0 ${className}`}>
                {children}
            </div>
        </section>
    )
}
