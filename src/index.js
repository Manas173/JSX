import React from 'react';
import ReactDOM from 'react-dom';
// import Placeholder from './placeholder';

const Placeholder = (props) => {
	return (
		<div className="ui placeholder segment">
			{props.children}
		</div>
	);
}

const App = () => {
	return (
		<div>
			<Placeholder>
				<div className="ui icon header">
					<i className="pdf file outline icon"></i>
					No documents are listed for this customer.
				</div>
				<div className="ui primary button">Add Document</div>
			</Placeholder>

			<Placeholder>
				<h4 className="ui header">For your information</h4>
				<p>
					Quantum mechanics is the branch of mechanics that deals with the mathematical 
					description of the motion and interaction of subatomic particles, incorporating 
					the concepts of quantization of energy, wave–particle duality, the uncertainty principle,
					 and the correspondence principle.
				</p>
			</Placeholder>
			<Placeholder>
				<div className="ui icon header">
					<i className="pdf file outline icon"></i>
					No documents are listed for this customer.
				</div>
				<div className="ui primary button">Add Document</div>
				<h4 className="ui header">For your information</h4>
				<p>
					Quantum mechanics is the branch of mechanics that deals with the mathematical 
					description of the motion and interaction of subatomic particles, incorporating 
					the concepts of quantization of energy, wave–particle duality, the uncertainty principle,
					 and the correspondence principle.
				</p>
			</Placeholder>
		</div>
	);
}


ReactDOM.render(<App />,document.querySelector('#root'));