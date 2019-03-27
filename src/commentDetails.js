import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';

const commentDetails = () => {
	return (
		<div className = "comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={faker.image.avatar()} />
			</a>
			<div className="content">
				<a href="/" className="author">Manas</a>
				<div className="metadata">
					<span className="data">Today at 6:00 pm</span>
				</div>
				<div className="text">Nice blog post!
				</div>
			</div>
		</div>
	)
}

export default commentDetails;