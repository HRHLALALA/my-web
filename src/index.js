import React from 'react';
import ReactDOM from 'react-dom';
import bg from './Image/bg.jpg'
import './index.css';
import Card from './Card.js';
import Navigation from './Navigation.js';
//import Star from './Star.js';

class Main extends React.Component{
    render(){
        return(
            <body>
                <div>
                    <div><Card src={bg}/></div>
                </div>
                <div className ="info">
                    <div id="navigation">
                        <Navigation />
                    </div>
                    <div id="description">
                        hello, I am Renhao.
                    </div>
                </div>
            </body>
        );
    };
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
)