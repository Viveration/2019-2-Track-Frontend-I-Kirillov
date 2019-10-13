const template = document.createElement('template');
template.innerHTML = `
    <style>
        Chat {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.08);
            height: 80px;
            width: 100%;
        }
        .MainPart {
            display: flex;
            width: calc(100% - 80px);
            height: 80px;
            flex-flow: column nowrap;
            justify-content: flex-start;

        }
        .NameAndDate {
            margin-top: 5px;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            flex-basis: content;
            margin-bottom: 10px;
        }
        .ContactName {
            margin-left: 10px;
            margin-right: auto;
            overflow: hidden;
            flex-basis: content;
            color: #000000;
            white-space: nowrap;
            font-family: helvetica;
            text-align: left;
            font-size: 20px;
            height: 100%;
        }
        .ContactDate {
            padding-right: 10px;
            margin-left: 10px;
            overflow: hidden;
            flex-basis: content;
            color: rgba(0, 0, 0, 0.5);
            white-space: nowrap;
            font-family: helvetica;
            text-align: left;
            font-size: 20px;
            height: 100%;
        }
        .TextAndCheck {
            width: 100%;
            padding-right: 10px;
            margin-bottom: 10px;
            flex-basis: content;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
        }
        .ContactText {
            margin-left: 10px;
            margin-right: auto;
            width: 80%;
            overflow: hidden;
            color: rgba(0, 0, 0, 0.6);
            white-space: nowrap;
            font-family: helvetica;
            text-align: left;
            font-size: 18px;

        }
        .ContactCheck {
            width: 30px;
            height: 30px;
            background-color: red;
            margin-right: 10px;
        }
        .contactAvatar {
            width: 70px;
            height: 70px;
            border-radius: 35px;
            background-size: 100% auto;
        }
    </style>
        <Chat>
            <div class ="contactAvatar"></div>
            <div class ="MainPart">
                <div class = "NameAndDate">
                    <div class="ContactName">Всеволод Истомин</div>
                    <div class="ContactDate">2:28</div>
                    </div>
                <div class = "TextAndCheck">
                    <div class="ContactText">Да да я</div>
                    <div class="ContactCheck"></div>
                </div>
            </div>
        </Chat>
`;

class ChatBubble extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$avatar = this._shadowRoot.querySelector('.contactAvatar');
        this.$information = this._shadowRoot.querySelector('.NameAndDate');
        this.$content = this._shadowRoot.querySelector('.TextAndCheck');
        this.$text = this.$content.querySelector('.ContactText');
        this.$check = this.$content.querySelector('.ContactCheck');
        this.$name = this.$information.querySelector('.ContactName');
        this.$date = this.$information.querySelector('.ContactDate');

    }

}
customElements.define('chat-bubble', ChatBubble);
