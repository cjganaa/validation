"use client";
import { FormOne } from "@/components/step-one";
import { FormTwo } from "@/components/step-two";
import { FormThree } from "@/components/step-three";
import { FormSuccess } from "@/components/success";
import { useState } from "react";

const PATTERN = {
  "firstName": /^[a-zA-Z-]+$/,
  "lastName": /^[a-zA-Z-]+$/,
  "userName": /^[a-zA-Z0-9- ]+$/,
  "email": /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
  "phone": /[6-9][0-9]{7}/,
  "password": /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  "confirmPassword": /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  "birthDay": /\d{2,4}\-\d{1,2}\-\d{1,2}/,
} ;
const INPUTERROR = {
  "firstName": "First name cannot contain special characters or numbers.",
  "lastName": "Last name cannot contain special characters or numbers.",
  "userName": "This username is already taken. Please choose another one.",
  "email": "Please provide a valid email address.",
  "phone": "Please enter a valid phone number.",
  "password": "Password must include letters and numbers.",
  "confirmPassword": "Passwords do not match. Please try again.",
  "birthDay": "Please select a date.",
} ;

export default function Home() {
  const [currentForm, setCurrentForm] = useState(1);
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone:  "",
    password:  "",
    confirmPassword: "",
    birthDay:  "",
  });

  const onChange = (event) =>{
    const field = event.target.id;
    setFormInfo({...formInfo , [field]:event.target.value});
    if(field === "confirmPassword" && formInfo.password !== event.target.value){
      setErrorMsg({...errorMsg , [field]:INPUTERROR[field]});
    }else{
      setErrorMsg({...errorMsg , [field]:PATTERN[field]?.test(event.target.value)?'':INPUTERROR[field]});
    }
  }
  return(
    <div>
      <title>Form</title>
      <div className="h-screen w-screen flex justify-center items-center">
        <Form currentState={currentForm} setCurrentForm={setCurrentForm} onChange={onChange} errorMsg={errorMsg} formInfo={formInfo}/>
      </div>
    </div>
  );
}


function Form({formInfo,currentState, setCurrentForm,onChange,errorMsg}){
  switch(currentState){
    case 1:
      return <FormOne setFormState={setCurrentForm} onChange={onChange} errorMsg={errorMsg} formInfo={formInfo}/>
    case 2:
      return <FormTwo setFormState={setCurrentForm} onChange={onChange} errorMsg={errorMsg} formInfo={formInfo}/>
    case 3:
      return <FormThree setFormState={setCurrentForm} onChange={onChange} errorMsg={errorMsg} formInfo={formInfo}/>
    default:
      return <FormSuccess/>
  }
}