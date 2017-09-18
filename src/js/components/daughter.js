import React from 'react';

const Daughter = (props) => {
	return (<div>
				<div>I am The Mother</div>
				<div>{'This is my child: '}{props.children}</div>
			</div>);
};

export default Daughter;