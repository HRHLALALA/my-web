import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/homePage';
import ProfilePage from './pages/profilePage';
import NotDoneYet from './pages/NotDoneYet.js';
import './index.css';
import NavigationBar from './container/NavigationBar';
import songList from './Music/Music.json';
import {
    //BrowserRouter,
    HashRouter,
    Route,
    Switch
  } from "react-router-dom";
import GalleryPage from  './pages/galleryPage';
import MusicPlayer from './container/MusicPlayer';
import MusicPage from  './pages/musicPage';
class Main extends React.Component{
    constructor(props){
        super(props);
        /*this.state = {
            index:0,
            songlist: songlist,
            duration:0,
            currentTime:0,
            needControl:true,
            playing:false,
        }*/
    }
    render(){
        return(
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
                <HashRouter>
                    <Route render={({location}) => (
                            <Switch location={location}>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/profile" component={ProfilePage} />
                                <Route exact path="/home" component={HomePage} />
                    <Route exact path = "/music" render={(props) => <MusicPage {...props} state={this.state}/> }/>                               
                    <Route exact path = "/gallery" component={GalleryPage}/>
                            </Switch>
                    )}/>
                
                </HashRouter>
                
                <div className = "logobar"> 
                    <MusicPlayer id = "music-player-index" ref={(ref) => this.music= ref}/>
                    <NavigationBar isLogo = "true"/>
                </div>
            </body>
        );
    };
    componentDidMount() {
        this.interval = setInterval(() => this.setState(this.music.state), 1000);
      }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    /*
    deleteMusic(){
        var music = document.getElementById("music-player-index");
        console.log("it's music");
        music.display = "none";
    }*/
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
)