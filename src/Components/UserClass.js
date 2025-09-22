import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Loading name...",
                location: "Loading location",
                avatar_url: "loading image..."
            }
        }

        //console.log("Child constructor")
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Sagar106");
        const json = await data.json()
        this.setState({
            userInfo: json
        })

        console.log(json)
    }

    componentDidUpdate() {
        console.log("component did update")
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {
        console.log("Child render")
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Contact</h3>
                <h4>Location: {location}</h4>
            </div>
        )
    }
}

export default UserClass