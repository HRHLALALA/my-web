import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/homePage';
import ProfilePage from './pages/profilePage';
import './index.css';
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";
  import Star from './components/Star';
  import MusicPlayer from './container/MusicPlayer.js';
 //import Sound from 'react-sound';

 
  //import {
    //CSSTransition,
    //TransitionGroup,
  //} from 'react-transition-group';
class Main extends React.Component{
    render(){
        return(
            <div >
            <div className = "body">
                <BrowserRouter>
                <Route render={({location}) => (
                        <Switch location={location}>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/profile" component={ProfilePage} />
                            <Route exact path="/home" component={HomePage} />
                            <Route exact path = "/music" component={MusicPlayer}/>
                        </Switch>
                )}/>
                
                </BrowserRouter>
            </div>
            </div>
        );
    };
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
)