const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
        display: block;
        font-family: sans-serif;
        }
        .bubble {
            color: #876ED7;
            border: 1px solid black; 
            background-color: #3914AF; 
            padding: 10px;
        }
        .date {
            background-color: #7109AA;
            color: yellow;
            border: 1px solid black; 
            padding: 10px;
        }
        .name {
            background-color: #FFD300
            color: black;
            border: 1px solid black; 
            padding: 10px;
        }
    </style>
        <div>
            <div class = "name">DefaultName</div>
            <div class = "bubble"></div>
            <div class = "date"></div>
        <div>
`;

class MessageBubble extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$text = this._shadowRoot.querySelector('.bubble');
        this.$date = this._shadowRoot.querySelector('.date');
        this.$name = this._shadowRoot.querySelector('.name');
    }
}

customElements.define('message-bubble', MessageBubble);