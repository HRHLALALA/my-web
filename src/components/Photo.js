import React from 'react';
import './Photo.css';
class Photo extends React.Component{

    render(){
        return(
            <div id = "photo">
                <img 
                    src = {this.props.src} 
                    alt = "bg"
                ></img>
            </div>
            
        );
    };
}

export default Photo;
