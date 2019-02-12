import React from 'react';
import bg from './../Image/starTrek.jpg';
import './homePage.css';
import NavigationBar from './../container/NavigationBar';
import MusicPlayer from './../container/MusicPlayer';
class HomePage extends React.Component{
    render(){
        return(
        <div className = "homePage" style={ { 'background-image':'url('+bg+')'}} >
            <MusicPlayer/>
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