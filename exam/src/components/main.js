import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from '../styles/main.module.css';
import { getWeather, GPSWeather } from '../actions/actions';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.GPSWeather_ = props.GPSWeather;
		this.getWeather_ = props.getWeather;
	}


	render() {
		return (
			<Router>
				<div className={styles.globalContainer}>
					<Switch>
						<Route path='/search'>
							<button></button>
						</Route>
						<Route path='/'>
							<diw className={styles.container}>
								<div className={styles.header}>
									<div className={styles.logo}>	
										Manage cities
									</div>
								</div>
								<div className={styles.citylist}>
									лист
								</div>
								<button className={styles.plus} />
							</diw>
							<Link to='/search'>
								<button className={styles.plus} />
							</Link>
						</Route>
					</Switch>
				</div>
			</Router>
			)
	}
}
export default Main;
const mapDispatchToProps = {
	getWeather,
	GPSWeather,
};