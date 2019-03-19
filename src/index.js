import React from 'react';
import ReactDOM from 'react-dom';

var getTimeNow = () => {
	var obj = new Date();
	var tim = obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds();
	return tim;
};

const App = () => {
	return (
		<div>
			<div>Current Time</div>
			{getTimeNow()}
		</div>
		)
}

ReactDOM.render(<App />, document.querySelector('#root'));