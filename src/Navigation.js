import React from 'react';
import './Navigation.css'

class Navigation extends React.Component{

    render(){
        return(
            <div id = "Nav">
                <ul>
                <li><a href="http://github.com">Github</a></li>
                <li><a href="https://www.linkedin.com/in/renhao-huang-28bb06148/">Linkedin</a></li>
                <li><a href="http://4399.com">4399</a></li>
                <li><a href="http://google.com">Google</a></li>
                </ul>
            </div>
            
        );
    };
}

export default Navigation;