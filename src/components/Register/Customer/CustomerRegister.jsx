import React, { useState } from 'react';
import './CustomerRegister.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
//import airportjpg from './ImagesR/airport.jpg';

function CustomerRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setWorkingExperience] = useState("");
  const [linkedinUsername, setLinkedinUsername] = useState("");
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    // Regular expression to check for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Password validation rule: Required and at least 8 characters
    return password && password.length >= 8;
  };

  const isConfirmPassword = (confirmPassword, password) => {
    // Password validation rule: Required and at least 8 characters
    return confirmPassword == password;
  };

  
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Your Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
    console.log(`Working Experience: ${description}`);
    // console.log(`LinkedIn Username: ${linkedinUsername}`);
    // You can add your own logic to submit the data to the server or perform any other actions here


    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("description", description);
    formData.append("is_consultant", 1);
    formData.append("confirmPassword", confirmPassword);

    if (!isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!isPasswordValid(password)) {
      alert('Please enter a valid password.');
      return;
    }
    if (!isConfirmPassword(confirmPassword ,password)) {
      alert('Please make sure your passwords match.');
      return;
    }

    axios
      .post(`http://127.0.0.1:8000/api/register_consultant`, formData)
      .then((response) => {
        // console.log(response.data.status);
        if (response.data.status === "success") {
          alert('Customer Registerd Successfully');
          navigate(
            `/AddUserDetails/${email}`
          )


        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Network Error");
      });
   
    // You can add your own logic to submit the data to the server or perform any other actions here
    };
  

  return (
    <div className="signup">
    <div className="box" id="box" style={{display:'flex', alignItems:'center' , color:'white', textAlign:'center'}}>
      <div className="vertical-border"></div>
        <div>
          <h2 className="h2-three-lines" id="h2-three-lines">
            World Most Trusted <br/>
            <b>Travelling</b><br/>
            <b>Consultancy Service</b>
          </h2>
        </div>
      <div>
     
      <div classname="formData" style={{marginLeft:"650px"}}>
     
        <h3>Get the best consultancy service for your future</h3>
        <form >
      
          
          
          <input
              type="email"
              placeholder="Enter your Email Address"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
    

          <input
            type="password"
            placeholder="Enter your password"
            id="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm password "
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <textarea
              placeholder="Enter your working experience"
              id="workingExperience"
              value={description}
              onChange={(e) => setWorkingExperience(e.target.value)}
              required
            ></textarea>

          <button type="submit"onClick={handleSubmit} >Sign Up</button>
        </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CustomerRegister;
