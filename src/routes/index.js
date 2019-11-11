import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MessengerContainer from '../containers/MessengerContainer';

export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" component={MessengerContainer} />
			</Switch>
		</Router>
	);
}

export default Routes;
