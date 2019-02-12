import React from 'react';
import Navigation from './../components/Navigation'
import Photo from './../components/Photo'
import bg from './../Image/starTrek.jpg';
import MusicPlayer from './../container/MusicPlayer.js';
import './homePage.css';
import NavigationBar from './../container/NavigationBar';
class HomePage extends React.Component{
    render(){
        return(
        <div className = "homePage" >

            <NavigationBar />

            <Photo src = {bg}/>
            <div className ="info">
                
                <div className="navigation">
                    <Navigation isHorizontal = "false"/>
                </div>
                <div className="description">
                    Hello,
                    I am Renhao
                </div>
                <div className="music">
                    <MusicPlayer />
                </div>
            </div>
        </div>
        );
    }
}
export default HomePage;