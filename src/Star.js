import React from 'react';
import './Star.css'

class Star extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected:false,
        }
    }
    render(){
        const{selected} = this.state;
        return(
            <div id = "Star">
                <p className = {(selected)?"star selected":"star"}
                    onClick={()=>this.handClick()}
                >
                </p>
            </div>
        )
        
    };
    handClick(){
        this.setState(prev =>({selected:!prev.selected}));
    };
}

export default Star;