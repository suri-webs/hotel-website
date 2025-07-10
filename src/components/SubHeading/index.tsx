interface SubHeadingProps{
    text:string;
}
export  default function SubHeading({text}:SubHeadingProps){
    return(
        <h3 className="text-2xl md:text-5xl font-serif text-[#222] max-w-3xl mx-auto">{text}</h3>
    )
}