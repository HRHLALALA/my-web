import React from 'react';
import './NavigationBar.css';
import Navigation from './../components/Navigation';
import NavigationLogo from './../components/NavigationLogo';
import {
    Link,
} from "react-router-dom";
class NavigationBar extends React.Component{
    render(){
        return(
            <div className = "container-NavBar">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                 {   this.props.isLogo === "false"?
                <Link className="Name HRH" to = "/home">
                    Renhao Huang
                </Link>
                :
                <a className="Name UNSW" href ="http://www.unsw.edu.au">
                    UNSW
                </a>
                 }
                 <div id = "dropdown" onClick = {()=>this.dropdown()}>
                    <li>  
                        <a href = "javascript:void(0);"className="icon" >
                            <i className="fa fa-bars" ></i>
                        </a>
                    </li> 
                </div>
                {   this.props.isLogo === "false"?
                    <div className = "nav">
                        <Navigation isHorizontal = "true" />
                    </div>
                    :
                    <div className = "nav logo">
                    <NavigationLogo />
                     </div>
                }
            </div>
        )
    }
    dropdown(){
        if(this.props.isLogo === "false")
            var menu = document.getElementsByClassName("nav")[0];
        else
            var menu = document.getElementsByClassName("nav logo")[0];
        var style = window.getComputedStyle(menu);
        var display = style.getPropertyValue('display');
        if(display === "none") menu.style.display = "block";
        else menu.style.display = "none";

    }
}

export default NavigationBar;