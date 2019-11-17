import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopPanel from '../components/TopPanel';
import ContactsPanel from '../components/ContactsPanel';
import MessageForm from '../components/MessageForm';
import '../styles/globalStyles.css';
import UserProfile from '../components/UserProfile';
import bubbleStyles from '../styles/ChatBubbleStyles.module.css';

export default class MessengerContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleChat = this.handleChat.bind(this);
		this.handleShowFunc = this.handleShowFunc.bind(this);
		this.state = {
			isChatOpen: 0,
			contact: 'Name',
			messageForm: '',
			contactsPanel: <ContactsPanel isChatOpen={0} openChatFunc={this.handleChat} />,
		};
		this.contactsPanelStyle = { display: 'flex' };
		this.messageFormStyle = { display: 'none' };
	}

	handleChat(event) {
		let { target } = event;
		while (target.className !== bubbleStyles.chatBubble) {
			target = target.parentElement;
			if (target === null) {
				return;
			}
		}
		const openedChatId = target.getAttribute('id');
		const nameArray = JSON.parse(localStorage.getItem('nameArray'));
		if (nameArray !== null) {
			this.setState({
				contact: JSON.parse(nameArray[target.getAttribute('id')])[1],
			});
		}

		this.setState({ isChatOpen: 1 });
		this.setState({
			messageForm: <MessageForm isChatOpen={1} chatId={Number(openedChatId)} />,
		});
		this.setState({ contactsPanel: '' });
	}

	handleShowFunc(event) {
		this.setState({ contact: 'Name' });
		this.setState({ isChatOpen: 0 });
		this.setState({
			contactsPanel: <ContactsPanel isChatOpen={0} openChatFunc={this.handleChat} />,
		});
		this.setState({ messageForm: '' });
	}

	render() {
		return (
			<div className="main">
				<Switch>
					<Route path="/userprofile">
						<div className="userprofile">
							<UserProfile />
						</div>
					</Route>
					<Route path="/">
						<TopPanel
							isChatOpen={this.state.isChatOpen}
							contact={this.state.contact}
							showFunc={this.handleShowFunc}
						/>
						{this.state.contactsPanel}
						{this.state.messageForm}
					</Route>
				</Switch>
			</div>
		);
	}
}
