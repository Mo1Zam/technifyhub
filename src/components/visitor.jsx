
export default function Visitor() {
    return(
        <div className="flex flex-col gap-10 justify-center items-center my-24 mx-4 sm:flex-row">
            <VisitorComps heading="35K+" paragraph="students certified"/>
            <VisitorComps heading="12+" paragraph="years of experience"/>
            <VisitorComps heading="95" paragraph="courses"/>
            <VisitorComps heading="25K+" paragraph="yearly visitor"/>
        </div>
    )
}



function VisitorComps({heading,paragraph}) {
    return(
        <div className="text-center">
            <h1 className="text-5xl font-extrabold sm:text-6xl">{heading}</h1>
            <p className="text-2xl font-light uppercase">{paragraph}</p>
        </div>
        
    )
}
