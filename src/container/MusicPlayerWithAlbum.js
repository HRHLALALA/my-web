import MusicPlayer from './MusicPlayer';
import React from 'react';
import Cover from './../components/MusicPlayer/Cover';
import './MusicPlayer.css';


class Album extends React.Component{
    render(){
        return(
            <div className = "container-player with-cover"
            onMouseOver = {()=>this.refs.cover.openAlbum()}
            onMouseOut = {()=>this.refs.cover.closeAlbum()}>
                <MusicPlayer/>
                <Cover ref="cover"/>
            </div>
        )
    }
}

export default Album;