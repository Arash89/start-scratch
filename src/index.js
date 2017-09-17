// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InTeName from './js/components/in-the-name';
import MyPanel from './js/components/my-panel';
import ContainerRow from './js/components/container-row';

export default class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
        this.arashkan = 'Salam';
    }

    render() {
        return (<div>            
            <InTeName />
            <MyPanel 
                headerText="Header 1"
                bodyText="This is the body of my first panel."
                footerText="Tel: (408) 888-8888"
            />
            <ContainerRow 
                colomns={[
                            {classNames:'col-sm-6 col-xs-12 bg-primary', body: 'Salam 1'},
                            {classNames:'col-sm-6 col-xs-12 bg-danger', body: 'Salam 2'}
                        ]}
            />

            <p>
                Hi this is working. Even state: {this.state.name}
            </p>

            <p>
                Another one is {this.state.lastName}
            </p>
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
