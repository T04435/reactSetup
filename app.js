import React from 'react';
import { render } from 'react-dom';


export default class DeckWineStock extends React.Component {
	render(){
		return (
			<p>React Loaded</p>
			)
	}
}

render(<DeckWineStock/>,document.getElementById('main'));