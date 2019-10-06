const template = document.createElement('template');
template.innerHTML = `
    <style>
        message-bubble {
            max-width: 70%;
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-end;

        }
        form {
            margin-top: 50px;
            max-height: 100%;
            overflow-y: scroll;
            width: 100%;
            max-width: 100%;
            justify-content: flex-end;
            display: flex;
            align-items: flex-end;
            margin-bottom: 40px;
            flex-flow: column nowrap;

        }
        form-input {
            position: fixed;
            bottom: 0px;
            left: 20%;
            right: 20%;
            width: 60%;
        }
        input[type=submit] {
            visibility: collapse;
        }

    </style>
        <form>
            <form-input name="message-text" placeholder="Сообщение..."></form-input>
        </form>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$button = this.$input._shadowRoot.querySelector('.button');
        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
        this.$button.addEventListener('onClick', this._onSubmit.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();
        let newMessage = document.createElement('message-bubble');
        let Data = new Date();
        let Hour = Data.getHours();
        let Minutes = Data.getMinutes();
        let Seconds = Data.getSeconds();
        newMessage.$text.innerText = this.$input.value;
        if (newMessage.$text.innerText == '') {
            return;
        }
        newMessage.$date.innerText = Hour+":"+Minutes+":"+Seconds;
        newMessage.$name.innerText = "DefaultName";
        this.$form.insertBefore(newMessage, this.$input);
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
                this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);