import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './commentDetails';
import ApproveCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApproveCard>
				<CommentDetails author="Raja" time="Yesterday 3:26pm"/>
			</ApproveCard>
			<ApproveCard>
				<CommentDetails author="Manas" time="Today at 6:00pm"/>
			</ApproveCard>
			<ApproveCard>
				<CommentDetails author="Martin" time="Tuesday at 12:04am"/>
			</ApproveCard>
		</div>
	);
}

ReactDOM.render(<App />,document.querySelector('#root'));