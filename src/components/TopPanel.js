import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as ContactList } from '../svg/chatlist.svg';
import { ReactComponent as Search } from '../svg/search.svg';
import { ReactComponent as ProfileDefault } from '../svg/profile.svg';
import { ReactComponent as MenuGear } from '../svg/gear.svg';
import styles from '../styles/TopPanelStyles.module.css';

export default function TopPanel(props) {
	const display = [{ display: 'none' }, { display: 'flex' }];
	return (
		<div className={styles.panel}>
			<div className={styles.contactsHead} style={display[(props.isChatOpen + 1) % 2]}>
				<Link to={'/userprofile'}>
					<button type="button" className={`${styles.contactsButton}`} onClick={props.showFunc}>
						<ContactList className={styles.chatlist} />
					</button>
				</Link>
				<div className={styles.logo}>Messenger</div>
				<div className={styles.searchButton}>
					<Search className={styles.search} />
				</div>
			</div>
			<div className={styles.chatHead} style={display[props.isChatOpen]}>
				<Link to={'/chatlist'}>
					<button type="button" className={`${styles.contactsButton}`} onClick={props.showFunc}>
						<ContactList className={styles.chatlist} />
					</button>
				</Link>
				<div className={styles.profileAvatar}>
					<ProfileDefault className={styles.profileDefault} />
				</div>
				<div className={styles.profileInformation}>
					<div className={styles.profileName}>{props.contact}</div>
					<div className={styles.profileActivity}>Был 228 минут назад</div>
				</div>
				<div className={styles.menuButton}>
					<MenuGear className={styles.menuGear} />
				</div>
			</div>
		</div>
	);
}
TopPanel.propTypes = {
	showFunc: PropTypes.func.isRequired,
	contact: PropTypes.string.isRequired,
	isChatOpen: PropTypes.number.isRequired,
};
