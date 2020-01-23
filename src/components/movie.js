import React from 'react';
import q1 from '../assets/q1.jpg'; 
import q2 from '../assets/q2.jpg'; 
import q3 from '../assets/q3.jpg'; 
import q4 from '../assets/q4.jpg'; 
import q5 from '../assets/q5.jpg'; 
import q6 from '../assets/q6.jpg'; 
import q7 from '../assets/q7.jpg'; 
import q8 from '../assets/q8.jpg'; 
import q9 from '../assets/q9.jpg'; 
import q10 from '../assets/q10.jpg'; 
import q11 from '../assets/q11.jpg'; 
import q12 from '../assets/q12.jpg'; 

const Movie = (props) => {
    let image = "";
    switch(props.name) {
        case "Dark Knight":
            image = q1;
            break;
        case "Matrix":
            image = q2;
            break;
        case "Now You See Me":
            image = q3;
            break;
        case "Limitless":
            image = q4;
            break;
        case "Southpaw":
            image = q5;
            break;
        case "The Wolf of Wall Street":
            image = q6;
            break;
        case "The Hateful Eight":
            image = q7;
            break;
        case "The Shawshank Redemption":
            image = q8;
            break;
        case "Legend":
            image = q9;
            break;
        case "Warrior":
            image = q10;
            break;
        case "Divergent":
            image = q11;
            break;
        case "The Terminator":
            image = q12;
            break;
        default:
            image=""
    }
    let cover = {
        backgroundImage: 'url(' + image + ')'
    }
    return (
        <div className="movie-container">
            <div className="movie-image" style={cover}></div>
            <p className="movie-title">{props.name}</p>
            <p className="movie-year">{props.year}</p>
        </div>
    );
}

export default Movie;