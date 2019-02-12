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
                 {   this.props.isLogo === "false"?
                <Link className="Name HRH" to = "/home">
                    Renhao Huang
                </Link>
                :
                <a className="Name UNSW" href ="http://www.unsw.edu.au">
                    UNSW
                </a>
                 }
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
}

export default NavigationBar;