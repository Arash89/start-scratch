import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
    constuctor(props) {
        super(props);
    }

    render() {
        // console.log("Salam");
        return (<h1 style={{ textAlign: "center" }}>
                In The Name of GOD
        </h1>);
    }
}

ReactDOM.render(<App />, document.getElementById("container"));
