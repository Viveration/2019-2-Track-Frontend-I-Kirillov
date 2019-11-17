import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from '../styles/UserProfileStyles.module.css';

export default function UserProfile(props) {
	const [value, setValue] = useState('hint');
	const hintpool = ['Minimum length is 5 characters', 'Invalid name!', 'Good name!'];
	const inf = React.createRef();
	const un = React.createRef();
	const fn = React.createRef();
	let fullname = '';
	let username = '';
	let information = '';
	const [inputValue, setInputValue] = useState('');
	let profile = localStorage.getItem('profile');
	if (profile === null || profile === '') {
		profile = [];
		localStorage.setItem('profile', '');
	} else {
		profile = JSON.parse(profile);
		fullname = profile[1];
		username = profile[0];
		information = profile[2];
	}
	useEffect(() => {
		if (value !== 1 && value !== 2) setValue(0);
	});

	function handleFocus(event) {
		const { values } = event.target;
		setInputValue(values);
	}
	function handleSubmit(event) {
		event.preventDefault();
		const { target } = event;
		const action = target.className;
		if (inputValue === '') {
			return;
		}
		if (action === styles.fullname) {
			profile[1] = inputValue;
		}
		if (action === styles.username) {
			if (inputValue.length < 5) {
				setInputValue('');
			} else {
				profile[0] = inputValue;
			}
		}
		if (action === styles.information) {
			profile[2] = inputValue;
		}
		localStorage.setItem('profile', JSON.stringify(profile));
	}
	function handleChange(event) {
		const { values } = event.target;
		if (event.target.parentElement.className === styles.username)
			if (values.length < 5) {
				setValue(1);
			} else {
				setValue(2);
			}

		setInputValue(values);
	}
	return (
		<div className={styles.container}>
			<div className={styles.userprofileHead}>
				<Link to={`/`}>
					<button type="button" className={`${styles.userprofileButton}`}>
						<svg x="0px" y="0px" viewBox="0 0 492 492" width="40px" height="40px">
							<g>
								<g fill="#FFF">
									<path
										d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
										c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
										L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
										c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
										c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
										C492,219.198,479.172,207.418,464.344,207.418z"
									/>
								</g>
							</g>
						</svg>
					</button>
				</Link>
				<div className={styles.edit}>Edit profile</div>
			</div>

			<div className={styles.userprofileForm}>
				<div className={styles.avatar}>
					<svg x="0px" y="0px" viewBox="0 0 1000 1000" width="100px" heigth="100px">
						<g fill="#8E24AA">
							<path d="M500,8.8C229.4,8.8,10,228.7,10,500c0,271.3,219.4,491.2,490,491.2c270.6,0,490-219.9,490-491.2C990,228.7,770.6,8.8,500,8.8z M794.8,767.5c-57.7-28-36.5-6.1-111.9-37.2c-77.2-31.8-95.5-42.2-95.5-42.2l-0.7-72.9c0,0,28.9-21.8,37.9-90.8c18,5.2,24.2-21.1,25.1-37.8c1.1-16.2,10.7-66.7-11.4-62.2c4.5-33.7,8.1-64.2,6.5-80.4c-5.5-56.6-44.9-115.8-144.3-120.1c-84.5,4.3-139.3,63.5-144.8,120.2c-1.6,16.1,1.7,46.6,6.2,80.4c-22.1-4.6-12.6,46-11.6,62.2c1.1,16.8,7,43.1,25.1,37.9c9,69,37.9,91,37.9,91l-0.7,73.3c0,0-18.3,11.1-95.5,42.9c-75.4,31.1-54.3,7.9-111.9,35.8c-64-70.8-103.3-164.5-103.3-267.5c0-220.4,178.2-399.1,398.1-399.1c219.9,0,398.1,178.7,398.1,399.1C898.1,603.1,858.8,696.7,794.8,767.5z" />
						</g>
					</svg>
				</div>
				<div className={styles.formcontainer}>
					<div className={styles.tip}>Full name</div>
					<form className={styles.fullname} onSubmit={handleSubmit} ref={fn}>
						<input
							className={styles.input}
							type="text"
							value={props.value}
							placeholder="Type here"
							onChange={handleChange}
							defaultValue={fullname}
							onFocus={handleFocus}
						/>
					</form>
				</div>
				<div className={styles.formcontainer}>
					<div className={styles.tip}>Username</div>
					<form className={styles.username} onSubmit={handleSubmit} ref={un}>
						<input
							ref={un}
							className={styles.input}
							type="text"
							value={props.value}
							placeholder="Type here"
							onChange={handleChange}
							defaultValue={username}
							onFocus={handleFocus}
						/>
					</form>
				</div>
				<div className={styles.hint}>{hintpool[value]}</div>
				<div className={styles.formcontainer}>
					<div className={styles.tip}>Bio</div>
					<form className={styles.information} onSubmit={handleSubmit} ref={inf}>
						<input
							className={styles.input}
							type="text"
							value={props.value}
							placeholder="Type here"
							onChange={handleChange}
							defaultValue={information}
							onFocus={handleFocus}
						/>
					</form>
				</div>
				<div className={styles.hint} style={{ marginBottom: '50px' }}>
					Any details about you
				</div>
			</div>
		</div>
	);
}
