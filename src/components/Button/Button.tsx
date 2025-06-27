interface ButtonProps{
    text:string;
}
export  default function Button({text}:ButtonProps){
    return(
        <button className="px-[38px]  cursor-pointer py-[8px] text-[16px] rounded-[10px] text-white bg-[#f39c39fc]">{text}</button>
    )
}
