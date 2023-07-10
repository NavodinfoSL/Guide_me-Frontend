import React,{useState,useEffect} from 'react'
import axios from 'axios';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import "./test.css"
import { logDOM } from '@testing-library/react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../redux/actions/userActions';
import { ExperienceData } from '../data/experiencedata';
import { useCookies } from 'react-cookie';

const Test = () => {


  // const notify = () => toast.success("Profile Details Added..!",
  // {
  //   onClose: () => window.alert('Called when I close')
  // });

  // const [startDate, setStartDate] = useState();
  // const [showStartDate,setShowStartDate] = useState("")
  // const [showEndDate,setShowEndDate] = useState("")
  // const [endDate, setEndDate] = useState();
  // const [months,setMonths] = useState(0)
  // const [years,setYears] = useState(0)

  //   const [file, setFile] = useState()
  //   const [image,setImage] = useState(null)

  //   function handleChange(event) {
  //       setFile(event.target.files[0])
  //       console.log(event.target.files[0]);
  //     }

  //     function handleSubmit(event){
  //       event.preventDefault()

  //       const id = 5

  //       const formData = new FormData();
  //       formData.append('images', file);
  //       axios.post(`http://127.0.0.1:8000/api/upload/${id}`,formData)
  //       .then((response)=>{
      
  //         console.log(response);
      
  //       })
  //       .catch((error)=>{
  //         console.log(error);
  //       })
  //     }

  //     function getImage (){
  //       const id = 5
  //       axios.get(`http://127.0.0.1:8000/api/images/${id}`)
  //       .then((response)=>{

  //         setImage(response.data.data.path)
      
  //         console.log(response.data.data.path);
      
  //       })
  //       .catch((error)=>{
  //         console.log(error);
  //       })
  //     }

//     useEffect(() => {

//       if(startDate != null && endDate != null){
//         const moment = require('moment');
//      setShowStartDate(new Date(startDate).toLocaleDateString('en-us', { year:"numeric", month:"short"}))
//       setShowEndDate(new Date(endDate).toLocaleDateString('en-us', { year:"numeric", month:"short"}))

//       const timeStart = moment(startDate);
// const timeEnd = moment(endDate);
// const diff = timeEnd.diff(timeStart);
// const diffDuration = moment.duration(diff);

// if(diffDuration._data.days > 27){
//   let tempMonth = diffDuration._data.months + 1

//   if(tempMonth == 12) {
//     let tempYear = diffDuration._data.years + 1;
    
//     tempMonth = 0;
//     setMonths(tempMonth)
//     setYears(tempYear)
//   }else{
//     setMonths(tempMonth)
//     setYears(diffDuration._data.years)
//   }

  
// }else{
//   setMonths(diffDuration._data.months)
//   setYears(diffDuration._data.years)
// }
// console.log(diffDuration);<br/>
// // console.log("months - "+months);<br/>
// // console.log("years - "+ years)
//       }

      
      
      
//       // console.log(endDate-startDate);
      
//     }, [endDate])
    
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isCustomer,setIsCustomer] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [cookies, setCookie, removeCookie] = useCookies(['name']);


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("isCustomer", isCustomer);

    axios
      .post(`http://127.0.0.1:8000/api/register`, formData)
      .then((response) => {
        if(response.data.status=="success"){
          navigate(
            `/AddUserDetails/${email}`
          )
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [cookies, setCookie] = useCookies(['userId']);

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    // console.log(email);
    // console.log(password);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
    .post(`http://127.0.0.1:8000/api/login`, formData)
    .then((response) => {
      if(response.data.status=="success"){
        console.log(response.data);
        // dispatch(setUserId(response.data.data.id))
      const cookieName = "userId"
      const cookieValue = response.data.data.id
        let date = new Date();
    date.setTime(date.getTime()+(0.1*60*60*1000));
    // document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
    // setCookie('name', response.data.data.id, {path: '/',maxAge: 3600});
    setCookie('userId', response.data.data.id, { path: '/',maxAge: 3600 });
        // localStorage.setItem('userId', response.data.data.id);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const userId = useSelector((state) => state.user.userId)
  

  const getUser = (event) => {
    event.preventDefault();
    navigate(
      `/`
    )
    //let cookie = document.cookie.split(';');
    // let cookie = document.cookie
   // console.log(cookies.userId);
    // if(cookies.userId){
    //   console.log("have user Id : "+cookies.userId );
    // }else{
    //   console.log("expired");
    // }
    
    
// console.log('cookie : ', cookie);

// console.log("userId"+userId);
    // axios.get(`http://127.0.0.1:8000/api/get_user_details/${userId}`)
    //     .then((response)=>{

    //       console.log(response.data.educations);
    //       // console.log(response.data.experiences);
    //       // console.log(response.data.userdetails);
    //       // console.log(response.data.userimages);
    //       console.log(ExperienceData);
      
    //     })
    //     .catch((error)=>{
    //       console.log(error);
    //     })

  }

  return (
    <>

    <h4 style={{marginLeft:"50px"}}>signup</h4>
    <input
    type="text"
    placeholder='email'
    onChange={(e) => setEmail(e.target.value)}
    className=" "
    style={{marginLeft:"50px"}}
    />

<input
    type="text"
    placeholder='password'
    onChange={(e) => setPassword(e.target.value)}
    className="mt-2 mb-5"
    style={{marginLeft:"50px"}}
    />

    <select style={{marginLeft:"50px"}} onChange={(e) => setIsCustomer(e.target.value)}>
      <option value={false}>Consultent</option>
      <option value={true}>Customer</option>
    </select>

    <button onClick={handleSubmit} style={{marginLeft:"50px"}}>submit</button>

    <br />

    <h4 style={{marginLeft:"50px"}}>signin</h4>
    <input
    type="text"
    placeholder='email'
    onChange={(e) => setEmail(e.target.value)}
    className=" "
    style={{marginLeft:"50px"}}
    />

<input
    type="text"
    placeholder='password'
    onChange={(e) => setPassword(e.target.value)}
    className="mt-2 mb-5"
    style={{marginLeft:"50px"}}
    />

    <button onClick={handleSignInSubmit} style={{marginLeft:"50px"}}>submit</button>


    <button onClick={getUser} className='mt-5' style={{marginLeft:"20px"}}>get user</button>
    </>

     // <>
    // <button onClick={notify}>Notify!</button>
    //     <ToastContainer />
    // </>
    // <div>
    //   <form onSubmit={handleSubmit} >
    //       <h1>React File Upload</h1>
    //       <input type="file" multipart="true" onChange={handleChange} />
    //       <button type="submit">Upload</button>
    //     </form>


    //     <div style={{paddingTop:'20px'}}>
    //       <button onClick={() => getImage()}>get image</button><br/>
    //       {
    //         image != null ? (<img src={'http://127.0.0.1:8000/uploads/'+image}  style={{width:"400px",height:"400px"}}/>):null
    //       }
          
    //     </div>
    // </div>
    // <>
    //   <DatePicker
    //     selected={startDate}
    //     onChange={(date) => setStartDate(date)}
    //     selectsStart
    //     startDate={startDate}
    //     endDate={endDate}
    //     dateFormat="MM/yyyy"
    //     showMonthYearPicker
    //     className='abc'     />
    //   <DatePicker
    //     selected={endDate}
    //     minDate={new Date(startDate)}
    //     onChange={(date) => setEndDate(date)}
    //     selectsEnd
    //     startDate={startDate}
    //     endDate={endDate}
    //     dateFormat="MM/yyyy"
    //     showMonthYearPicker
    //   />
    //   <div>start date - {showStartDate}</div>
    //   <div>end date - {showEndDate}</div>
    //   <div>months - {months}</div>
    //   <div>years - {years}</div>
    // </>
  )
}

export default Test
