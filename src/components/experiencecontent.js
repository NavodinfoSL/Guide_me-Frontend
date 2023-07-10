/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./experiencecontent.css";

const ExperienceContent = (props) => {
  return (
    <>
      <div className="d-flex row p-2 expcontent">
        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 p-2">
          <img src="/images/profileimages/second.png" style={{ width: "60px", height: "60px" }} />
        </div>

        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <h7 className="fw-semibold">{props.item.position}</h7>
          <br />
          <h7>{props.item.company}</h7>
          <br />
          <h7>{props.item.duration}</h7>

          {props.isConsultent === false ? (
            <>
              <br />
              <h7>{props.item.address}</h7>
            </>
          ) : null}
        </div>
        <hr className="mb-2 mt-2" />
      </div>
    </>
  );
};

export default ExperienceContent;
