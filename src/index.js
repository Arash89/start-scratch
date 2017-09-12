import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render () {
		console.log("Salam");
		return (<h1>
			In The Name of GOD
				</h1>);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));