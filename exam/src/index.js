import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/main';

render(
	<Main />,
	document.getElementById('root')
);

