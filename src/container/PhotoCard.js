import React from 'react';
import './PhotoCard.css';
import Photo from './../components/Photo';
import Remarkable from 'react-remarkable';


class PhotoCard extends React.Component{

    render(){
        return(
            <div id = "PhotoCard">
                <div className = "close" onClick = {this.props.close}>&#10005;</div>
                <div className = "photo">
                    <Photo src = {this.photoURL(this.props.list,this.props.photo)}/>                 
                </div>
                <div className = "desc">
                    <h1>
                        {this.photoTitle(this.props.photo)}
                    </h1>
                    <p className = "description">
                        {this.photoDescription(this.props.photo)}
                    </p>
                    <p className = "Signature">
                        Renhao Huang
                    </p>
                </div>
            </div>
        );
    }

    photoURL(list,photo){
        if(photo === null)  return "";
        else return list[photo.fileName];
    }
    photoTitle(photo){
        if(photo === null)  return "";
        else return photo.title;
    }

    photoDescription(photo){
        if(photo === null)  return "";
        else return photo.description;
    }



}

export default PhotoCard;