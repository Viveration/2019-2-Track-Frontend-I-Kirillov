import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as ProfileDefault } from '../svg/profile.svg';
import { ReactComponent as Check } from '../svg/check.svg';
import styles from '../styles/ChatBubbleStyles.module.css';

export default function ChatBubble(props) {
	const url = props.contact + '_' + String(props.id);
	return (
		<Link to={`chat/${url}`} style={{ textDecoration: 'none' }}>
			<div role="button" id={props.id} className={styles.chatBubble} onClick={props.onClickFunc}>
				<div className={styles.contactAvatar}>
					<ProfileDefault className={styles.profileDefault} />
				</div>
				<div className={styles.MainPart}>
					<div className={styles.NameAndDate}>
						<div className={styles.ContactName}>{props.contact}</div>
						<div className={styles.ContactDate}>{props.Time}</div>
					</div>
					<div className={styles.TextAndCheck}>
						<div className={styles.ContactText}>{props.Text}</div>
						<div className={styles.ContactCheck}>
							<Check className={styles.check} />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

ChatBubble.propTypes = {
	onClickFunc: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	Text: PropTypes.string.isRequired,
	Time: PropTypes.string.isRequired,
	contact: PropTypes.string.isRequired,
};
