import './Progress.css';
import React from 'react';
import { Circle } from 'rc-progress';
class Progress extends React.Component{
    render(){
        return(
            <div className = "progress">
                <Circle
                    percent = {this.props.currentTime/this.props.duration*100}
                    trailWidth ="2" trailColor = "white"
                    strokeWidth="2" strokeColor="blueviolet"
                    />
            </div>
        );
    }
}

export default Progress;