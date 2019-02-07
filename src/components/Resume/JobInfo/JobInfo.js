import './JobInfo.css';

class JobInfo extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <h2>
                    {this.props}
                </h2>


            </div>
        );
    }



}
export default JobInfo