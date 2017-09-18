// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InTeName from './js/components/in-the-name';
import MyPanel from './js/components/my-panel';
import ContainerRow from './js/components/container-row';
import Container from './js/components/container';
import GrandMother from './js/components/grand-mother';
import Daughter from './js/components/daughter';
import GrandDaughter from './js/components/grand-daughter';

export default class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
        this.arashkan = 'Salam';
    }

    render() {

        const P2 = <MyPanel headerText="H1" bodyText="Body" footerText="Footer" />;
        const P1 = <MyPanel 
                        headerText="Header 1"
                        bodyText="This is the body of my first panel."
                        footerText="Tel: (408) 288-8882"
                    />;

        return (<div>            
            <InTeName />
            <MyPanel 
                headerText="Header 1"
                bodyText="This is the body of my first panel."
                footerText="Tel: (408) 888-8888"
            />
            <ContainerRow 
                colomns={[
                            {classNames:'col-sm-6 col-xs-12', body: P1},
                            {classNames:'col-sm-6 col-xs-12', body: P2}
                        ]}
            />

            <p>
                Hi this is working. Even state: {this.state.name}
            </p>

            <p>
                Another one is {this.state.lastName}
            </p>

            <GrandMother>
                <Daughter name="Arezu">
                    <GrandDaughter>
                    </GrandDaughter>
                </Daughter>
            </GrandMother>

            <Container classes={"container"}>
                <Container classes={"row"}>
                    <Container classes={"col-xs-12 col-sm-6 col-md-3"}>
                        <MyPanel headerText="H1" bodyText="Body" footerText="Footer" />
                    </Container>
                    <Container classes={"col-xs-12 col-sm-6 col-md-3"}>
                        <MyPanel headerText="H1" bodyText="Body" footerText="Footer" />
                    </Container>
                    <Container classes={"col-xs-12 col-sm-6 col-md-3"}>
                        <MyPanel headerText="H1" bodyText="Body" footerText="Footer" />
                    </Container>
                    <Container classes={"col-xs-12 col-sm-6 col-md-3"}>
                        <MyPanel headerText="H1" bodyText="Body" footerText="Footer" />
                    </Container>
                </Container>
            </Container>

        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
