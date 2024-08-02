export default function Explore() {
    return(
        <>
            <div className="bg-slate-400 p-5 gap-10 flex flex-col ">
                <h1 className="text-7xl uppercase text-center font-bold">explore top courses</h1>
                <div className="flex flex-col gap-5 justify-center items-center  sm:flex-row">
                    <Card heading="windows" font="font-light" />
                    <Card heading="cyberark" font="font-bold"/>
                    <Card heading="linux" font="font-light"/>   
                </div>
            </div>
        </>
    )
}

function Card({image, heading , para, font}) {
    return(
        <div className="bg-violet-500 w-60 h-96 rounded-2xl text-center mt-3">
            <h1 className={`text-4xl my-5 uppercase text-white ${font}`}>{heading}</h1>
        </div>
    )
}