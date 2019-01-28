import React from 'react';
import Navigation from './../components/Navigation'
import Photo from './../components/Photo'
import bg from './../Image/cat.jpg';
import MusicPlayer from './../container/MusicPlayer.js';
import './homePage.css';
class HomePage extends React.Component{
    render(){
        return(
        <div>
            <Photo src = {bg}/>
            <div id ="info">
                
                <div id="navigation">
                    <Navigation />
                </div>
                <div id="description">
                    Hello,
                    I am Renhao
                </div>
                <div id="music">
                    <MusicPlayer />
                </div>
            </div>
        </div>
        );
    }
}
export default HomePage;