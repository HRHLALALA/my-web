import React from 'react';
//import bg from './../Image/starTrek.jpg';
import './homePage.css';
import NavigationBar from './../container/NavigationBar';
import songList from './../Music/Music.json';
import Album from './../container/MusicPlayerWithAlbum.js';
import './musicPage.css';
class MusicPage extends React.Component{
    constructor(props){
        super(props);
        this.state =this.props.state;
    }
    render(){
        return(
            <div className = "MusicPage" >
                <NavigationBar isLogo = "false" />
                <div className = "Hrhlalala">
                    HRHLALALA
                </div>
                <div className="sub">
                    Renhao Huang's first website
                </div>
                <div className="soon">
                    Music Page Release Soon
                </div>
            </div>
        );
    }
    /*setSong(){
        {songList[this.state.index].title}
        {console.log(this.state)}
        var music = songList[this.state.index];
        var musicAddress =this.state.songlist[music.path];
        return musicAddress;
    }*/

}
export default MusicPage;