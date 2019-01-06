import React from 'react';
import './MusicPlayer.css';
import bgm from './../../bgm.mp3';

class MusicPlayer extends React.Component{


    render(){
        return(
             <div className="header">音乐播放器.React版</div>              
             
                             {/* 音乐信息  */}
                             <TrackInfo />
             
                             {/* 播放进度条   */}
                             <Progress />
             
                             {/* 播放控制  */}
                             <Controls />
             
                             {/* 播放时间   */}
                             <Time />
             
                             {/* 音频控件  */}
                             <audio id="audio"></audio>
            </div>
        );
    }

    getInitialState(){
        return{
            
        }
    }
}

export default MusicPlayer;