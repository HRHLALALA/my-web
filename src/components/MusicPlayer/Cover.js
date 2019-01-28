import './Cover.css';
import React from 'react';
import albumPhoto from './../../Image/boa.jpg'
//import Photo from '../Photo';
class Cover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
        }
    }
    render(){
        return(
            <div className = "covers">
                <div className = "static-cover">
                    <img src = {albumPhoto} alt=""/>
                </div>
                <div className = {this.state.open?"dynamic-cover open":"dynamic-cover" }>
                    <img src = {albumPhoto} alt=""/>
                </div>

            </div>
        );
    }
    openAlbum(){
        this.setState({open:true}); 
    }
    closeAlbum(){
        this.setState({open:false}); 
    }
}

export default Cover;
