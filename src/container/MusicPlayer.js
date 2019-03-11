import React from 'react';
import './MusicPlayer.css'
import Time from './../components/MusicPlayer/Time';
//import TrackInfo from './../components/MusicPlayer/TrackInfo';
import Controls from './../components/MusicPlayer/Controls';
import { Circle } from 'rc-progress';
//import bg from './../Image/boa.jpg';
//import Photo from '../components/Photo';
import bgm from "./../Music/bgm.mp3";

class MusicPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            duration:0,
            currentTime:0,
            needControl:true,
            playing:false,
        }
    }
    render(){
        return(
            <div className ="container-player">
                <div className="header">
                    
                    <div className ="middle-control"
                    onMouseOver = {()=>this.showControl()}
                    onMouseOut={()=>this.hideControl()}
                    >{
                        this.state.needControl ?
                        <Controls 
                        onPlay={this.start.bind(this)} 
                        onPause ={this.pause.bind(this)}
                        playing = {this.state.playing}/>
                        :
                        <Time 
                        currentTime = {this.state.currentTime}
                        duration = {this.state.duration}
                        />
                    }
                    </div>
                    <Circle
                        percent = {this.state.currentTime/this.state.duration*100}
                        trailWidth ="2" trailColor = "white"
                        strokeWidth="2" strokeColor="rgb(56, 169, 214)"
                        className = "progress-bar"
                    />

                    <audio src = {bgm} 
                    id="audio" 
                    onTimeUpdate={this.playing.bind(this)}>
                    </audio>            
                    {/* 音频控件  */}

                </div >
                
            </div>
        );
    }
    start(){
        let music = document.getElementById('audio');
        this.setState({
            duration:music.duration,
            currentTime:music.currentTime,
            playing:true,
        });
        music.play()
    }
    pause(){
        let music = document.getElementById('audio');
        music.pause()
        this.setState({
            playing:false,
        });
    }
    playing(){
        
        let music = document.getElementById('audio');
        this.setState({
            duration:music.duration,
            currentTime:music.currentTime,
        });
    }

    showControl(){

        this.setState({
            needControl:true,
        });
        console.log(this.state.needControl)
    }

    hideControl(){
        console.log("hi");
        this.setState({
            needControl:false,
        });
    }

    loadJson(){
        var music = require('../Music/Music.json');
    }
}

export default MusicPlayer;