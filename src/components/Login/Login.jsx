import {React  , useState} from "react";
import "./Login.css";
import guidmepng from "./Images/guidme.png";
import consultancyjpg from "./Images/consultancy.jpg";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Login = () => {

    const history = useNavigate();
    const [cookies, setCookie] = useCookies(['userId']);
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
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('email: ', email);
    console.log('pass:', password);

  // const handleSignInSubmit = (e) => {
    e.preventDefault();

    // console.log(email);
    // console.log(password);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);


    if (!isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid(password)) {
      alert('Please enter a valid password.');
      return;
    }


    axios
    .post(`http://127.0.0.1:8000/api/login`, formData)
    .then((response) => {
      if(response.data.status=="success"){
        console.log(response.data);

        if( response.data.data == null){
          alert('Enter Valid Credetials to login')
        }else {
          navigate(
            `/`
          )
        }
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
  // }
    // Handle login form submission
  };

  function handleCustomerSignup() {
    // code to handle customer sign up
    history("/reg_customer");

  }

  function handleConsultantSignup() {
    // code to handle consultant sign up
        history("/reg_cunsultant");

  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  return (
    <div className="row">
    <div className="col-md-6 d-flex align-items-center">
      <div className="container text-center">
        {/* <img
          src={consultancyjpg}
          alt="guidme"
          className="img-fluid"
          style={{ maxWidth: '100%', height: 'auto' }}
        /> */}
         <h2 className="h2-more-lines">
          World Most Trusted <br/>
          <b>Travelling</b><br/>
          <b>Consultancy Service</b>
        </h2>
      </div>
    </div>
    <div className="col-md-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <img
              src={guidmepng}
              alt="consultancy"
              className="img-fluid "
              style={{ maxWidth: '100%', height: '250px' }}
            />
            <div className="login-form">
              <h1 className="text-center">Login to Your Account</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email or Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Log in"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <h2 className="text-center"><b>New Here?</b></h2>
            <p className="text-center">
              Sign up and discover a great amount of new opportunities!
            </p>
            <button
            //  style={{padding:'5px'}}
              className="btn btn-primary btn-block"
              onClick={handleCustomerSignup}
            >
              Sign up as a customer
            </button>
            <button
              style={{marginLeft:'5px'}}
              className="btn btn-primary btn-block"
              onClick={handleConsultantSignup}
            >
              Sign up as a consultant
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
