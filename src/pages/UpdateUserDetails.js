import React, {useState,useEffect}from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProfileDetails from '../components/profiledetails';

const UpdateUserDetails = () => {
const [experience,setExperience] = useState([])
// const userId = useSelector((state) => state.user.userId)


    // useEffect(() => {
     
    
    //   // axios.get(`http://127.0.0.1:8000/api/get_user_details/${userId}`)
    //   //   .then((response)=>{

    //   //     console.log(response.data.educations);
    //   //     // console.log(response.data.experiences);
    //   //     // console.log(response.data.userdetails);
    //   //     // console.log(response.data.userimages);
    //   //   //   console.log(ExperienceData);

    //   //   let temp = response.data.educations
    //   //   setExperience([...temp])
      
    //   //   })
    //   //   .catch((error)=>{
    //   //     console.log(error);
    //   //   })
    //   const value = localStorage.getItem('userId');
    //   console.log(value);
    // }, [])

    const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isCustomer,setIsCustomer] = useState("")
  const [userId,setUserId] = useState()
  const [cookies, setCookie] = useCookies(['userId']);

  // let params = useParams();

  // console.log(params.email);

  useEffect(() => {

    // const userId = localStorage.getItem('userId');
    setUserId(cookies.userId)

    console.log("cookies : " + userId);
    axios.get(`http://127.0.0.1:8000/api/get_user_by_id/${cookies.userId}`)
        .then((response)=>{
      console.log(response.data.data);
         
          // setUserId(response.data.data.id)
          setEmail(response.data.data.email)
          setPassword(response.data.data.password)
          setIsCustomer(parseInt(response.data.data.isCustomer, 10))     
        })
        .catch((error)=>{
          console.log(error);
        })
  }, [])
    
  return (
    <ProfileDetails isCustomer={isCustomer} isAddDetails={false} password={password} email={email} userId={userId}/>  
  )
}

export default UpdateUserDetails
