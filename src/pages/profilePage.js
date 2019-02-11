import React from 'react';
import Photo from './../components/Photo';
//import bg from './../Image/cat.jpg';
//import MusicPlayer from './../container/MusicPlayer.js';
import hrh from './../Image/lonely.jpeg';
import NavigationBar from './../container/NavigationBar';
import './profilePage.css';
class ProfilePage extends React.Component{
    render(){
        return(
        <div class = "profilePage">
            <NavigationBar />
            <div className="photo">
                <Photo src = {hrh}>
                </Photo>
            </div>
            <div className = "title">
                <h2>
                    Explore The New World
                </h2>
            </div>                
            
        </div>
        );
    }
}
export default ProfilePage;