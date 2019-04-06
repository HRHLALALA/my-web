import React from 'react';
import PhotoList from './../Image/Photos/photos.json';
import './GalleryContainer.css';
import Photo from './../components/Photo';
import PhotoCard from './PhotoCard';
class GalleryContainer extends React.Component{
    constructor(props){
        super(props);
        let imagelist = {};
        const r = require.context('./../Image/Photos', false, /\.(png|jpe?g|svg)$/)
        r.keys().map((item, index) => { imagelist[item.replace('./', '')] = r(item); });
        this.state = {
            images:imagelist,
            currImage:null,
            index: 0,
        }
    }
    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
      
    render(){
        //const images = this.importAll(require.context('./../Image/Photos', false, /\.(png|jpe?g|svg)$/));
        //console.log(images);
        return(
            <div className = "Gallery-container">
                <div id = "Gallery">
                    {PhotoList.map((item,index)=>(
                        <div className = "Photos" 
                            onMouseOver ={()=>this.onMouseOver(index)} 
                            onMouseOut = {()=>this.onMouseOut(index)}
                            onClick = {()=>this.overlayOn(item,index)}>
                            <Photo src = {this.state.images[item.fileName]}/>
                        </div>
                    ))}
                </div>
                <div id = "overlay">
                    <div class = "background" onClick ={()=>this.overlayOff()}></div>
                    <div  class="prev round" onClick = {()=>this.prevPhoto()}>&#8249;</div>
                    <PhotoCard list = {this.state.images} photo = {this.state.currImage} close ={this.overlayOff.bind(this)}/>
                    <div href="#" class="next round" onClick = {()=>this.nextPhoto()}>&#8250;</div>
                </div>
            </div>
        )

    }

    componentDidMount(){
        const photos = document.getElementsByClassName('Photos');
        console.log(PhotoList);
        for(var i=0;i<photos.length;i++){
            var j = 360 / photos.length * (i+1);
            photos[i].style['transform'] = "rotateY("+j.toString()+"deg) translateZ(400px)";
            photos[i].style['opacity']="0.7";
        }
    }

    onMouseOver(index){
        const photos = document.getElementsByClassName('Photos');
        photos[index].style['opacity']="1";
        /*for(var i=0;i<photos.length;i++){
            photos[i].style['animation-play-state']= "paused";
        }*/
        const gallery = document.getElementById('Gallery');
        gallery.style['animation-play-state']= "paused";
    }
    onMouseOut(index){
        const photos = document.getElementsByClassName('Photos');
        photos[index].style['opacity']="0.7";
        /*for(var i=0;i<photos.length;i++){
            photos[i].style['animation-play-state']= "running";
        }*/
        const gallery = document.getElementById('Gallery');
        gallery.style['animation-play-state']= "running";
    }

    overlayOn(item,index){
        const overlay = document.getElementById('overlay');
        overlay.style.display = "block";
        /*const photo = document.getElementById("card");
        photo.src = this.state.images[item.fileName];*/
        this.setState({currImage:item, index:index});
        const gallery = document.getElementById('Gallery');
        gallery.style['animation-play-state']= "paused";
        gallery.style['display']= "none";
    }
    overlayOff(){
        const overlay = document.getElementById('overlay');
        overlay.style.display = "none";
        const gallery = document.getElementById('Gallery');
        gallery.style['animation-play-state']= "running";
        gallery.style['display']= "flex";

    }
    nextPhoto(){
        var i = this.state.index + 1;
        this.setState({
            index:(i+1)%PhotoList.length,
            currImage: PhotoList[(i+1)%PhotoList.length],
        })
    }
    prevPhoto(){
        var i = this.state.index - 1;
        this.setState({
            index:(i-1+PhotoList.length)%PhotoList.length,
            currImage: PhotoList[(i-1+PhotoList.length)%PhotoList.length],
        })
    }

}
export default GalleryContainer;