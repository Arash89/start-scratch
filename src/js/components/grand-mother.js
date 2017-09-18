import React from 'react';

const GrandMother = (props) => {
	console.log('props.children' ,props.children);
	return (<div>
				<div>I am Grand Mother</div>
				<div>{'This is my child: '}{props.children}</div>
				<div>My Daughter Name is: {props.children.props.name} </div>
			</div>);
};

export default GrandMother;