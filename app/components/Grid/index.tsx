export default function Grid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-4 items-center">
            <div className="hidden sm:block relative rounded-xl group">
                <img src="./images/cars/1.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="sm:translate-y-12 relative rounded-xl group">
                <img src="./images/cars/2.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="relative rounded-xl group">
                <img src="./images/cars/3.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="relative rounded-xl group">
                <img src="./images/cars/4.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="sm:translate-y-12 relative rounded-xl group">
                <img src="./images/cars/5.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="relative rounded-xl group">
                <img src="./images/cars/6.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="relative rounded-xl group">
                <img src="./images/cars/7.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="sm:translate-y-12 relative rounded-xl group">
                <img src="./images/cars/8.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
            <div className="relative rounded-xl group">
                <img src="./images/cars/9.png" alt="" className="rounded-xl transition duration-200 group-hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 transition duration-200 group-hover:opacity-0"></div>
            </div>
        </div>
    )
}