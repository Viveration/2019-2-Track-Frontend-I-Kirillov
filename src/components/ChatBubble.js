import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ChatBubbleStyles.module.css';


export default function ChatBubble(props) {
	return (
		<div
			role="button"
			id={props.id}
			className={styles.chatBubble}
			onClick={props.onClickFunc}
		>
			<div className={styles.contactAvatar}>
			</div>
			<div className={styles.MainPart}>
				<div className={styles.NameAndDate}>
					<div className={styles.ContactName}>{props.contact}</div>
					<div className={styles.ContactDate}>{props.Time}</div>
				</div>
				<div className={styles.TextAndCheck}>
					<div className={styles.ContactText}>{props.Text}</div>
					<div className={styles.ContactCheck}>
						<svg
							className="tick"
							x="0px"
							y="0px"
							width="30px"
							height="30px"
							viewBox="0 0 448.8 448.8"
							style={{ fill: '#00CC66' }}
						>
							<polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

ChatBubble.propTypes = {
	onClickFunc: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	Text: PropTypes.string.isRequired,
	Time: PropTypes.string.isRequired,
	contact: PropTypes.string.isRequired,
};