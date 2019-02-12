import React from 'react';
import facebook from './../Image/logos/facebook.png';
import linkedin from './../Image/logos/linkedin.png';
import github from './../Image/logos/github.png';
import email from './../Image/logos/email.png';
import './NavigationLogo.css';
class NavigationLogo extends React.Component{
    render(){
        return(
            <div className = "component-navlogo">
                <div className = "logos">
                    <ul>
                        <li><a href ="http://www.github.com"><img src={github} alt="github"/></a></li>
                        <li><a href ="http://www.facebook.com"><img src={facebook} alt="facebook"/></a></li>
                        <li><a href ="http://www.linkedin.com"><img src={linkedin} alt="linkedin"/></a></li>
                        <li><a href ="mailto: renhao043@gmail.com"><img src={email} alt="email"/></a></li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default NavigationLogo;