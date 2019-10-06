const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            background-color: rgba(240, 240, 240);
            height 25px;
            width: calc(60%-120px);
            outline: none;
            flex-grow: 1;
        }
        .button {
            background-color: #8E24AA;
            align-items: center;
            height: 30px;
            width: 100px;
            margin-left: 10px;
            padding-top: 8px;
            padding-left: 8px;
            padding-right: 5px;
            border-radius: 15px;
            font-size: 18px;
            position: relative

        }
        .button div {
            cursor: default;
            margin-right: 5px;
            flex-flow: row nowrap;
            display: flex;
            font-size: 18px;
            align-content: center;
            text-align: center;
            color: rgba(8, 8, 8);
            font-family: helvetica;
            overflow: hidden;

        }
        .inp {
            flex-direction: row;
            display: flex;
            align-items: center;
            height: 40px;
            padding-left: 10px;
            background-color: rgb(0, 0, 0, 0.08);
            border-radius: 5px;
        }
    </style>
    <div class = inp>
        <input type="text">
        <div class = "button">
            <div>Отправить</div>
        </div>
    </div>
`;
class FormInput extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$input = this.shadowRoot.querySelector('input');
        this.$myButton = this._shadowRoot.querySelector('.button');
        this.$myButton.addEventListener('click', this._onClick.bind(this));
    }
    _onClick (event) {
        this.$myButton.dispatchEvent(new Event('onClick'));
    }
    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        let result = this.$input.value;
        this.$input.value = '';
        return result;
    }
}

customElements.define('form-input', FormInput);
