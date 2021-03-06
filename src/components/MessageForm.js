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
		addMessage(createMessage(inputValue, null, 'text'));
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
		if (!(mess === '' || mess === null)) {
			messages = JSON.parse(mess);
		}
		const messagesInitArray = [];
		for (let i = 0; i < messages.length; i += 1) {
			const messageArr = [i, JSON.parse(messages[i])[0], JSON.parse(messages[i])[1]];
			if (messageArr[2] !== 'Изображение' && messageArr[2] !== null) {
				messagesInitArray.push({
					key: messageArr[0],
					Text: messageArr[2],
					Time: messageArr[1],
					content: [],
					contentType: 'text',
				});
			}
		}
		return messagesInitArray;
	}

	function handleVoice() {
		function recordAudio(stream) {
			const mediaRecorder = new MediaRecorder(stream);

			const start = document.getElementById('start');
			const stop = document.getElementById('stop');

			stop.style.display = 'flex';
			start.style.display = 'none';

			mediaRecorder.start();

			let chunks = [];

			mediaRecorder.addEventListener('dataavailable', (event) => {
				chunks.push(event.data);
			});

			mediaRecorder.addEventListener('stop', () => {
				const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
				chunks = [];
				const voiceURL = URL.createObjectURL(blob);
				console.log(voiceURL);
				const content = [voiceURL];
				addMessage(createMessage('Голосовое сообщение', content, 'audio'));
				const data = new FormData();
				data.append('audio', blob);
				fetch('https://tt-front.now.sh/upload', {
					method: 'POST',
					body: data,
				});
			});

			stop.addEventListener(
				'click',
				() => {
					mediaRecorder.stop();
					stop.style.display = 'none';
					start.style.display = 'flex';
				},
				{ once: true },
			);
		}

		async function getMedia() {
			let stream = null;

			try {
				const constraints = { audio: true };
				stream = await navigator.mediaDevices.getUserMedia(constraints);
				recordAudio(stream);
			} catch (error) {
				console.log(error.message);
			}
		}

		getMedia();
	}

	function preventAndStop(event) {
		event.stopPropagation();
		event.preventDefault();
	}

	function handleDrop(event) {
		preventAndStop(event);
		const { files } = event.dataTransfer;
		handleImg(event, files);
	}
	function handleGeo() {
		if ('geolocation' in navigator) {
			const geoSuccess = (position) => {
				const { latitude } = position.coords;
				const { longitude } = position.coords;
				const coords = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
				addMessage(createMessage(coords, [], 'link'));
			};

			const geoError = (error) => {
				console.log('Geolocation Error!');
			};

			const geoOptions = {
				enableHighAccuracy: true,
				maximumAge: 30000,
				timeout: 27000,
			};

			navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
		} else {
			alert('Your browser does not support geolocation!');
		}
	}

	function handleImg(event, files = event.target.files) {
		if (files.length) {
			const data = new FormData();
			const src = [];
			for (let i = 0; i < files.length; i += 1) {
				src[i] = window.URL.createObjectURL(files[i]);
				data.append('image', files[i]);
			}
			addMessage(createMessage('Изображение', src, 'img'));
			fetch('https://tt-front.now.sh/upload', {
				method: 'POST',
				body: data,
			});
		}
	}

	function createMessage(text, content, type) {
		const Data = new Date();
		const Hour = Data.getHours();
		const Minutes = Data.getMinutes();
		let mes = localStorage.getItem(props.chatId);
		let key = 0;
		if (!(mes === '' || mes === null)) {
			key = JSON.parse(mes).length;
		}
		const value = text;

		const data = String(Hour) + ':' + String(Minutes);

		if (mes === null || mes === '') {
			mes = [];
		} else {
			mes = JSON.parse(mes);
		}
		if (type !== 'img' && type !== 'audio') {
			const newMes = [data, value];
			mes.push(JSON.stringify(newMes));
			localStorage.setItem(props.chatId, JSON.stringify(mes));
		}
		if (type === 'audio') {
			return { key: key, Text: value, Time: data, contentType: type, content: content };
		}
		if (type !== 'img') return { key: key, Text: value, Time: data, contentType: type, content: [] };
		return { key: key, Text: value, Time: data, contentType: type, content: content };
	}
	function createRenderMessage(messageDict) {
		const createdMess = (
			<MessageBubble
				key={messageDict.key}
				Text={messageDict.Text}
				Time={messageDict.Time}
				contentType={messageDict.contentType}
				content={messageDict.content}
			/>
		);
		return createdMess;
	}
	function renderMessages() {
		const renderArray = [];
		for (let i = 0; i < messag.length; i += 1) {
			renderArray.push(createRenderMessage(messag[i]));
		}

		return renderArray;
	}

	function addMessage(messageArr) {
		setMessages(
			messag.concat({
				key: messageArr.key,
				Text: messageArr.Text,
				Time: messageArr.Time,
				contentType: messageArr.contentType,
				content: messageArr.content,
			}),
		);
	}

	return (
		<div className={styles.messageForm} style={display[props.isChatOpen]}>
			<div className={styles.formChat}>
				<div
					className={styles.dropInput}
					onDragEnter={preventAndStop}
					onDragOver={preventAndStop}
					onDrop={handleDrop}>
					<div className={styles.chat} ref={chatRef}>
						{renderMessages()}
					</div>
				</div>
				<FormInput
					placeholder="Сообщение"
					value={inputValue}
					onChange={handleChange}
					onSubmit={handleSubmit}
					geoAttach={handleGeo}
					imgAttach={handleImg}
					voiceAttach={handleVoice}
				/>
			</div>
		</div>
	);
}

MessageForm.propTypes = {
	chatId: PropTypes.number.isRequired,
	isChatOpen: PropTypes.number.isRequired,
};
