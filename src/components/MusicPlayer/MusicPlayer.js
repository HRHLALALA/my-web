import React from 'react';
import './MusicPlayer.css';
import bgm from './../../bgm.mp3';

class MusicPlayer extends React.Component{


    render(){
        return(
            <div className = "MusicPlayer">
                <audio autoPlay loops controls title="hello world">
                    <source src={bgm} type="audio/mpeg"/>
                </audio>
            </div>
        );
    }
}

export default MusicPlayer;