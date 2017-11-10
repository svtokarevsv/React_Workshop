import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {
	state = {
		isOpen: false
	}

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} ref={this.getRef}/>
	}

	toggleOpen = (e) => {
		e && e.preventDefault && e.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	getRef = (ref) => {
		// console.log('---', ref)
	}
}


