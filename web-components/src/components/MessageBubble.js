const template = document.createElement('template');
template.innerHTML = `
    <style>
        .main {
            display: flex;
            padding-left: 15px;
            padding-right: 10px;
            padding-top: 5px;
            flex-flow: column nowrap;
            justify-content: space-between;
            background-color: rgba(142, 36, 170, 0.15);
            border-radius: 20px;
            margin-bottom: 20px;
        }
        .bubble {
            width: 100%;
            flex-basis: content;
            color: rgba(0, 0, 0, 0.87);
            font-family: helvetica;
            text-align: left;
            line-break: normal;
            padding-right: 10px;
            word-break: break-all;
            font-size: 20px;
            min-height: 20px;
        }
        .date {
            color: rgba(0, 0, 0, 0.87);
            flex-basis: content;
            font-family: century gothic;
            text-align: right; 
            font-size: 15px;
            height: 15px;
            margin-bottom: 5px;
            padding-right: 5px;
        }
    </style>
        <div class = "main">
            <div class = "bubble"></div>
            <div class = "date"></div>
        </div>
`;

class MessageBubble extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$text = this._shadowRoot.querySelector('.bubble');
        this.$date = this._shadowRoot.querySelector('.date');
    }
}

customElements.define('message-bubble', MessageBubble);
