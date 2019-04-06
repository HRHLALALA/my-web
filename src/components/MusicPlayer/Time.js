import './Time.css';
import React from 'react';
class Time extends React.Component{
    render(){
        return(
            <div className = "time">
                {parseInt(this.props.duration)-parseInt(this.props.currentTime)}
            </div>
        );
    }

}

export default Time;