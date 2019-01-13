import React from 'react';
import './Controls.css';

class Controls extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playing: false,
        }
    }
    render(){
        return(
            <div className = "Controls">
            {
                this.state.playing ?
                <div className = "Pause" onClick = {()=>this.handleClick()}></div> :
                <div className = "Start" onClick = {()=>this.handleClick()}></div>
            }
            </div>

        );
    }
    handleClick(){
        if(this.state.playing == false){
            this.props.onPlay();
        }
        else{
            this.props.onPause();
        }
        this.setState(prev =>({playing:!prev.playing}));
    }
}

export default Controls;