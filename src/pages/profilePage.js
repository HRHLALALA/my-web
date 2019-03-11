import React from 'react';
//import bg from './../Image/cat.jpg';
//import MusicPlayer from './../container/MusicPlayer.js';
import hrh from './../Image/lonely.jpeg';
import NavigationBar from './../container/NavigationBar';
import './profilePage.css';
class ProfilePage extends React.Component{
    render(){
        return(
        <div class = "profilePage" style={ { 'background-image':'url('+hrh+')'}}>
            <NavigationBar isLogo = "false"/>
            
            <div className = "title">
                <h2>
                    Renhao Huang
                </h2>
                <p>
                    Name: Renhao Huang <br/>
                    Age: 22 <br/>
                    University: UNSW <br/>
                    Nationality: CHINESE <br/>
                </p>
            </div>                
            
        </div>
        );
    }
}
export default ProfilePage;