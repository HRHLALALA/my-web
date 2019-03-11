import React from 'react';
import PhotoList from './../Image/Photos/photos.json';
import './GalleryContainer.css';
import Photo from './../components/Photo';
import Photobase from './../Image/Photos/cat.jpg';
class GalleryContainer extends React.Component{
    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
      
    render(){
        const images = this.importAll(require.context('./../Image/Photos', false, /\.(png|jpe?g|svg)$/));
        console.log(images);
        return(
            <div className = "Gallery-container">
                <div id = "Gallery">
                    {PhotoList.map((item,index)=>(
                        <div className = "Photos" 
                            onMouseOver ={()=>this.onMouseOver(index)} 
                            onMouseOut = {()=>this.onMouseOut(index)}>
                            
                            <Photo src = {images[item.fileName]}/>
                        </div>
                    ))}
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

}
export default GalleryContainer;