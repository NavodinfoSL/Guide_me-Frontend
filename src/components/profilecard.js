/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./profilecard.css";
import * as RiIcons from "react-icons/ri";
import ExperienceContent from "./experiencecontent";
import EducationContent from "./educationcontent";
import NoAddedComponent from "./noaddedcomponent";

const ProfileCard = (props) => {
  const [showAll, setShowAll] = useState(false);
  const [showTitle, setShowTitle] = useState("Show All");
  const [showEducationTitle, setShowEducationTitle] = useState("Show All");
  const [educationShowAll, setEducationShowAll] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "/images/profileimages/initial_profile.png"
  );
  const [coverImage, setCoverImage] = useState(
    "/images/profileimages/initial_cover_image.PNG"
  );
  const [cookies, setCookie] = useCookies(["userId"]);
  // const [firstName, setFirstName] = useState("firstname");
  // const [lastName, setLastName] = useState("lastname");
  const navigate = useNavigate();

  const handleEditProfile = (event) => {
    event.preventDefault();
    navigate(`/UpdateUserDetails`);
  };

  useEffect(() => {
    // if (props.personalDetails.firstName) {
    //   setFirstName(props.personalDetails.firstName);
    // }

    // if (props.personalDetails.lastName) {
    //   setLastName(props.personalDetails.lastName);
    // }

    showAll ? setShowTitle("Show Less") : setShowTitle("Show All");
    educationShowAll
      ? setShowEducationTitle("Show Less")
      : setShowEducationTitle("Show All");
  }, [showAll, educationShowAll]);
  return (
    <div className="container">
      <div className="card w-100 mb-4 pb-2 shadow-lg border border-3 border-dark ">
        <img class="card-img-top" src={props.coverImage} alt="Card image cap" />
        <div className="row position-absolute">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-xs-12 pt-3">
            <img
              className="logo mx-3"
              id="logo"
              src="/images/logo/guidme_logo.png"
              width="105"
              height="45"
              alt="menu"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-3">
            <div className="profile_search mt-3">
              <div className="mx-3 content">
                <lable>
                  <RiIcons.RiSearchLine size={20} />
                </lable>
                <input className="search_input" placeholder="Search..." />
              </div>
            </div>
          </div>
        </div>
        <div className="row secondrow">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <img className="profile" src={props.profileImage} />
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5 col-xs-12 mx-4">
            <div className="consultent_details pt-3">
              {props.personalDetails.firstName ? (
                <>
                  <h2 className="card-title">
                    {props.personalDetails.firstName}&nbsp;
                    {props.personalDetails.lastName}
                  </h2>
                </>
              ) : (
                <>
                  <h2 className="card-title">First Name&nbsp;Last Name</h2>
                </>
              )}

              <h5 className="font-weight-normal">{props.title}</h5>
              <h5>{props.PersonalData[0].company}</h5>
            </div>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-12 align-self-end d-flex justify-content-center mx-2 editprofile">
            <div className="float-xl-end float-lg-end">
              <button className="btn rounded-5 " onClick={handleEditProfile}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <hr className="mb-2" />

        <div className="row thirdrow pt-3">
          <div className="row d-flex firstsubrowofthirdrow pt-3">
            <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-xs-12 mx-3 ">
              <h6 className="fs-5">
                {props.ProfileDescription[0].discription}
              </h6>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-3 col-sm-12 col-xs-12 mx-3 ">
              <button className="btn rounded-5">Message</button>
            </div>
          </div>
          <div className="row secondsubrowofthirdrow pt-2">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mx-3">
              <h6 className="fs-5">{props.ProfileDescription[0].countries}</h6>
            </div>
          </div>
          <div className="row w-100 thirdsubrowofthirdrow pt-3 align-items-baseline">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mx-3 ">
              <span className="d-flex fs-5 align-items-baseline">
                <h5>{props.ProfileDescription[0].connections}+</h5>&nbsp;
                Connections
              </span>
            </div>

            {props.isConsultent ? (
              <>
                <div className="col-xl-3 col-lg-2 col-md-3 col-sm-12 col-xs-12 pt-2">
                  <div className="float-xl-end float-lg-end float-md-end float-sm-start float-xs-start price">
                    <button className="btn rounded-5 mx-3 ">$10.5</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-xl-3 col-lg-2 col-md-3 col-sm-12 col-xs-12 pt-2"></div>
              </>
            )}

            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-xs-12 pt-2">
              <div className="float-xl-start float-xl-start float-lg-start float-md-start float-sm-start float-xs-start request">
                <button className="btn rounded-5 mx-3">Request</button>
              </div>
            </div>
          </div>
        </div>

        {props.isConsultent ? (
          <>
            <div className="card-body p-3">
              <div className="experince">
                <h5 className="pb-2">
                  <b>Experience</b>
                </h5>

                {props.ExperienceData.length < 3 ? (
                  <>
                    {props.ExperienceData.length === 0 ? (
                      <>
                        <NoAddedComponent title={"Experience"} />
                      </>
                    ) : (
                      <>
                        <div>
                          {props.ExperienceData.map((item, index) => (
                            <ExperienceContent
                              item={item}
                              isConsultent={props.isConsultent}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {showAll ? (
                      <div>
                        {props.ExperienceData.map((item, index) => (
                          <ExperienceContent
                            item={item}
                            isConsultent={props.isConsultent}
                          />
                        ))}
                      </div>
                    ) : (
                      <div>
                        <ExperienceContent
                          item={props.ExperienceData[0]}
                          isConsultent={props.isConsultent}
                        />
                        <ExperienceContent
                          item={props.ExperienceData[1]}
                          isConsultent={props.isConsultent}
                        />
                      </div>
                    )}
                    <div
                      className="text-center fw-bold fs-5 showall"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showTitle}
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="card-body p-3">
              <div className="experince">
                <h5 className="pb-2">
                  <b>Experience</b>
                </h5>

                {props.ExperienceData.length < 3 ? (
                  <>
                    {props.ExperienceData.length === 0 ? (
                      <>
                        <NoAddedComponent title={"Experience"} />
                      </>
                    ) : (
                      <>
                        <div>
                          {props.ExperienceData.map((item, index) => (
                            <ExperienceContent
                              item={item}
                              isConsultent={props.isConsultent}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {showAll ? (
                      <div>
                        {props.ExperienceData.map((item, index) => (
                          <ExperienceContent
                            item={item}
                            isConsultent={props.isConsultent}
                          />
                        ))}
                      </div>
                    ) : (
                      <div>
                        <ExperienceContent
                          item={props.ExperienceData[0]}
                          isConsultent={props.isConsultent}
                        />

                        <ExperienceContent
                          item={props.ExperienceData[0]}
                          isConsultent={props.isConsultent}
                        />
                      </div>
                    )}
                    <div
                      className="text-center fw-bold fs-5 showall"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showTitle}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="card-body p-3">
              <div className="experince">
                <h5 className="pb-2">
                  <b>Education</b>
                </h5>

                {props.Education.length < 3 ? (
                  <>
                    {props.Education.length === 0 ? (
                      <>
                        <NoAddedComponent title={"Education"} />
                      </>
                    ) : (
                      <>
                        <div>
                          {props.Education.map((item, index) => (
                            <EducationContent item={item} />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {educationShowAll ? (
                      <div>
                        {props.Education.map((item, index) => (
                          <EducationContent item={item} />
                        ))}
                      </div>
                    ) : (
                      <div>
                        <EducationContent item={props.Education[0]} />

                        <EducationContent item={props.Education[1]} />
                      </div>
                    )}
                    <div
                      className="text-center fw-bold fs-5 showall"
                      onClick={() => setEducationShowAll(!educationShowAll)}
                    >
                      {showEducationTitle}
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
