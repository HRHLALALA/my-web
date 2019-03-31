import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/homePage';
//import ProfilePage from './pages/profilePage';
import NotDoneYet from './pages/NotDoneYet.js';
import './index.css';
import NavigationBar from './container/NavigationBar';
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
import GalleryPage from  './pages/galleryPage';
import MusicPlayer from './container/MusicPlayer';
//import MusicPage from  './pages/musicPage';
class Main extends React.Component{
    render(){
        return(
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
                <BrowserRouter>
                    <Route render={({location}) => (
                            <Switch location={location}>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/profile" component={NotDoneYet} />
                                <Route exact path="/home" component={HomePage} />
                                <Route exact path = "/music" component={NotDoneYet}/>
                                <Route exact path = "/gallery" component={GalleryPage}/>
                            </Switch>
                    )}/>
                
                </BrowserRouter>

                <div className = "logobar"> 
                <MusicPlayer id = "music-player-index"/>
                <NavigationBar isLogo = "true"/>
                </div>
            </body>
        );
    };
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
)