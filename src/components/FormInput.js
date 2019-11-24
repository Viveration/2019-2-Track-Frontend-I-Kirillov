import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SendMessage } from '../svg/sendMessage.svg';
import { ReactComponent as Clip } from '../svg/clip.svg';
import styles from '../styles/FormInputStyles.module.css';

export default function FormInput(props) {
	return (
		<form className={styles.inp} onSubmit={props.onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
			<button type="submit" className={styles.attach} onClick={props.onAttach}>
				<Clip className={styles.clip} />
			</button>
			<button type="submit" className={styles.button} onClick={props.onSubmit}>
				<SendMessage className={styles.sendMessage} />
			</button>
		</form>
	);
}

FormInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
