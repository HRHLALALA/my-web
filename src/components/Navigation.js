import React from 'react';
import './Navigation.css'
import {
    Link,
} from "react-router-dom";
class Navigation extends React.Component{

    render(){
        return(
            <div className = "component-navigation">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className = {this.props.isHorizontal ==="true"?"Nav horizontal":"Nav"}>
                <div id = "dropdown" onClick = {()=>this.dropdown()}>
                    <li>  
                        <a href = "javascript:void(0);"className="icon" >
                            <i className="fa fa-bars" ></i>
                        </a>
                    </li> 
                </div>
                <ul id = "menu">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    
                </ul>
            </div>

            
          </div>
        );
    };
    dropdown(){
        var menu = document.getElementById("menu");
        var style = window.getComputedStyle(menu);
        var display = style.getPropertyValue('display');
        if(display === "none") menu.style.display = "block";
        else menu.style.display = "none";

    }
}

export default Navigation;