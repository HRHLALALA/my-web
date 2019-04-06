import React from 'react';
import './MusicPlayer.css'
import Time from './../components/MusicPlayer/Time';
//import TrackInfo from './../components/MusicPlayer/TrackInfo';
import Controls from './../components/MusicPlayer/Controls';
import { Circle } from 'rc-progress';
//import bg from './../Image/boa.jpg';
//import Photo from '../components/Photo';
import bgm from "./../Music/bgm.mp3";
import songList from './../Music/Music.json';

class MusicPlayer extends React.Component{
    constructor(props){
        super(props);
        let songlist = {};
        const r = require.context('./../Music', false, /\.(mp3)$/)
        r.keys().map((item, index) => { songlist[item.replace('./', '')] = r(item); });
        this.state = {
            index:0,
            songlist: songlist,
            duration:0,
            currentTime:0,
            needControl:true,
            playing:false,
        }
    }
    importAll(r) {
        let songs  = {};
        r.keys().map((item, index) => { songs[item.replace('./', '')] = r(item); });
        return songs;
    }
    render(){
        return(
            <div className ="container-player">
                <div className = "changeSong prev" 
                    onClick = {()=>this.prevSong()}>&#8249;</div>
                <div className="header">
                    
                    <div className ="middle-control"
                    onMouseOver = {()=>this.showControl()}
                    onClick = {()=>this.showControl()}
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

                    <audio src = {this.setSong()} 
                    id="audio"
                    onTimeUpdate={this.playing.bind(this)}
                    onEnded ={this.onended.bind(this)}>
                    </audio>            
                    {/* 音频控件  */}

                </div >
                <div className = "changeSong next"
                    onClick = {()=>this.nextSong()}>&#8250;</div>
                <div className = "song-title">
                        "{this.getSong().title}" by {this.getSong().Artist}
                </div>
            </div>
        );
    }
    getSong(){
        //console.log(this.state);
        if(this.state === null) return "";
        else return songList[this.state.index];
    }
    nextSong(){
        this.setState({
            index:(this.state.index+1)%songList.length,
        });
        //music.src = this.setSong();
    }
    prevSong(){
        this.setState({
            index:(this.state.index-1+songList.length)%songList.length,
        });
        //music.src = this.setSong();
    }
    setSong(){
        var music = songList[this.state.index];
        var musicAddress =this.state.songlist[music.path];
        return musicAddress;
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
        music.autoplay = true;
        this.setState({
            duration:parseInt(music.duration),
            currentTime:parseInt(music.currentTime),
        });
        //console.log("currentTime",this.state.currentTime,"durationn",this.state.duration);
    }

    onended(){
        let music = document.getElementById('audio');
        this.setState({
            index:(this.state.index+1)%songList.length,
        }//,()=>{
            //music.src = this.setSong(); } 
        );
    }

    showControl(){
        this.setState({
            needControl:true,
        });
    }

    hideControl(){
        this.setState({
            needControl:false,
        });
    }
}

export default MusicPlayer;