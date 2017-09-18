import React from 'react';

const Container = (props) => {
	return (<div className={props.classes}>
		{props.children}
	</div>)
};


export default Container;