import React from 'react';
import './Controls.css';

class Controls extends React.Component{
    render(){
        return(
            <div className = "Controls">
            {
                this.props.playing ?
                <div className = "Pause" onClick = {()=>this.handleClick()}></div> :
                <div className = "Start" onClick = {()=>this.handleClick()}></div>
            }
            </div>

        );
    }
    handleClick(){
        if(this.props.playing === false){
            this.props.onPlay();
        }
        else{
            this.props.onPause();
        }
    }
}

export default Controls;