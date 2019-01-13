import React from 'react';
import bgm from './../bgm.mp3';
import './MusicPlayer.css'
import Time from './../components/MusicPlayer/Time';
import TrackInfo from './../components/MusicPlayer/TrackInfo';
import Controls from './../components/MusicPlayer/Controls';
class MusicPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            duration:0,
            currentTime:0,
        }
    }
    render(){
        return(
             <div className="header">音乐播放器.React版              
                {/* 音频控件  */}
                <audio src = {bgm} 
                controls id="audio" 
                onTimeUpdate={this.playing.bind(this)}>
                </audio>
                {/* 音乐信息  */}
                <TrackInfo />

                {/* 播放控制  */}
                <Controls 
                    onPlay={this.start.bind(this)} 
                    onPause ={this.pause.bind(this)}/>

                {/* 播放时间   */}
                <Time 
                    currentTime = {this.state.currentTime}
                    duration = {this.state.duration}/>
            </div>
        );
    }
    start(){
        let music = document.getElementById('audio');
        this.setState({
            duration:music.duration,
            currentTime:music.currentTime,
        });
        music.play()
    }
    pause(){
        let music = document.getElementById('audio');
        music.pause()
    }
    playing(){
        
        let music = document.getElementById('audio');
        this.setState({
            duration:music.duration,
            currentTime:music.currentTime,
        });
    }
}

export default MusicPlayer;