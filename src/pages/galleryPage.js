import React from 'react';
import NavigationBar from './../container/NavigationBar';
import GalleryContainer from './../container/GalleryContainer';
import './galleryPage.css';
import star from './../Image/star1.jpg';
import MusicPlayer from './../container/MusicPlayer';
class GalleryPage extends React.Component{
    render(){
        return(
            <div className = "GalleryPage" style={ { 'background-image':'url('+star+')'}}>
                <NavigationBar isLogo = "false" />
                <div className="GalleryContainer">
                    <GalleryContainer />
                </div>
            </div>
        );
    }
}

export default GalleryPage;