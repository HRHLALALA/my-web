import React from 'react';
import './NavigationBar.css';
import Navigation from './../components/Navigation';
import {
    Link,
} from "react-router-dom";
class NavigationBar extends React.Component{
    render(){
        return(
            <div className = "container-NavBar">
                <Link className="Name" to = "/home">
                    Renhao Huang
                </Link>
                <div className = "nav">
                    <Navigation isHorizontal = "true" />
                </div>
            </div>
        )
    }
}

export default NavigationBar;