// @flow
import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
        this.arashkan = "Salam";
    }

    render() {
        console.log("Salam", this.arashkan);
        return (<div>
            <h1 style={{ textAlign: "center" }}>
                In The Name of GOD
            </h1>
            <p>
                Hi this is working. Even state: {this.state.name}
            </p>

            <p>
                Another one is {this.state.lastName}
            </p>
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById("container"));
