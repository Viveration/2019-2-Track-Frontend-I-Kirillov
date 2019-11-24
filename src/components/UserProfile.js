import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ReactComponent as BackArrow } from '../svg/arrow.svg';
import { ReactComponent as ProfileDefault } from '../svg/profile.svg';
import styles from '../styles/UserProfileStyles.module.css';

export default function UserProfile(props) {
	const [values, setValue] = useState('hint');
	const hintpool = ['Minimum length is 5 characters', 'Good name!'];
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

	function handleFocus(event) {
		const { value } = event.target;
		setInputValue(value);
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
		const { value } = event.target;
		if (event.target.parentElement.className === styles.username)
			if (value.length < 5) {
				setValue(0);
			} else {
				setValue(1);
			}

		setInputValue(value);
	}
	return (
		<div className={styles.container}>
			<div className={styles.userprofileHead}>
				<Link to={`/`}>
					<button type="button" className={`${styles.userprofileButton}`}>
						<BackArrow className={styles.backArrow} />
					</button>
				</Link>
				<div className={styles.edit}>Edit profile</div>
			</div>

			<div className={styles.userprofileForm}>
				<div className={styles.avatar}>
					<ProfileDefault className={styles.profileDefault} />
				</div>
				<div className={styles.formcontainer}>
					<div className={styles.tip}>Full name</div>
					<form className={styles.fullname} onSubmit={handleSubmit}>
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
					<form className={styles.username} onSubmit={handleSubmit}>
						<input
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
				<div className={styles.hint}>{hintpool[values]}</div>
				<div className={styles.formcontainer}>
					<div className={styles.tip}>Bio</div>
					<form className={styles.information} onSubmit={handleSubmit}>
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
				<div className={styles.hint}>Any details about you</div>
			</div>
		</div>
	);
}
