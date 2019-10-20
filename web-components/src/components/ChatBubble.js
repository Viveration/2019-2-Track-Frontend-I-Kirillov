const template = document.createElement('template');
template.innerHTML = `
    <style>
        Chat {
            display: flex;
            padding-left: 5px;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.08);
            height: 80px;
            width: 100%;
        }
        Chat:hover {
            background-color: rgba(0, 0, 0, 0.16);
        }
        @keyframes slide {
            from {
                background-color: rgba(0, 0, 0, 0.08);
            }
            
            to {
                background-color: #FF99FF;
            }

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
            min-width: 100px;
            flex-basis: content;
            color: #000000;
            white-space: nowrap;
            font-family: helvetica;
            text-align: left;
            font-size: 20px;
            height: 100%;
        }
        .ContactDate {
            margin-right: 10px;
            margin-left: 10px;
            overflow: hidden;
            flex-basis: content;
            min-width: 52px;
            color: rgba(0, 0, 0, 0.5);
            white-space: nowrap;
            font-family: helvetica;
            text-align: left;
            font-size: 20px;
            height: 100%;
        }
        .TextAndCheck {
            width: 100%;
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
        svg {
            fill: 0033CC;
        }
        .ContactCheck {
            width: 30px;
            height: 30px;
            margin-right: 10px;

        }
        .contactAvatar {
            width: 70px;
            height: 70px;
            border-radius: 35px;
            background-size: cover;
            background-repeat: no-repeat;
        }
    </style>
        <Chat>
            <div hidden class="uid"></div>
            <div class ="contactAvatar"></div>
            <div class ="MainPart">
                <div class = "NameAndDate">
                    <div class="ContactName">Всеволод Истомин</div>
                    <div class="ContactDate">2:28</div>
                    </div>
                <div class = "TextAndCheck">
                    <div class="ContactText">Да да я</div>
                    <div class="ContactCheck">
                       <?xml version="1.0"?>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" 
                                width="30px" height="30px" viewBox="0 0 78.369 78.369" style="enable-background:new 0 0 78.369 78.369;" 
                                xml:space="preserve" class=""><g><g>
                                <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704   
                                    c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704   
                                    C78.477,17.894,78.477,18.586,78.049,19.015z" data-original="#000000" class="active-path" data-old_color="#000000" 
                                    fill="#00CC66"/>
                            </g></g> </svg>
                    </div>
                </div>
            </div>
        </Chat>
`;

class ChatBubble extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$chat = this._shadowRoot.querySelector('Chat');
        this.$avatar = this._shadowRoot.querySelector('.contactAvatar');
        this.$information = this._shadowRoot.querySelector('.NameAndDate');
        this.$content = this._shadowRoot.querySelector('.TextAndCheck');
        this.$text = this.$content.querySelector('.ContactText');
        this.$check = this.$content.querySelector('.ContactCheck');
        this.$name = this.$information.querySelector('.ContactName');
        this.$date = this.$information.querySelector('.ContactDate');
        this.$uid = this.$chat.querySelector('.uid');
        this.$parent = document.querySelector('.whole-page').querySelector('contacts-panel');

        this.$chat.addEventListener('click', this._onClick.bind(this));
    }

    _onClick(event) {
        const chats = this.$parent.$container.querySelectorAll('chat-bubble');
        for (let i = 0; i < chats.length; i++) {
            if (Number(chats[i].$uid.innerText) === this.$parent.$activeChatUid) {
                chats[i].style.backgroundColor = '';
                chats[i].style.animation = '';
            }
        }
        this.$parent.$activeChatUid = Number(this.$uid.innerText);
        this.style.animation = 'slide 0.7s linear';
        this.style.backgroundColor = '#FF99FF';
        const panel = document.querySelector('message-form').$panel;
        panel.$name.innerText = this.$name.innerText;
        panel.$uid.innerText = Number(this.$uid.innerText);
        panel.$avatar.style.backgroundImage = this.$avatar.style.backgroundImage;
        const messageForm = document.querySelector('message-form');
        messageForm._historyInit(Number(this.$uid.innerText));
        document.querySelector('.whole-page').querySelector('contacts-panel').style.animation = 'disappear 1s, linear';
        document.querySelector('.whole-page').querySelector('message-form').$panel.$contactsHidden = true;


    }

}

customElements.define('chat-bubble', ChatBubble);
