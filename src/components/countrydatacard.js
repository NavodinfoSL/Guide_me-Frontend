import React from 'react'
import './countrydatacard.css'

const CountryDataCard = (props) => {
    return (

        <div className="card mt-4 text-center item" style={{backgroundColor:"#f3eaea",height:"550px",width:"290px"}}>
           <img className="img-size" src={props.item.image} alt="Card image cap" style={{height:"210px",width:"100%"}}/>
         
          <img src={props.item.flag} className="flag" id={props.item.country}/>     
          
          <div className="card-body mt-4">
            <h5 className="card-title country">
            {props.item.country}
            </h5>
            <p className="card-text pt-4 topic">
              {props.item.detail}
            </p>
            <p className="card-text pt-4">
              <small className="text-muted"><a href="#">{props.item.more}</a></small>
            </p>
          </div>
        </div>
)
}

export default CountryDataCard


