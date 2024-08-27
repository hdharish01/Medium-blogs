import myImage2 from "../images/quoteimage.png"

export const Quote = () => {
    return <div className="h-screen flex justify-center" style={{backgroundImage: `url(${myImage2})`,backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="flex flex-col justify-center">
            <div className="max-w-md text-2xl font-bold shadow-black shadow-inner rounded-xl p-3 font-mono">
            The sages of old spoke through silence. Today, they speak through keyboards
            </div>
            <div className="max-w-md text-lg font-semibold mt-3">
                Harish kumar
            </div>
            <div className="max-w-md text-white">
                Developer
            </div>
        </div>
    </div>
}