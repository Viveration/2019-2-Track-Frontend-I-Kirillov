import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MessageBubbleStyles.module.css';

export default function MessageBubble(props) {
	return (
		<div className={`${styles.main}`}>
			<div className={styles.bubble}>{props.Text}</div>
			<div className={styles.date}>{props.Time}</div>
		</div>
	);
}

MessageBubble.propTypes = {
	Text: PropTypes.string.isRequired,
	Time: PropTypes.string.isRequired,
};