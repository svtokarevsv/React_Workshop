import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
	render() {
		const {comments,isOpen,toggleOpen} = this.props

		return (
			<div>
				<button onClick={toggleOpen}>{isOpen?'hide':'show'}</button>
				{this.getBody({comments, isOpen})}
			</div>
		);
	}

	getBody({comments, isOpen}) {
		if (!isOpen)return null;
		const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)
		return <ul>
			{commentElements}
		</ul>
	}
}

CommentList.propTypes = {};
CommentList.defaultProps = {};

export default toggleOpen(CommentList);
