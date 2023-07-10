/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CustomerExperienceData } from "../data/customerexperiencedata";
import { Education } from "../data/customereducation";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "./profiledetails.css";

const ProfileDetails = (props) => {
  //image set
  const [profileImage, setProfileImage] = useState(
    "/images/profileimages/initial_profile.png"
  );
  const [coverImage, setCoverImage] = useState(
    "/images/profileimages/initial_cover_image.PNG"
  );

  // isCustomer={isCustomer} isAddDetails={true} password={password} email={email} userId={userId}

  //passwordhide
  const [hidePassword, setHidePassword] = useState(true);
  const [cookies, setCookie] = useCookies(["userId"]);

  //experience set
  const [experience, setExperience] = useState([]);
  const [jobPosition, setJobPossion] = useState("");
  const [organization, setOrganization] = useState("");
  const [jobAddress, setJobAddress] = useState("");

  //education set
  const [inputEducation, setInputEducation] = useState([]);
  const [educationDigree, setEducationDigree] = useState("");
  const [educationUniversity, setEducationUniversity] = useState("");

  //seteducationdateinputs
  const [startEduDate, setStartEduDate] = useState("");
  const [showStartEduDate, setShowStartEduDate] = useState("");
  const [endEduDate, setEndEduDate] = useState("");
  const [showEndEduDate, setShowEndEduDate] = useState("");

  //setinputs
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workingCompany, setWorkingCompany] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageFile, setProfileImageFile] = useState("");
  const [coverImageFile, setCoverImageFile] = useState("");

  //inputdefaultvalues
  const [defaultExperience, setDefaultExperience] = useState([]);
  const [defaultEducation, setDefaultEducation] = useState([]);
  const [defaultfName, setDefaultfName] = useState("");
  const [defaultlName, setDefaultlName] = useState("");
  const [defaultOccupation, setDefaultOccupation] = useState("");
  const [defaultWorkingCompany, setDefaultWorkingCompany] = useState("");
  const [defaultContactNo, setDefaultContactNo] = useState("");
  const [defaultAddress, setDefaultAddress] = useState("");
  const [defaultCity, setDefaultCity] = useState("");
  const [defaultState, setDefaultState] = useState("");
  const [defaultZipCode, setDefaultZipCode] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("");
  const [defaultProfileImageFile, setDefaultProfileImageFile] = useState("");
  const [defaultCoverImageFile, setDefaultCoverImageFile] = useState("");

  //setexperiencedateinputs
  const [startDate, setStartDate] = useState("");
  const [showStartDate, setShowStartDate] = useState("");
  const [showEndDate, setShowEndDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expDuration, setExpDuration] = useState("");
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  const navigate = useNavigate();

  //img referances set
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const isCustomer = props.isCustomer === 1;

  const handleExperience = (event) => {
    event.preventDefault();
    if (
      jobPosition === "" ||
      organization === "" ||
      startDate === "" ||
      endDate === "" ||
      jobAddress === ""
    ) {
      console.log(experience);
      alert("Experience details not complete..!");
    } else {
      var tempJobData = {
        jobPosition: jobPosition,
        organization: organization,
        jobStartDate: showStartDate,
        jobEndDate: showEndDate,
        jobDuration: years + " Years and " + months + " months",
        jobAddress: jobAddress,
      };

      setExpDuration(years + " Years and " + months + " months");
      setExperience([...experience, tempJobData]);

      document.getElementById("jobaddress").value = "";
      document.getElementById("jobcompany").value = "";
      document.getElementById("jobposition").value = "";
      setJobPossion("");
      setOrganization("");
      setJobAddress("");
      setMonths(0);
      setYears(0);
      setShowStartDate("");
      setShowEndDate("");
      setStartDate("");
      setEndDate("");
    }
  };

  const handleStartDate = (date) => {
    // console.log(startDate);
    setShowStartDate(
      new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
      })
    );
  };

  const handleEndDate = (date) => {
    console.log(startDate);
    setShowEndDate(
      new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
      })
    );
  };

  const handleStartEduDate = (date) => {
    setShowStartEduDate(
      new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
      })
    );
  };

  const handleEndEduDate = (date) => {
    setShowEndEduDate(
      new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
      })
    );
  };

  const handleProfileImage = (event) => {
    // setSelectedFile(event.target.files[0]);
    const selectedFile = event.target.files[0];
    setProfileImageFile(selectedFile);

    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setProfileImage(reader.result);
    };
  };

  const handlecoverImage = (event) => {
    const selectedFile = event.target.files[0];
    setCoverImageFile(selectedFile);

    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setCoverImage(reader.result);
    };
  };

  const handleHidePassword = (event) => {
    event.preventDefault();
    setHidePassword(!hidePassword);
    var password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const removieExperience = (event, index) => {
    event.preventDefault();
    experience.splice(index, 1);
    setExperience([...experience]);
  };

  const removieEducation = (event, index) => {
    event.preventDefault();
    inputEducation.splice(index, 1);
    setInputEducation([...inputEducation]);
  };

  const handleEducation = (event) => {
    event.preventDefault();

    if (
      educationDigree === null ||
      educationUniversity === null ||
      startEduDate === null ||
      endEduDate === null
    ) {
      alert("Education details not complete..!");
    } else {
      var tempEducationData = {
        educationDigree: educationDigree,
        educationUniversity: educationUniversity,
        educationDuration: showStartEduDate + " - " + showEndEduDate,
        eduStartDate: showStartEduDate,
        eduEnddate: showEndEduDate,
      };

      setInputEducation([...inputEducation, tempEducationData]);

      document.getElementById("eduuniversity").value = "";
      document.getElementById("edudigree").value = "";
      setEducationDigree("");
      setEducationUniversity("");
      setStartEduDate("");
      setEndEduDate("");
    }
  };

  const experienceDelete = (event, expId) => {
    event.preventDefault();
    axios
      .delete(`http://127.0.0.1:8000/api/delete_experience/${expId}`)
      .then((response) => {
        // console.log(response.data.status);
        if (response.data.status === "success") {
          toast.success(response.data.message);
          setDefautValues();
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Network Error");
      });
  };

  const educationDelete = (event, eduId) => {
    event.preventDefault();
    axios
      .delete(`http://127.0.0.1:8000/api/delete_education/${eduId}`)
      .then((response) => {
        // console.log(response.data.status);
        if (response.data.status === "success") {
          toast.success(response.data.message);
          setDefautValues();
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Network Error");
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (props.isAddDetails) {
      const userId = props.userId;
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("firstName", firstName);
      formData.append("lasttName", lasttName);
      formData.append("occupation", occupation);
      formData.append("workingCompany", workingCompany);
      formData.append("contactNo", contactNo);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("zipCode", zipCode);
      formData.append("country", country);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profileImageFile", profileImageFile);
      formData.append("coverImageFile", coverImageFile);
      formData.append("experience", JSON.stringify(experience));
      formData.append("inputEducation", JSON.stringify(inputEducation));

      axios
        .post(`http://127.0.0.1:8000/api/add_details`, formData)
        .then((response) => {
          // console.log(response.data.status);
          if (response.data.status === "success") {
            toast.success(response.data.message, {
              onClose: () => navigate(`/`),
            });

            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("occupation").value = "";
            document.getElementById("workingcompany").value = "";
            document.getElementById("email").value = "";
            document.getElementById("contactnumber").value = "";
            document.getElementById("locationaddress").value = "";
            document.getElementById("city").value = "";
            document.getElementById("state").value = "";
            document.getElementById("zipcode").value = "";
            document.getElementById("country").value = "";
            // setProfileImage("")
            // setProfileImageFile("")
            // setCoverImage("")
            // setCoverImageFile("")
            // setExperience([])
            // setInputEducation([])
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Network Error");
        });
    } else {
      const userId = props.userId;
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("firstName", firstName);
      formData.append("lasttName", lasttName);
      formData.append("occupation", occupation);
      formData.append("workingCompany", workingCompany);
      formData.append("contactNo", contactNo);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("zipCode", zipCode);
      formData.append("country", country);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profileImageFile", profileImageFile);
      formData.append("coverImageFile", coverImageFile);
      formData.append("experience", JSON.stringify(experience));
      formData.append("inputEducation", JSON.stringify(inputEducation));

      axios
        .post(`http://127.0.0.1:8000/api/update_details`, formData)
        .then((response) => {
          // console.log(response.data.status);
          if (response.data.status === "success") {
            toast.success(response.data.message, {
              onClose: () => navigate(`/`),
            });
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("occupation").value = "";
            document.getElementById("workingcompany").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("contactnumber").value = "";
            document.getElementById("locationaddress").value = "";
            document.getElementById("city").value = "";
            document.getElementById("state").value = "";
            document.getElementById("zipcode").value = "";
            document.getElementById("country").value = "";
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          toast.error("Network Error");
        });
    }
  };

  const setDefautValues = () => {
    // const userId = localStorage.getItem("userId");
    const userId = cookies.userId;
    axios
      .get(`http://127.0.0.1:8000/api/get_user_details/${userId}`)
      .then((response) => {
        if (
          response.data.userimages == null ||
          response.data.userimages.coverImage == null
        ) {
          setCoverImage("/images/profileimages/initial_cover_image.PNG");
        } else {
          setCoverImage(
            "http://127.0.0.1:8000/uploads/" +
              response.data.userimages.coverImage
          );
        }

        if (
          response.data.userimages == null ||
          response.data.userimages.profileImage == null
        ) {
          setProfileImage("/images/profileimages/initial_profile.png");
        } else {
          setProfileImage(
            "http://127.0.0.1:8000/uploads/" +
              response.data.userimages.profileImage
          );
        }

        let temp_1 = response.data.experiences;
        let temp_2 = response.data.educations;
        setDefaultExperience([...temp_1]);
        setDefaultEducation([...temp_2]);

        if (response.data.userdetails != null) {
          setDefaultAddress(response.data.userdetails.address);
          setDefaultCity(response.data.userdetails.city);
          setDefaultContactNo(
            parseInt(response.data.userdetails.contactNo, 10)
          );
          setDefaultCountry(response.data.userdetails.country);
          setDefaultfName(response.data.userdetails.firstName);
          setDefaultlName(response.data.userdetails.lastName);
          setDefaultOccupation(response.data.userdetails.occupation);
          setDefaultState(response.data.userdetails.state);
          setDefaultWorkingCompany(response.data.userdetails.workinCompany);
          setDefaultZipCode(response.data.userdetails.zipCode);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (props.isAddDetails == false) {
      setDefautValues();
    }

    if (startDate != null && endDate != null) {
      const moment = require("moment");
      setShowStartDate(
        new Date(startDate).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
        })
      );
      setShowEndDate(
        new Date(endDate).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
        })
      );

      const timeStart = moment(startDate);
      const timeEnd = moment(endDate);
      const diff = timeEnd.diff(timeStart);
      const diffDuration = moment.duration(diff);

      if (diffDuration._data.days > 27) {
        let tempMonth = diffDuration._data.months + 1;

        if (tempMonth == 12) {
          let tempYear = diffDuration._data.years + 1;

          tempMonth = 0;
          setMonths(tempMonth);
          setYears(tempYear);
        } else {
          setMonths(tempMonth);
          setYears(diffDuration._data.years);
        }
      } else {
        setMonths(diffDuration._data.months);
        setYears(diffDuration._data.years);
      }
    }
  }, [endDate]);

  return (
    <>
      <ToastContainer />
      <div className="row d-flex mx-auto">
        <div className="col-2 sidebar">
          <div className="text-center pt-3">
            <h4>Back</h4>
          </div>
        </div>
        <div className="col-10">
          <div className="entire d-flex justify-content-center">
            <div className="row pt-3 ">
              <div className="container">
                <div className="container-fluid px-1">
                  <div className="row d-flex mx-auto">
                    <form className="form-card" onSubmit={handleFormSubmit}>
                      <div className="row justify-content-between mx-auto">
                        <div className="row">
                          <h3>Edit Profile</h3>
                        </div>
                        <div className="row mt-5  mx-auto">
                          <div className="coverimage">
                            <img src={coverImage} class="card-img-top" />
                            <div
                              className="editicon2"
                              onClick={() => {
                                fileInputRef2.current.click();
                              }}
                            >
                              <i class="fas fa-pencil" />
                            </div>

                            <input
                              type="file"
                              style={{ display: "none" }}
                              ref={fileInputRef2}
                              onChange={handlecoverImage}
                            />
                          </div>

                          <div className="profileimg">
                            <div className="wraper">
                              <img src={profileImage} className="" />
                            </div>

                            <div
                              className="editicon"
                              onClick={() => {
                                fileInputRef.current.click();
                              }}
                            >
                              <i class="fas fa-pencil" />
                            </div>

                            <input
                              type="file"
                              style={{ display: "none" }}
                              ref={fileInputRef}
                              onChange={handleProfileImage}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="inputfields">
                        <div className="row justify-content-between mx-auto firstname&lastname">
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>First name</b>
                            </label>
                            <input
                              type="text"
                              className="p-2 rounded"
                              placeholder={defaultfName}
                              id="firstname"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Last name</b>
                            </label>
                            <input
                              type="text"
                              placeholder={defaultlName}
                              className="p-2 rounded"
                              id="lastname"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-between mx-auto occupation&workincompany">
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Occupation</b>
                            </label>
                            <input
                              type="text"
                              placeholder={defaultOccupation}
                              className="p-2 rounded"
                              id="occupation"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setOccupation(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Working Company</b>
                            </label>
                            <input
                              type="text"
                              placeholder={defaultWorkingCompany}
                              className="p-2 rounded"
                              id="workingcompany"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) =>
                                setWorkingCompany(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="row justify-content-between mx-auto email">
                          <div className="form-group col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Email</b>
                            </label>
                            <input
                              type="email"
                              placeholder={props.email}
                              className="p-2 rounded"
                              id="email"
                              disabled={props.isAddDetails}
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="row justify-content-between mx-auto contactno&address">
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Contact Number</b>
                            </label>
                            <input
                              type="number"
                              maxLength={5}
                              placeholder={defaultContactNo}
                              className="p-2 rounded"
                              id="contactnumber"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              min={0}
                              step={1}
                              onKeyDown={(event) => {
                                if (
                                  event.code === "NumpadSubtract" ||
                                  event.code === "KeyE"
                                ) {
                                  event.preventDefault();
                                }
                              }}
                              onChange={(e) => setContactNo(e.target.value)}
                            />
                          </div>

                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Location / Address</b>
                            </label>
                            <input
                              type="text"
                              placeholder={defaultAddress}
                              className="p-2 rounded"
                              id="locationaddress"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-between mx-auto city&state">
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>City</b>
                            </label>
                            <input
                              type="text"
                              placeholder={defaultCity}
                              className="p-2 rounded"
                              id="city"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>State</b>
                            </label>
                            <input
                              type="text"
                              placeholder={defaultState}
                              className="p-2 rounded"
                              id="state"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setState(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-between mx-auto zipcode&country">
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Zip Code</b>
                            </label>
                            <input
                              type="number"
                              placeholder={defaultZipCode}
                              className="p-2 rounded"
                              id="zipcode"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setZipCode(e.target.value)}
                              min={0}
                              step={1}
                              onKeyDown={(event) => {
                                if (
                                  event.code === "NumpadSubtract" ||
                                  event.code === "KeyE"
                                ) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          </div>
                          <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Country</b>
                            </label>
                            <input
                              type="text"
                              placeholder={defaultCountry}
                              className="p-2 rounded"
                              id="country"
                              style={{
                                backgroundColor: "#d9d9d9",
                                border: "none",
                              }}
                              onChange={(e) => setCountry(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-between mx-auto password">
                          <div className="form-group col-12 flex-column d-flex mt-3">
                            <label className="form-control-label float-start">
                              <b>Password</b>
                            </label>
                            <div className="d-flex passwordinput">
                              {props.isAddDetails ? (
                                <>
                                  <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder=""
                                    disabled={props.isAddDetails}
                                    defaultValue={props.password}
                                    className="p-2 w-100 passwordfield"
                                    style={{
                                      backgroundColor: "#d9d9d9",
                                      border: "none",
                                    }}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                </>
                              ) : (
                                <>
                                  <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder={props.password}
                                    disabled={props.isAddDetails}
                                    //defaultValue={props.password}
                                    className="p-2 w-100 passwordfield"
                                    style={{
                                      backgroundColor: "#d9d9d9",
                                      border: "none",
                                    }}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                  />
                                </>
                              )}

                              {hidePassword ? (
                                <RiIcons.RiEyeLine
                                  size={40}
                                  style={{ backgroundColor: "#d9d9d9" }}
                                  className="hideicon"
                                  onClick={handleHidePassword}
                                />
                              ) : (
                                <RiIcons.RiEyeOffLine
                                  size={40}
                                  style={{ backgroundColor: "#d9d9d9" }}
                                  className="hideicon"
                                  onClick={handleHidePassword}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="experiencepart">
                          <div className="row justify-content-between mx-auto">
                            <div className="form-group col-12 flex-column d-flex mt-5">
                              <label className="form-control-label float-start">
                                <h4>
                                  <u>Experience</u>
                                </h4>
                              </label>
                            </div>
                          </div>

                          {defaultExperience.length > 0 ? (
                            <>
                              <div className="d-flex row p-2 expcontent mt-4">
                                {defaultExperience.map((item, index) => (
                                  <>
                                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 ">
                                      <div className="float-end index">
                                        {index + 1}.
                                      </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                                      <text>
                                        <span className="fw-semibold">
                                          Job Position
                                        </span>{" "}
                                        - {item.position}
                                      </text>
                                      <br />
                                      <text>
                                        <span className="fw-semibold">
                                          Company
                                        </span>{" "}
                                        - {item.company}
                                      </text>
                                      <br />
                                      <text>
                                        <span className="fw-semibold">
                                          Work Duration
                                        </span>{" "}
                                        - {item.duration}
                                      </text>
                                      <br />
                                      <text>
                                        <span className="fw-semibold">
                                          Address
                                        </span>{" "}
                                        - {item.address}
                                      </text>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 p-2 my-auto">
                                      <RiIcons.RiDeleteBin6Line
                                        size={30}
                                        className="deletebin float-end"
                                        onClick={(event) =>
                                          experienceDelete(event, item.id)
                                        }
                                      />
                                    </div>
                                    <hr className="mb-2 mt-2" />
                                  </>
                                ))}
                              </div>
                            </>
                          ) : null}

                          {experience.length > 0 ? (
                            <>
                              <div className="d-flex row expcontent">
                                {experience.map((item, index) => (
                                  <>
                                    <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 ">
                                      <div className="float-end index">
                                        {defaultExperience.length + index + 1}.
                                      </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                                      <text>
                                        <span className="fw-semibold">
                                          Job Position
                                        </span>{" "}
                                        - {item.jobPosition}
                                      </text>
                                      <br />
                                      <text>
                                        <span className="fw-semibold">
                                          Company
                                        </span>{" "}
                                        - {item.organization}
                                      </text>
                                      <br />
                                      <text>
                                        <span className="fw-semibold">
                                          Work Duration
                                        </span>{" "}
                                        - {item.jobStartDate} -{" "}
                                        {item.jobEndDate}. {item.jobDuration}
                                      </text>
                                      <br />
                                      <text>
                                        <span className="fw-semibold">
                                          Address
                                        </span>{" "}
                                        - {item.jobAddress}
                                      </text>

                                      {/* {props.isConsultent === false ? (
                                <>
                                  <br />
                                  <h7>address</h7>
                                </>
                              ) : null} */}
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 p-2 my-auto">
                                      {/* <RiIcons.RiDeleteBin6Line
                                  size={30}
                                  className="deletebin"
                                /> */}
                                      <AiIcons.AiOutlineMinusCircle
                                        size={30}
                                        className="deletebin float-end"
                                        onClick={(event) =>
                                          removieExperience(event, index)
                                        }
                                      />
                                    </div>
                                    <hr className="mb-2 mt-2" />
                                  </>
                                ))}
                              </div>
                            </>
                          ) : null}

                          <div className="row justify-content-between mx-auto">
                            <div className="form-group col-12 flex-column d-flex mt-2">
                              <label className="form-control-label float-start">
                                <b>Job Position</b>
                              </label>
                              <input
                                type="text"
                                id="jobposition"
                                placeholder=""
                                className="p-2 rounded"
                                style={{
                                  backgroundColor: "#d9d9d9",
                                  border: "none",
                                }}
                                onChange={(e) => setJobPossion(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-12 flex-column d-flex mt-2">
                              <label className="form-control-label float-start">
                                <b>Company</b>
                              </label>
                              <input
                                type="text"
                                id="jobcompany"
                                placeholder=""
                                className="p-2 rounded"
                                style={{
                                  backgroundColor: "#d9d9d9",
                                  border: "none",
                                }}
                                onChange={(e) =>
                                  setOrganization(e.target.value)
                                }
                              />
                            </div>

                            <div className="row justify-content-between mx-auto start&enddateforexperience expdatepicker">
                              <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3 ">
                                <label className="form-control-label float-start">
                                  <b>Start date</b>
                                </label>
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => {
                                    setStartDate(date);
                                    handleStartDate(date);
                                  }}
                                  selectsStart
                                  startDate={startDate}
                                  endDate={endDate}
                                  dateFormat="MM/yyyy"
                                  showMonthYearPicker
                                  className="p-2 rounded datepikerstyle"
                                />
                              </div>

                              <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                                <label className="form-control-label float-start">
                                  <b>End date</b>
                                </label>
                                <DatePicker
                                  selected={endDate}
                                  minDate={new Date(startDate)}
                                  onChange={(date) => {
                                    setEndDate(date);
                                    handleEndDate(date);
                                  }}
                                  selectsEnd
                                  startDate={startDate}
                                  endDate={endDate}
                                  dateFormat="MM/yyyy"
                                  disabled={startDate === ""}
                                  showMonthYearPicker
                                  className="p-2 rounded datepikerstyle"
                                />
                              </div>
                            </div>

                            <div className="form-group col-12 flex-column d-flex mt-2">
                              <label className="form-control-label float-start">
                                <b>Address</b>
                              </label>
                              <input
                                type="text"
                                id="jobaddress"
                                placeholder=""
                                className="p-2 rounded"
                                style={{
                                  backgroundColor: "#d9d9d9",
                                  border: "none",
                                }}
                                onChange={(e) => setJobAddress(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="row  mx-auto mt-4">
                            <div className="form-group ">
                              <button
                                className="btn-block formsubmit rounded addbtn"
                                style={{
                                  backgroundColor: "#32CD32",
                                  color: "white",
                                  float: "right",
                                }}
                                onClick={handleExperience}
                                // onClick={test}
                              >
                                <b>Add</b>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="educatinpart">
                          {isCustomer ? (
                            <>
                              <div className="row mx-auto">
                                <div className="form-group col-12 d-flex mt-5 ">
                                  <label className="form-control-label ">
                                    <h4>
                                      <u>Education</u>
                                    </h4>
                                  </label>
                                </div>
                              </div>

                              {defaultEducation.length > 0 ? (
                                <>
                                  <div className="d-flex row p-2 expcontent mt-4">
                                    {defaultEducation.map((item, index) => (
                                      <>
                                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4">
                                          <div className="float-end index">
                                            {index + 1}.
                                          </div>
                                        </div>

                                        <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                                          <text>
                                            <span className="fw-semibold">
                                              University
                                            </span>{" "}
                                            - {item.university}
                                          </text>
                                          <br />
                                          <text>
                                            <span className="fw-semibold">
                                              Digree
                                            </span>{" "}
                                            - {item.digree}
                                          </text>
                                          <br />
                                          <text>
                                            <span className="fw-semibold">
                                              Study Duration
                                            </span>{" "}
                                            - {item.startDate} - {item.endDate}
                                          </text>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 p-2 my-auto">
                                          <RiIcons.RiDeleteBin6Line
                                            size={30}
                                            className="deletebin float-end"
                                            onClick={(event) =>
                                              educationDelete(event, item.id)
                                            }
                                          />
                                        </div>
                                        <hr className="mb-2 mt-2" />
                                      </>
                                    ))}
                                  </div>
                                </>
                              ) : null}

                              {inputEducation.length > 0 ? (
                                <>
                                  <div className="d-flex row expcontent">
                                    {inputEducation.map((item, index) => (
                                      <>
                                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 ">
                                          <div className="float-end index">
                                            {defaultEducation.length +
                                              index +
                                              1}
                                            .
                                          </div>
                                        </div>

                                        <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                                          <text>
                                            <span className="fw-semibold">
                                              University
                                            </span>{" "}
                                            - {item.educationDigree}
                                          </text>
                                          <br />
                                          <text>
                                            <span className="fw-semibold">
                                              Digree
                                            </span>{" "}
                                            - {item.educationUniversity}
                                          </text>
                                          <br />
                                          <text>
                                            <span className="fw-semibold">
                                              Study Duration
                                            </span>{" "}
                                            - {item.educationDuration}
                                          </text>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 p-2 my-auto">
                                          <AiIcons.AiOutlineMinusCircle
                                            size={30}
                                            className="deletebin float-end"
                                            onClick={(event) =>
                                              removieEducation(event, index)
                                            }
                                          />
                                        </div>
                                        <hr className="mb-2 mt-2" />
                                      </>
                                    ))}
                                  </div>
                                </>
                              ) : null}

                              <div className="row justify-content-between mx-auto">
                                <div className="form-group col-12 flex-column d-flex mt-2">
                                  <label className="form-control-label float-start">
                                    <b>University</b>
                                  </label>
                                  <input
                                    type="text"
                                    id="eduuniversity"
                                    placeholder=""
                                    className="p-2 rounded"
                                    style={{
                                      backgroundColor: "#d9d9d9",
                                      border: "none",
                                    }}
                                    onChange={(e) =>
                                      setEducationUniversity(e.target.value)
                                    }
                                  />
                                </div>

                                <div className="form-group col-12 flex-column d-flex mt-2">
                                  <label className="form-control-label float-start">
                                    <b>Digree</b>
                                  </label>
                                  <input
                                    type="text"
                                    id="edudigree"
                                    placeholder=""
                                    className="p-2 rounded"
                                    style={{
                                      backgroundColor: "#d9d9d9",
                                      border: "none",
                                    }}
                                    onChange={(e) =>
                                      setEducationDigree(e.target.value)
                                    }
                                  />
                                </div>

                                <div className="row justify-content-between mx-auto start&enddateforexperience edudatepicker">
                                  <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3 ">
                                    <label className="form-control-label float-start">
                                      <b>Start date</b>
                                    </label>
                                    <DatePicker
                                      selected={startEduDate}
                                      onChange={(date) => {
                                        setStartEduDate(date);
                                        handleStartEduDate(date);
                                      }}
                                      selectsStart
                                      startDate={startEduDate}
                                      endDate={endEduDate}
                                      dateFormat="MM/yyyy"
                                      showMonthYearPicker
                                      className="p-2 rounded datepikerstyle"
                                    />
                                  </div>

                                  <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex mt-3">
                                    <label className="form-control-label float-start">
                                      <b>End date</b>
                                    </label>
                                    <DatePicker
                                      selected={endEduDate}
                                      minDate={new Date(startEduDate)}
                                      onChange={(date) => {
                                        setEndEduDate(date);
                                        handleEndEduDate(date);
                                      }}
                                      selectsEnd
                                      startDate={startEduDate}
                                      endDate={endEduDate}
                                      dateFormat="MM/yyyy"
                                      disabled={startEduDate === ""}
                                      showMonthYearPicker
                                      className="p-2 rounded datepikerstyle"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="row  mx-auto mt-4">
                                <div className="form-group ">
                                  <button
                                    className="btn-block formsubmit rounded addbtn"
                                    style={{
                                      backgroundColor: "#32CD32",
                                      color: "white",
                                      float: "right",
                                    }}
                                    onClick={handleEducation}
                                  >
                                    <b>Add</b>
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>

                        <div className="row  mx-auto mt-5 mb-5 formsavebtn">
                          <div className="form-group ">
                            <button
                              type="submit"
                              className="btn-block formsubmit rounded savebtn"
                              style={{
                                backgroundColor: "#212a41",
                                color: "white",
                              }}
                            >
                              <b>Save</b>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
