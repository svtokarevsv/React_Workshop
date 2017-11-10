import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {

	render() {
		const {comment}=this.props
		return (
			<p>
				{comment.text}
				<b>by {comment.user}</b>
			</p>
		);
	}

}

Comment.propTypes = {};
Comment.defaultProps = {};

export default Comment;
