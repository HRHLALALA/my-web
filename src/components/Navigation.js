import React from 'react';
import './Navigation.css'
import {
    Link,
} from "react-router-dom";
class Navigation extends React.Component{

    render(){
        return(
            <div className = "component-navigation">
            <div className = {this.props.isHorizontal ==="true"?"Nav horizontal":"Nav"}>
                <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/music">Music</Link></li>
                </ul>
            </div>
          </div>
        );
    };
}

export default Navigation;