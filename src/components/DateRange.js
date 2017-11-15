import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker,{DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DateRange extends Component {
	state={
		from:null,
		to:null
	}
	handleDayClick=(day)=> {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
	}
	render() {
		const {from,to} = this.state
		let rangeText = from&&to&&`${from.toDateString()}-${to.toDateString()}`
		return (
			<div>
			<DayPicker
				selectedDays={[from, { from, to }]}
				onDayClick={this.handleDayClick}
			/>
				{rangeText}
			</div>
		);
	}
}

DateRange.propTypes = {};
DateRange.defaultProps = {};

export default DateRange;
