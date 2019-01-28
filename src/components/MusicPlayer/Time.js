import './Time.css';
import React from 'react';
class Time extends React.Component{
    render(){
        console.log(this.props);
        console.log(this.props.duration);
        console.log(this.props.currentTime);
        return(
            <div className = "time">
                {parseInt(this.props.duration)-parseInt(this.props.currentTime)}
            </div>
        );
    }

}

export default Time;