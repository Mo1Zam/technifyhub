function Navbar(){

    return(
        <div className="sticky top-0 text-xl uppercase">
            <nav className="flex flex-row items-center justify-between bg-white shadow-md p-3 sm:px-12">
                <div className="flex flex-row items-center gap-2 uppercase italic font-bold ">
                    <a href=""><img src="src\assets\logo.svg" alt="Error 404" className="w-[36px] h-[36px]" /></a>
                    <a href="">Technify Hub</a>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex flex-row justify-between gap-8 mr-9">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Course</a></li>
                    </ul>
                </div>
                <div className="ml-4 border-solid border-2 border-blue-700 rounded font-semibold">
                    <button className="p-1 px-4 text-blue-700">Join</button>
                </div>
            </nav>
        </div>
      
    )
}

export default Navbar