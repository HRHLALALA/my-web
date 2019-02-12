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
  import Album from './container/MusicPlayerWithAlbum.js';
 
class Main extends React.Component{
    render(){
        return(
            <body>
                <BrowserRouter>
                    <Route render={({location}) => (
                            <Switch location={location}>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/profile" component={ProfilePage} />
                                <Route exact path="/home" component={HomePage} />
                                <Route exact path = "/music" component={Album}/>
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