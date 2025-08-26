import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World with React Element!"
)

const jsxHeading = <h1 id="heading">Hello World with JSX!</h1>;

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);