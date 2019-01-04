import React from 'react';
import './Card.css'
class Card extends React.Component{

    render(){
        return(
            <div id = "photo">
                <img src = {this.props.src} 
                    alt = "bg"
                ></img>
            </div>
            
        );
    };
}

export default Card;
