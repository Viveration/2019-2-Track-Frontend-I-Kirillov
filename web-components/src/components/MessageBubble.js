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
            max-width: calc(100%-2px)
            flex-basis: content;
            color: rgba(0, 0, 0, 0.87);
            font-family: modern;
            text-align: left;
            line-break: normal;
            word-wrap: break-word;
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
            margin-right: 20px;
        }
        .name {
            margin-left: 20px
            width: 100px;
            flex-basis: content;
            font-family: consolas;
            text-align: left;
            font-size: 17px;
            color: rgba(0, 0, 0, 0.87);
            margin-bottom: 5px;
            min-height: 15px;
        }
    </style>
        <div class = "main">
            <div class = "name"></div>
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
        this.$name = this._shadowRoot.querySelector('.name');
    }
}

customElements.define('message-bubble', MessageBubble);