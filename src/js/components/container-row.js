import React, {Component} from 'react';

export default class ContainerRow extends Component {
    constructor(props) {
        super(props);
    }

    _conlomnsGen(colomns) {
        return colomns.map((colomn, index) => {
            return (<div key={index} className={colomn.classNames}>{colomn.body}</div>)
        });
    }

    render() {
        return ( <div className="container">
                    <div className="row">{this._conlomnsGen(this.props.colomns)}</div>
        </div>);
    }
}
