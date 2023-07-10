/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./navbar.css";
import axios from "axios";
import * as RiIcons from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [cookies, setCookie] = useCookies(["userId"]);
  const navigate = useNavigate();

  const NavigateToProfile = (event) => {
    event.preventDefault();
    if (cookies.userId) {
      axios
        .get(`http://127.0.0.1:8000/api/get_user_by_id/${cookies.userId}`)
        .then((response) => {
          console.log(response.data.data);
          if (parseInt(response.data.data.isCustomer, 10) == 1) {
            navigate(`/CustomerProfile`);
          }

          if (parseInt(response.data.data.isCustomer, 10) == 0) {
            navigate(`/ConsultantProfile`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("You need to login first");
    }
  };

  const unSetMouse = () => {
    setShowInput(false);
  };

  const setMouse = () => {
    setShowInput(true);
  };
  return (
    <nav className="navbar navbar-light nav navbar-expand-lg">
      <img
        className="logo mx-2"
        id="logo"
        src="/images/logo/guidme_logo.png"
        width="95"
        height="35"
        alt="menu"
      />
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="nav">
        <ul className="navbar-nav">
          <li className="nav-item px-3">
            <a href="#" className="nav-link" style={{ color: "black" }}>
              Home
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              href="/Consultantfilter"
              className="nav-link"
              style={{ color: "black" }}
            >
              Consultants
            </a>
          </li>
          <li className="nav-item px-3" onClick={NavigateToProfile}>
            <a href="#" className="nav-link" style={{ color: "black" }}>
              Jobs
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="#" className="nav-link" style={{ color: "black" }}>
              Blog
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              href="/login"
              className="nav-link"
              style={{ color: "black" }}
            >
              Login/Signup
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              href="/ContactUs"
              className="nav-link"
              style={{ color: "black" }}
            >
              Contact Us
            </a>
          </li>

          {showInput ? (
            <li className="nav-item search px-3 pt-2">
              | &nbsp;
              <input
                placeholder="Search..."
                onMouseLeave={unSetMouse}
                onMouseEnter={setMouse}
              />
            </li>
          ) : (
            <li className="nav-item pt-2 px-3">
              | &nbsp;
              <RiIcons.RiSearchLine
                size={20}
                onMouseLeave={unSetMouse}
                onMouseEnter={setMouse}
              />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
