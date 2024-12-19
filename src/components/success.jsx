import Image from "next/image";
export function FormSuccess(){
    return(
        <div className="w-[480px] h-[655px] rounded-lg flex flex-col items-start bg-transparent justify-between">
        <div className="w-full h-fit rounded-lg bg-white flex flex-col gap-1 p-[32px]">
            <Image src={"/pineconeLogo.png"} 
            width={60}
            height={60}
            alt="Picture"
            ></Image>
            <b className="text-[26px]">You're All Set 🔥</b>
            <div className="text-[#8E8E8E]">We have received your submission. Thank you!</div>
        </div>
    </div>
    );
}