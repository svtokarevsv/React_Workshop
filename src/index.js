import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

if(module.hot) {
	module.hot.accept();
}
render(<App articles = {articles} />, document.getElementById('container'))