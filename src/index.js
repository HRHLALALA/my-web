import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/homePage';
import './index.css';
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
  import Star from './components/Star';
 //import Sound from 'react-sound';
 import MusicPlayer from './container/MusicPlayer.js';
 
  //import {
    //CSSTransition,
    //TransitionGroup,
  //} from 'react-transition-group';
class Main extends React.Component{
    render(){
        return(
            <body>
                <BrowserRouter>
                <Route render={({location}) => (
                        <Switch location={location}>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/star" component={Star} />
                            <Route exact path="/home" component={HomePage} />
                            <Route exact path = "/music" component={MusicPlayer}/>
                        </Switch>
                )}/>
                
                </BrowserRouter>
            </body>
        );
    };
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
)