import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import MessageBubble from './MessageBubble';
import styles from '../styles/MessageFormStyles.module.css';

export default function MessageForm(props) {
	const display = [{ display: 'none' }, { display: 'flex' }];
	let messagesCount = 0;
	const [inputValue, setInputValue] = useState('');
	const [messages, setMessages] = useState(messagesInit());

	function handleChange(event) {
		const { value } = event.target;
		setInputValue(value);
		messagesCount += 1;

	}

	function handleSubmit(event) {
		event.preventDefault();
		if (inputValue === '') {
			return;
		}
		setInputValue('');
		const Obj = createMessage();
		addMessage(Obj);
	}

	function messagesInit() {
		const messages = JSON.parse(props.chatId);
		const messagesInitArray = [];
		for (let i = 0; i < messages.length; i++) {
			let messageObj = {
				Time: JSON.parse(messages[i])[0],
				Text: JSON.parse(messages[i])[1],
				key: messagesCount,
			}
			addMessage(messageObj);
		}
		return messagesInitArray;
	}

	function createMessage() {
		const Data = new Date();
        const Hour = Data.getHours();
        const Minutes = Data.getMinutes();
        mes = localStorage.getItem(props.chatId);
		const messageObj = {
			key: messagesCount,
			Text: inputValue,
			Time: String(Hour) + ':' + String(Minutes),
		};
	 	let mes = localStorage.getItem(props.chatId);
	 	if(mes == null || mes == '') {
	 		mes = [];
	 	} else {
	 		mes = JSON.parse(mes);
	 	}
	 	const newMes = [messageObj.Time, messageObj.Text];
	 	mes.push(JSON.stringify(newMes));
	 	localStorage.setItem(props.chatId, JSON.stringify(mes));
		return messageObj;
	}

	function addMessage(messageObj) {
		setMessages(
			messages.concat(
				<MessageBubble
					key = {messageObj.key}
					messageText={messageObj.Text}
					messageTime={messageObj.Time}
				/>,
			),
		);
	}

	return (
		<div className={styles.messageForm} style={display[props.isChatOpen]}>
			<div className={styles.formChat} onSubmit={handleSubmit}>
				<div className={styles.chat}>
					{messages}
				</div>
				<FormInput
					placeholder="Сообщение"
					value={inputValue}
					onChange={handleChange}
					onSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
}

MessageForm.propTypes = {
	chatId: PropTypes.number.isRequired,
	isChatOpen: PropTypes.number.isRequired,
};