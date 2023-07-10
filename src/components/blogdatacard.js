import React from 'react'
import './countrydatacard.css'

const BlogDataCard = (props) => {
    return (

        <div className="card mt-4 text-center item" style={{backgroundColor:"#d9d9d9",height:"450px",width:"290px"}}>
           <img className="img-size" src={props.item.image} alt="Card image cap" style={{height:"210px",width:"100%"}}/>   
          
          <div className="card-body mt-1">
            <h5 className="card-title sixth-title text-start">
            {props.item.title}
            </h5>
            <p className="card-text pt-2 sixth-detail text-start">
              {props.item.detail}
            </p>
            <p className="card-text pt-2 text-start">
              <small className="text-muted"><a href="#">{props.item.more}</a></small>
            </p>
          </div>
        </div>
)
}

export default BlogDataCard


