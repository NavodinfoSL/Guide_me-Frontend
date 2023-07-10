import React from "react";

const NoAddedComponent = (props) => {
  return (
    <>
      <div className="d-flex row p-2">
        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-xs-4 p-2"></div>

        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <h7 className="fw-semibold">No Added any {props.title} Yet</h7>
        </div>
      </div>
    </>
  );
};

export default NoAddedComponent;
