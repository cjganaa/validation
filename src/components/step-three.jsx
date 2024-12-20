import { validation } from "@/helper/val";
import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { MdOutlineImage } from "react-icons/md";
import { useState } from "react";

export function FormThree({setFormState,onChange,formInfo,errorMsg}){
    const [imageDrop, setImageDrop] = useState(null);
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    let buttonStyle = "self-center bg-[#D6D8DB] text-[#A9ACAF] w-[65%] h-[44px] rounded-lg";
    function handleNext(){
        if(formInfo.birthDay?.length > 1 && imageDrop !== null){
            setFormState(4);
        }
    }
    if(formInfo.birthDay?.length > 1 && imageDrop !== null){
        buttonStyle = "self-center bg-[#202124] text-white w-[65%] h-[44px] rounded-lg";
    }
    function storing(event){
        const file = event.target.files[0];
        
        if(!file) return;
        const fileEvent = {target:{ value: file, id: event.target.id}}
        onChange(fileEvent);

        const previewImage = URL.createObjectURL(file);
        setImageDrop(previewImage);
    }
    return(
    <div className="w-[480px] h-[655px] rounded-lg flex flex-col items-start bg-white p-[32px] justify-between">
        <div className="w-full flex flex-col gap-1">
            <Image src={"/pineconeLogo.png"} 
            width={60}
            height={60}
            alt="Picture"
            ></Image>
            <b className="text-[26px]">Join Us! 😎</b>
            <div className="text-[#8E8E8E]">Please provide all current information accurately.</div>
            <div className="text-sm font-semibold text-[#334155] flex">Date of birth<div className="text-[#E14942]">&nbsp;*</div></div>
            <input 
                id="birthDay"
                type="date" 
                max={currentDate}
                onChange={onChange}
                className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3"/>
            {validation(errorMsg.birthDay)}
            <div className="text-sm font-semibold text-[#334155] flex">Profile image<div className="text-[#E14942]">&nbsp;*</div></div>
            <div className="bg-[#7F7F800D] w-full h-[180px] rounded-lg flex flex-col gap-1 justify-center items-center overflow-hidden">
                <label htmlFor="profile" className="flex flex-col items-center justify-center w-full h-64 cursor-pointer bg-gray-100 hover:bg-gray-200">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <div className="rounded-full w-9 h-9 bg-white flex justify-center items-center"> <MdOutlineImage className="text-s"/></div>
                        <div className="text-[14px] font-medium text-[#09090B]">Add image</div>
                    </div>
                    <input id="profile" type="file" className="hidden" onChange={storing}/>
                    <img src={imageDrop}/>
                </label>
            </div>
                
        </div>
        <div className="w-full flex justify-between">
            <button className="self-center bg-[#D6D8DB] text-[#A9ACAF] w-[33%] h-[44px] rounded-lg" onClick={() => setFormState(2)}>&lt; Back</button>
            <button className={buttonStyle} onClick={handleNext}> Continue 3/3 &gt;</button>
        </div>
    </div>
    );
}