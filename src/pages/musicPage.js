import React from 'react';
//import bg from './../Image/starTrek.jpg';
import './homePage.css';
import NavigationBar from './../container/NavigationBar';
import Album from './../container/MusicPlayerWithAlbum.js';

class MusicPage extends React.Component{
    render(){
        return(
            <div className = "MusicPage" >
                <NavigationBar isLogo = "false" />
                <Album/>
            </div>
        );
    }

}
export default MusicPage;