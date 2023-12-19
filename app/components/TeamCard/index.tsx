interface TeamCard {
    name: string
    imagePath: string
    description: string
}

export default function TeamCard({ description, imagePath, name }: TeamCard) {
    return (
        <div className="flex items-center sm:flex-col gap-3">
            <img src={`./images/team/${imagePath}.png`} alt="" className="rounded-full w-32 sm:w-56 mb-4 sm:mb-0" />
            <div className="">
                <h3 className="font-medium text-2xl text-white">{name}</h3>
                <p className="text-zinc-400">{description}</p>
            </div>
        </div>
    )
}