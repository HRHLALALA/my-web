import React from 'react';
import NavigationBar from './../container/NavigationBar';
import './NotDoneYet.css';
class NotDoneYet extends React.Component{
    render(){
        return(
        <div id = "NotDoneYet">
            <NavigationBar isLogo = "false"/>
            <p>
                Have not done yet!!<br></br>
                Please look forward to the excellent page!!! 
            </p>         
            
        </div>
        );
    }
}
export default NotDoneYet;