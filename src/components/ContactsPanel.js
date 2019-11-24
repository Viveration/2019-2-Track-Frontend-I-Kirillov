import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChatBubble from './ChatBubble';
import { ReactComponent as Create } from '../svg/create.svg';
import styles from '../styles/ContactsPanelStyles.module.css';

export default function ContactsPanel(props) {
	const display = [{ display: 'flex' }, { display: 'none' }];
	const [chats, setChats] = useState(chatsInit());
	const chatRef = React.createRef();

	function chatsInit() {
		const nameArray = JSON.parse(localStorage.getItem('nameArray'));
		if (nameArray !== null) {
			const InitArray = [];
			for (let i = 0; i < nameArray.length; i += 1) {
				let messages = localStorage.getItem(i);
				if (messages === null || messages === '') {
					localStorage.setItem(i, '');
					messages = [];
				} else {
					messages = JSON.parse(messages);
				}
				let Text = 'Сообщений нет!';
				let Time = '--|--';
				if (messages.length !== 0) {
					Text = JSON.parse(messages[messages.length - 1])[1];
					Time = JSON.parse(messages[messages.length - 1])[0];
				}
				InitArray.push(
					<ChatBubble
						id={i}
						key={i}
						Text={Text}
						Time={Time}
						contact={JSON.parse(nameArray[i])[1]}
						onClickFunc={props.openChatFunc}
					/>,
				);
			}
			return InitArray;
		}
		return [];
	}
	function createChatObj() {
		let nameArray = JSON.parse(localStorage.getItem('nameArray'));
		if (nameArray == null) {
			nameArray = [];
		}
		const chatObj = {
			id: nameArray.length,
			key: nameArray.length,
			contact: 'Name',
			Text: 'Сообщений нет!',
			Time: '--|--',
			onClickFunc: props.openChatFunc,
		};
		nameArray.push(JSON.stringify([chatObj.id, chatObj.contact]));
		localStorage.setItem('nameArray', JSON.stringify(nameArray));
		return chatObj;
	}

	function handleCreateChat() {
		chatAdd(createChatObj());
	}
	function chatAdd(chatObj) {
		setChats(
			chats.concat(
				<ChatBubble
					key={chatObj.id}
					id={chatObj.id}
					Text={chatObj.Text}
					Time={chatObj.Time}
					contact={chatObj.contact}
					onClickFunc={props.openChatFunc}
				/>,
			),
		);
	}
	return (
		<div className={styles.ContactsPanel} style={display[props.isChatOpen]} ref={chatRef}>
			{chats}
			<button type="button" className={styles.createChat} onClick={handleCreateChat}>
				<Create className={styles.create} />
			</button>
		</div>
	);
}

ContactsPanel.propTypes = {
	isChatOpen: PropTypes.number.isRequired,
	openChatFunc: PropTypes.func.isRequired,
};
