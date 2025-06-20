import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div", 
            { id: "child1", key: "child1" },
            [
                React.createElement("h1", { key: "c1h1" }, "I am an h1 tag"),
                React.createElement("h2", { key: "c1h2" }, "I am an h2 tag")
            ]
        ),
        React.createElement(
            "div", 
            { id: "child2", key: "child2" },
            [
                React.createElement("h1", { key: "c2h1" }, "I am an h1 tag"),
                React.createElement("h2", { key: "c2h2" }, "I am an h2 tag")
            ]
        )
    ]
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);