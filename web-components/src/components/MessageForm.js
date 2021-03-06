const template = document.createElement('template');
template.innerHTML = `
    <style>
        @keyframes show {
            from {
                transform: scale(0.001);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
        message-bubble {
            max-width: 70%;
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;
            animation: show 0.5s linear;
        }
        .chat {
            width: 100%;
            height: 100%;
            overflow-y: auto;
            display: flex;
            align-items: flex-end;
            flex-flow: column-reverse nowrap;

        }
        form {
            max-height: calc(100% - 50px);
            width: 100%;
            justify-content: flex-end;
            display: flex;
            align-items: flex-end;
            flex-flow: column nowrap;

        }
        form-input {
            width: 100%;
        }
        input[type=submit] {
            visibility: collapse;
        }
        top-panel {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            width: 100%;
            height: 50px;
        }
    </style>
        <form>
            <div class="chat"></div>
            <form-input name="message-text" placeholder="Сообщение..."></form-input>
        </form>
        <top-panel></top-panel>
`;

class MessageForm extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$button = this.$input._shadowRoot.querySelector('.button');
        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
        this.$button.addEventListener('onClick', this._onSubmit.bind(this));
        this.$chat = this._shadowRoot.querySelector('.chat');
        this.$panel = this._shadowRoot.querySelector('top-panel');
        this._historyInit(0);
    }

    _printLocalMessage(date, text) {
        const newMes = document.createElement('message-bubble');
        newMes.$text.innerText = text;
        newMes.$date.innerText = date;
        this.$chat.insertBefore(newMes, this._shadowRoot.querySelector('message-bubble'));
    }

    _historyDelete() {
        let messageBubble;
        while ((messageBubble = this.$chat.querySelector('message-bubble')) != null) {
            this.$chat.querySelector('message-bubble').remove();
        }
    }

    _historyInit(uid) {
        this._historyDelete();
        let storage;
        if ((storage = localStorage.getItem(String(uid))) == null) {
            localStorage.setItem(String(uid), '');
            storage = [];
        } else {
            if (storage !== '') {
                storage = JSON.parse(storage);
            }
        }
        for (let i = 0; i < storage.length; i++) {
            const mess = JSON.parse(storage[i]);
            this._printLocalMessage(mess[0], mess[1]);
        }
    }

    _addLocalMessage(name, date, text, uid) {
        const nameUid = [name, Number(uid)];
        let nameArray = [];
        let storage = [];
        if ((nameArray = localStorage.getItem('nameArray')) == null) {
            localStorage.setItem('nameArray', '');
            nameArray = [];
            nameArray.push(JSON.stringify(nameUid));
            /* if (uid === 0) {
                nameArray.push(JSON.stringify(['Геннадий Горин', 1]));
                nameArray.push(JSON.stringify(['Супер Сус', 2]));
            } */
            localStorage.setItem('nameArray', JSON.stringify(nameArray));
        }


        if ((storage = localStorage.getItem(String(uid))) == null) {
            localStorage.setItem(String(uid), '');
            storage = [];
        } else {
            if (storage !== '') {
                storage = JSON.parse(storage);
            } else {
                storage = [];
            }
        }

        const Message = [date, text];
        storage.push(JSON.stringify(Message));
        localStorage.setItem(String(uid), JSON.stringify(storage));
    }

    _onSubmit (event) {
        event.preventDefault();
        const newMessage = document.createElement('message-bubble');
        const Data = new Date();
        const Hour = Data.getHours();
        const Minutes = Data.getMinutes();
        newMessage.$text.innerText = this.$input.value;
        
        if (newMessage.$text.innerText === '') {
            return;
        }
        newMessage.$date.innerText = Hour+':'+Minutes;
        const name = this.$panel.$name.innerText;
        const uid = Number(this.$panel.$uid.innerText);
        this._addLocalMessage(name, newMessage.$date.innerText, newMessage.$text.innerText, uid);
        if (this.$panel.$contactsHidden === false) {
            const panel = document.querySelector('.contact').querySelector('contacts-panel');
            const chats = panel.$container.querySelectorAll('chat-bubble');
            for (let i = 0; i < chats.length; i++) {
                if (chats[i].$uid.innerText === this.$panel.$uid.innerText) {
                    chats[i].$text.innerText = newMessage.$text.innerText;
                    chats[i].$date.innerText = newMessage.$date.innerText;
                    break;
                }
            }
        }
        // newMessage.style.animation = 'show 1s linear';
        this.$chat.insertBefore(newMessage, this._shadowRoot.querySelector('message-bubble'));

    }
    _onKeyPress (event) {
        if (event.keyCode === 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
