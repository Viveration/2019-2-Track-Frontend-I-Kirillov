import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBubble from './ChatBubble';
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
				<svg x="0px" y="0px" width="40px" height="40px" viewBox="0 0 35.738 35.738">
					<g>
						<g>
							<path
								d="M0,35.667c0,0,11.596-37.07,35.738-35.55c0,0-2.994,4.849-10.551,6.416c0,0,3.518,0.429,6.369-0.522   
							c0,0-1.711,5.515-11.025,6.273c0,0,5.133,1.331,7.414,0.57c0,0-0.619,4.111-10.102,6.154c-0.562,0.12-4.347,1.067-1.306,1.448   
							c0,0,4.371,0.763,5.514,0.381c0,0-3.744,5.607-12.928,5.132c-0.903-0.047-1.332,0-1.332,0L0,35.667z"
								data-original="#000000"
								data-old_color="#000000"
								fill="#D60BDD"
							/>
						</g>
					</g>
				</svg>
			</button>
		</div>
	);
}

ContactsPanel.propTypes = {
	isChatOpen: PropTypes.number.isRequired,
	openChatFunc: PropTypes.func.isRequired,
};
