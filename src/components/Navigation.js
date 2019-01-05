import React from 'react';
import './../css/Navigation.css'
import {
    Link,
} from "react-router-dom";
class Navigation extends React.Component{

    render(){
        return(
            <div>
            <div id = "Nav">
                <ul>
                <li><a href="http://github.com">Github</a></li>
                <li><a href="https://www.linkedin.com/in/renhao-huang-28bb06148/">Linkedin</a></li>
                <li><Link to="/star">star</Link></li>
                <li><Link to="/home">home</Link></li>
                </ul>
            </div>
          </div>
        );
    };
}

export default Navigation;