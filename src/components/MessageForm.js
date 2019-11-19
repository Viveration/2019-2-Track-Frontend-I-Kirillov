import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import MessageBubble from './MessageBubble';
import styles from '../styles/MessageFormStyles.module.css';

export default function MessageForm(props) {
	const display = [{ display: 'none' }, { display: 'flex' }];
	const chatRef = React.createRef();
	const [inputValue, setInputValue] = useState('');
	const [messag, setMessages] = useState(messagesInit());

	function handleChange(event) {
		const { value } = event.target;
		setInputValue(value);

	}

	function handleSubmit(event) {
		event.preventDefault();
		if (inputValue === '') {
			return;
		}
		setInputValue('');
		const Arr = createMessage();
		addMessage(Arr);
	}
	useEffect(() => {
		scroller();
	});
	function scroller() {
		const chat = chatRef.current;
		setTimeout(() => {
			chat.scrollTop = 9999;
		}, 0);
	}

	function messagesInit() {
		const mess = localStorage.getItem(props.chatId);
		let messages = [];
		if (!(mess === '' || mess === null)){
			messages = JSON.parse(mess);
		}
		const messagesInitArray = [];
		for (let i = 0; i < messages.length; i += 1) {
			const messageArr = [
				i,
				JSON.parse(messages[i])[0],
				JSON.parse(messages[i])[1],
			];
			messagesInitArray.push(
				<MessageBubble
					key={messageArr[0]}
					Text={messageArr[2]}
					Time={messageArr[1]}
				/>,
			);
		}
		return messagesInitArray;
	}

	function createMessage() {
		const Data = new Date();
		const Hour = Data.getHours();
		const Minutes = Data.getMinutes();
		let mes = localStorage.getItem(props.chatId);
		let key = 0;
		if (!(mes === '' || mes === null)) {
			key = JSON.parse(mes).length;
		}
		const value = inputValue;
		const data = String(Hour) + ':' + String(Minutes);

		if(mes === null || mes === '') {
			mes = [];
		} else {
			mes = JSON.parse(mes);
		}
		const newMes = [data, value];
		mes.push(JSON.stringify(newMes));
		localStorage.setItem(props.chatId, JSON.stringify(mes));
		return [key, value, data];
	}

	function addMessage(messageArr) {
		setMessages(
			messag.concat(
				<MessageBubble
					key = {messageArr[0]}
					Text={messageArr[1]}
					Time={messageArr[2]}
				/>,
			),
		);
	}

	return (
		<div className={styles.messageForm} style={display[props.isChatOpen]}>
			<div className={styles.formChat} onSubmit={handleSubmit}>
				<div className={styles.chat} ref={chatRef}>
					{messag}
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