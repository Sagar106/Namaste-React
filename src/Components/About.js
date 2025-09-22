import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props) {
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent component did mount")
    }

    render(){
        console.log("Parent Render")
        return (
            <div>
                <h1>About</h1>
                <UserClass name={"Sagar"} location={"Bangalore"} />
            </div>
        )
    }
}

export default About