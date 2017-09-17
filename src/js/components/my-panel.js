import React from 'react';

const MyPanel = (props) => {
    return (<div className="panel panel-primary">
        <div className="panel-heading">{props.headerText}</div>
        <div className="panel-body">{props.bodyText}</div>
        <div className="panel-footer">{props.footerText}</div>
    </div>);
};

export default MyPanel;
