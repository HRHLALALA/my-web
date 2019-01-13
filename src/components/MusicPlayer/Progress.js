import './Progress.css';
import React from 'react';

class Progress extends React.Component{
    render(){
        return(
            <div className = "progress">
                <div className="progress-passed"
                style={{width: `${this.props.timePass}%`}}></div>
            </div>
        );
    }
}

export default Progress;