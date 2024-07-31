export default function AboutUS() {
    return(
        <div className="bg-violet-500 w-auto mt-20 p-20 text-white">
            <div className="flex flex-col gap-4 sm:flex-row-reverse">
                <div className="flex flex-col gap-2">
                    <h1 className="uppercase text-3xl font-extrabold tracking-widest sm:text-6xl">About Us</h1>
                    <p className=" text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias nemo soluta totam iure cumque, dolorum odio porro quaerat praesentium exercitationem consequuntur modi voluptates animi ad blanditiis dicta nobis ratione?</p>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    )
}