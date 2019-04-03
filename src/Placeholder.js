import React from 'react';
import ReactDOM from 'react-dom';

const Placeholder = (props) => {
	return (
		<div className="ui placeholder segment">
			{props.children}
		</div>
	);
}

export default Placeholder;