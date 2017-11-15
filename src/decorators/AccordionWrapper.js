import React, {Component} from 'react';

export default (OriginalComponent) => class Accordion extends Component {
	state = {
		openItemId: null
	}

	render() {
		return <OriginalComponent {...this.props} openItemId={this.state.openItemId} toggleOpen={this.toggleOpen} ref={this.getRef}/>
	}

	toggleOpen = openItemId => (e) => {
		e && e.preventDefault && e.preventDefault()
		const openId = openItemId===this.state.openItemId?null:openItemId;
		this.setState({
			openItemId: openId
		})
	}

	getRef = (ref) => {
		// console.log('---', ref)
	}
}


