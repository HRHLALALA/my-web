import React from 'react';
import Navigation from './../components/Navigation'
import Photo from './../components/Photo'
import bg from './../Image/bg.jpg';
class HomePage extends React.Component{
    render(){
        return(
        <div>
            <Photo src = {bg}/>
            <div className ="info">
                
                <div id="navigation">
                    <Navigation />
                </div>
                <div id="description">
                    hello, I am Renhao.
                </div>
            </div>
        </div>
        );
    }
}
export default HomePage;