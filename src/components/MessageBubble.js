import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MessageBubbleStyles.module.css';

export default function MessageBubble(props) {
	if (props.contentType === 'img') {
		let imgArray = [];
		imgArray = [];
		for (let i = 0; i < props.content.length; i += 1) {
			imgArray.push(
				<img
					key={i}
					className={styles.image}
					src={props.content[i]}
					alt={props.content[i]}
					onLoad={() => {
						window.URL.revokeObjectURL(props.content[i]);
					}}
				/>,
			);
		}
		return (
			<div className={`${styles.main}`}>
				<div>{imgArray}</div>
				<div className={styles.date}>{props.Time}</div>
			</div>
		);
	}
	if (props.contentType === 'audio') {
		return (
			<div className={`${styles.main}`}>
				<div className={styles.bubble}>
					<audio
						src={props.content[0]}
						controls
						onLoad={() => {
							window.URL.revokeObjectURL(props.content[0]);
						}}
					/>
				</div>
				<div className={styles.date}>{props.Time}</div>
			</div>
		);
	}
	if (props.contentType === 'link') {
		return (
			<div className={`${styles.main}`}>
				<div className={styles.bubble}>
					<a href={props.Text} rel="noopener noreferrer" target="_blank">
						{props.Text}
					</a>
				</div>
				<div className={styles.date}>{props.Time}</div>
			</div>
		);
	}
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
	contentType: PropTypes.string.isRequired,
	content: PropTypes.array.isRequired,
};
