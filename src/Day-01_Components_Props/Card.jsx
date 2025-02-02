import React from "react";

const Card = ({title, description, image}) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '250px'}}>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>{description}</p>
        </div>
    );
}

export default Card