/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './homepagecard.css'

const HomePageCard = (props) => {
  return (

          <div className="card mt-4 text-center item" style={{backgroundColor:"#f3eaea",height:"250px",width:"370px"}}>
            <div className="card-body">
              <h5 className="card-title">
              {props.item.icon}
              </h5>
              <p className="card-text pt-4 topic">
                {props.item.title}
              </p>
              <p className="card-text pt-4">
                <small className="text-muted"><a href="#">{props.item.detail}</a></small>
              </p>
            </div>
          </div>
  )
}

export default HomePageCard
