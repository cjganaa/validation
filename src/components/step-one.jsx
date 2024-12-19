import { validation } from "@/helper/val";
import Image from "next/image";

export function FormOne({formInfo,setFormState,onChange,errorMsg}){
    let buttonStyle = "self-center bg-[#D6D8DB] text-[#A9ACAF] w-full h-[44px] rounded-lg";
    function handleNext(){
        if(errorMsg.firstName === '' && errorMsg.lastName ==='' && errorMsg.userName ==='' && formInfo.firstName.length > 1 && formInfo.lastName.length > 1 && formInfo.userName.length > 1){
            setFormState(2);
        }
    }
    if(errorMsg.firstName === '' && errorMsg.lastName ==='' && errorMsg.userName ==='' && formInfo.firstName.length > 1 && formInfo.lastName.length > 1 && formInfo.userName.length > 1){
        buttonStyle = "self-center bg-[#202124] text-white w-full h-[44px] rounded-lg";
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
                <div className="text-sm font-semibold text-[#334155] flex">First name <div className="text-[#E14942]">&nbsp;*</div></div>
                <input 
                    id="firstName" 
                    type="text" 
                    onChange={onChange}
                    className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3"/>
                {validation(errorMsg.firstName)}
                <div className="text-sm font-semibold text-[#334155] flex">Last name <div className="text-[#E14942]">&nbsp;*</div></div>
                <input
                    id="lastName" 
                    type="text" 
                    onChange={onChange}
                    className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3" />
                {validation(errorMsg.lastName)}
                <div className="text-sm font-semibold text-[#334155] flex">Username <div className="text-[#E14942]">&nbsp;*</div></div>
                <input 
                    id="userName"
                    type="text" 
                    onChange={onChange}
                    className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3"/>
                {validation(errorMsg.userName)}
            </div>
            <button className={buttonStyle} onClick={handleNext}> Continue 1/3 &gt;</button>
        </div>
    );
}