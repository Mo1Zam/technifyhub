export default function Explore() {
    return(
        <>
            <div className="bg-slate-400 p-5 gap-10 flex flex-col ">
                <h1 className="text-3xl uppercase text-center font-bold sm:text-6xl">explore top courses</h1>
                <div className="flex flex-col flex-nowrap gap-5 justify-center items-center  sm:flex-row">
                    <Card heading="windows" font="font-light" image="src\assets\windows.jpg" border="rounded-xl" />
                    <Card heading="cyberark" font="font-bold" image="src\assets\cyberark.png" />
                    <Card heading="linux" font="font-light" image="src\assets\linux.png"/>   
                </div>
            </div>
        </>
    )
}

function Card({image, heading , para, font,border}) {
    return(
        <div className="bg-violet-500 w-60 h-64 rounded-2xl text-center mt-3">
            <h1 className={`text-2xl my-5 uppercase text-white sm:text-4xl ${font}`}>{heading}</h1>
            <div className="flex justify-center items-center">
                <img src={image} alt="error 404" className={`w-20 sm:w-32 ${border}`}/>
            </div>     
        </div>
    )
}