import { validation } from "@/helper/val";
import Image from "next/image";

export function FormTwo({formInfo,setFormState,onChange,errorMsg}){
    let buttonStyle = "self-center bg-[#D6D8DB] text-[#A9ACAF] w-[65%] h-[44px] rounded-lg";
    function handleNext(){
        if(errorMsg.email === '' && errorMsg.password ===''  && errorMsg.confirmPassword ==='' && errorMsg.phone ==='' && formInfo.email.length > 1 && formInfo.password.length > 1 && formInfo.phone.length > 1 && formInfo.confirmPassword.length > 1){
            setFormState(3);
        }
    }
    if(errorMsg.email === '' && errorMsg.password ===''  && errorMsg.confirmPassword ==='' && errorMsg.phone ==='' && formInfo.email?.length > 1 && formInfo.password?.length > 1 && formInfo.phone?.length > 1 && formInfo.confirmPassword?.length > 1){
        buttonStyle = "self-center bg-[#202124] text-white w-[65%] h-[44px] rounded-lg";
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
                <div className="text-sm font-semibold text-[#334155] flex">Email <div className="text-[#E14942]">&nbsp;*</div></div>
                <input 
                    id="email"
                    type="email" 
                    onChange={onChange}
                    className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3"/>
                {validation(errorMsg?.email)}
                <div className="text-sm font-semibold text-[#334155] flex">Phone number <div className="text-[#E14942]">&nbsp;*</div></div>
                <input
                    id="phone" 
                    type="tel" 
                    onChange={onChange}
                    className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3" />
                {validation(errorMsg?.phone)}
                <div className="text-sm font-semibold text-[#334155] flex">Password <div className="text-[#E14942]">&nbsp;*</div></div>
                <input 
                    id="password"
                    type="password" 
                    onChange={onChange}
                    className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3" />
                {validation(errorMsg?.password)}
                <div className="text-sm font-semibold text-[#334155] flex">Confirm password <div className="text-[#E14942]">&nbsp;*</div></div>
                <input 
                    id="confirmPassword"
                    type="password" 
                    onChange={onChange}
                    className="border border-[#CBD5E1] rounded-lg w-full h-[44px] focus:outline-none focus:border-[#0CA5E9] p-3"/>
                {validation(errorMsg?.confirmPassword)}
            </div>
            
            <div className="w-full flex justify-between">
                <button className="self-center bg-[#D6D8DB] text-[#A9ACAF] w-[33%] h-[44px] rounded-lg" onClick={() => setFormState(1)}>&lt; Back</button>
                <button className={buttonStyle} onClick={handleNext}> Continue 2/3 &gt;</button>
            </div>
            
        </div>
    );
}