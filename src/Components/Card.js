import React from "react";

const Card = ({name, email, id}) => {
    
    return (
        <div  className = ' tc bg-light-green dib br3 pa3 ma2 grow bw2 shodow-5'>
            <img alt = 'pic' src = {`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default Card; 