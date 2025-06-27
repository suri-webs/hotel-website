interface HeadingProps{
    text:string;
}
export default function Heading({text}:HeadingProps){
    return(
        <h2 className="text-amber-600 text-[18px] max-md:text-base tracking-widest">{text}</h2>
    )
}