import React from "react";

function Card(props) {
    
    return (
        <div className="card">
            <div className="image">
                <img src={props.image} alt="image_picture"/>
            </div>
            <div className="container">
                <h3>{props.country}</h3>
                <p>Population: <span>{props.population}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>           
    )
}

export default Card;