import React from 'react';
import Navigation from './../components/Navigation'
import Photo from './../components/Photo'
import bg from './../Image/starTrek.jpg';
import MusicPlayer from './../container/MusicPlayer.js';
import './homePage.css';
import NavigationBar from './../container/NavigationBar';
import NavigationLogo from './../components/NavigationLogo';
class HomePage extends React.Component{
    render(){
        return(
        <div className = "homePage" style={ { 'background-image':'url('+bg+')'}} >

            <NavigationBar isLogo = "false" />

            <div className ="info">
                Explore The New World
            </div>

            <div className = "logobar"> 
                <NavigationBar isLogo = "true"/>
            </div>
        </div>
        );
    }
}
export default HomePage;