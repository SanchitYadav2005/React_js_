import React,{Component} from "react";
import Click from "./Click";

class DisplayCars extends Component{
    static defaultProps = {
        allSrc : [
            "https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGplZXAlMjB3cmFuZ2xlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1569240651611-302c9897bde5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        ]
    }
    render(){
        return(
            <Click src={this.props.allSrc}/>
        )
    }
}

export default DisplayCars;