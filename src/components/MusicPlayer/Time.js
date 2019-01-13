import './Time.css';
import React from 'react';
import Progress from './Progress.js';
class Time extends React.Component{
    render(){
        console.log(this.props);
        console.log(this.props.duration);
        console.log(this.props.currentTime);
        return(
            <div className = "time">
                <div className = "duration">
                {this.props.duration}
                </div>
                <div className = "currentTime">
                    {this.props.currentTime}
                </div>
                <div className = "progress-bar">
                    <Progress
                    timePass = {this.props.currentTime/this.props.duration*100}
                    />
                </div>
            </div>
        );
    }
}

export default Time;