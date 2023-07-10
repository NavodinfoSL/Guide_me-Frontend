/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./AddConsultantDetails.css";
import * as RiIcons from "react-icons/ri";
import axios from 'axios';
import * as AiIcons from "react-icons/ai";
import { CustomerExperienceData } from "../data/customerexperiencedata";
import { Education } from "../data/customereducation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProfileDetails from "../components/profiledetails";

const AddUserDetails = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isCustomer,setIsCustomer] = useState("")
  const [userId,setUserId] = useState()

  let params = useParams();

  // console.log(params.email);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get_user/${params.email}`)
        .then((response)=>{
      
         
          setUserId(response.data.data.id)
          setEmail(response.data.data.email)
          setPassword(response.data.data.password)
          setIsCustomer(parseInt(response.data.data.isCustomer, 10))     
        })
        .catch((error)=>{
          console.log(error);
        })
  }, [])
  
  return (
    <ProfileDetails isCustomer={isCustomer} isAddDetails={true} password={password} email={email} userId={userId}/>
  );

};

export default AddUserDetails;
