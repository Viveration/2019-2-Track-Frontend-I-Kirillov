const template = document.createElement('template');
template.innerHTML = `
    <style>
        message-bubble {
            max-width: 70%;
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;

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
            min-width: 500px;
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
        this._historyInit();
    }

    _printLocalMessage(date, text) {
        let newMes = document.createElement("message-bubble");
        newMes.$text.innerText = text;
        newMes.$date.innerText = date;
        this.$chat.insertBefore(newMes, document.querySelector('message-bubble'));
    }
    _historyInit() {
        let storage;
        if ((storage = localStorage.getItem('message')) == null) {
            localStorage.setItem('message', '');
            storage = [];
        } else {
            if (storage !== '') {
                storage = JSON.parse(storage);
            }
        }
        for (let i = 0; i < storage.length; i++) {
            let mess = JSON.parse(storage[i]);
            this._printLocalMessage(mess[1], mess[2]);
        }
    }

    _addLocalMessage(name, date, text) {
        if ((storage = localStorage.getItem('message')) == null) {
            localStorage.setItem('message', '');
            storage = [];
        } else {
            if (storage !== '') {
                storage = JSON.parse(storage);
            } else {
                storage = [];
            }
        }
        let Message = [name, date, text];
        storage.push(JSON.stringify(Message));
        localStorage.setItem('message', JSON.stringify(storage));
    }

    _onSubmit (event) {
        event.preventDefault();
        let newMessage = document.createElement('message-bubble');
        let Data = new Date();
        let Hour = Data.getHours();
        let Minutes = Data.getMinutes();
        newMessage.$text.innerText = this.$input.value;
        if (newMessage.$text.innerText === '') {
            return;
        }
        newMessage.$date.innerText = Hour+":"+Minutes;
        this._addLocalMessage("Всеволод Истомин", newMessage.$date.innerText, newMessage.$text.innerText);
        this.$chat.insertBefore(newMessage, this._shadowRoot.querySelector('message-bubble'));
    }
    _onKeyPress (event) {
        if (event.keyCode === 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
