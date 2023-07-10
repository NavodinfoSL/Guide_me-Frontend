/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './homepageseconcard.css'

const HomePageSeconCard = (props) => {
  return (

          <div className="card second-item mt-4 text-center" style={{backgroundColor:"#aeaeae",height:"270px"}}>
            <div className="card-body ">
              <h5 className="card-title pt-4">
              {props.item.title}
              </h5>
              <p className="card-text pt-4 topic">
                {props.item.description}
              </p>
              <p className="card-text pt-4">
                <small className="text-muted"><a href="#">{props.item.more}</a></small>
              </p>
            </div>
          </div>
  )
}

export default HomePageSeconCard
