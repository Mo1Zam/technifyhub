import PrimaryButton from "./buttons/PrimaryButton"


export default function Explore() {
    return(
        <>
            <div className="bg-slate-400 p-5 gap-10 flex flex-col ">
                <h1 className="text-3xl uppercase text-center font-bold sm:text-6xl">explore top courses</h1>
                <div className="flex flex-col flex-nowrap gap-5 justify-center items-center  sm:flex-row">
                    <Card heading="windows" font="font-normal" image="src\assets\windows.jpg" height="sm:h-80" />
                    <Card heading="cyberark" font="font-bold" image="src\assets\cyberark.png" height="sm:h-96" />
                    <Card heading="linux" font="font-normal" image="src\assets\linux.png" height="sm:h-80" />   
                </div>
            </div>
        </>
    )
}
    
function Card({image, heading , para, font,height}) {
    return(
        <div className={`bg-violet-500 w-60 h-full rounded-2xl text-center mt-3 ${height}`}>
            <div className="flex justify-center items-center">
                <img src={image} alt="error 404" className={`w-20 pt-6 sm:w-32 h-`}/>
            </div> 
            <h1 className={`text-2xl my-5 uppercase text-black sm:text-3xl ${font} #FAF237`}>{heading}</h1>
            <div className="flex justify-start p-4">
                <PrimaryButton name="buy now" bgcolor="bg-yellow-400" textColor="text-black" width="sm:w-full" borderColor="border-yellow-300"/>     
            </div>
        </div>
    )
}