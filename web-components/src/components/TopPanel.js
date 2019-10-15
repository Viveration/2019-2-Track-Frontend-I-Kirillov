const template = document.createElement('template');
template.innerHTML = `
    <style>
        panel {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            width: 100%;
            min-width: 200px;
            background-color: #8E24AA;
        }
        .profileInformation {
            overflow: contactsHidden;
            margin-right: auto;
            align-items: flex-start;
            min-width: 100px;
            margin-left: 10px;
            width: 50%;
        }
        .profileName {
            width: 100%;
            overflow: contactsHidden;
            flex-basis: content;
            color: #FFFFFF;
            white-space: nowrap;
            font-family: helvetica;
            text-align: left;
            font-size: 20px;
            height: 60%;
        }
        .profileActivity {
            overflow: contactsHidden;
            white-space: nowrap;
            width: 100%;
            height: 40%;
            flex-basis: content;
            color: rgba(255, 255, 255, 0.5);
            font-family: helvetica;
            text-align: left;
            font-size: 12px;
            min-height: 15px;
        }
        .profileAvatar {
            background-color: white;
            background-repeat: no-repeat;
            margin-left: 20px;
            height: 46px;
            width: 46px;
            border-radius: 20px;
            background-image: url('src/0.png');
            background-size: cover;
        }
        .contacts {
            margin-left: 10px;
            height: 40px;
            width: 40px;
        }
        .menuButton {
            margin-right: 10px;
            height: 40px;
            width: 40px;
        }


    </style>
    <panel>
        <div class = "contacts">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 60.123 60.123" style="enable-background:new 0 0 60.123 60.123;" xml:space="preserve">
                <g fill="#FFFFFF">
                    <path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"/>
                    <path d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
                        C60.124,31.719,58.781,33.062,57.124,33.062z"/>
                    <path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"/>
                    <circle cx="4.029" cy="11.463" r="4.029"/>
                    <circle cx="4.029" cy="30.062" r="4.029"/>
                    <circle cx="4.029" cy="48.661" r="4.029"/>
                </g>
            </svg>

        </div>
        <div class = "profileAvatar"></div>
        <div class = "profileInformation">
            <div hidden class="uid">0</div>
            <div class = "profileName">Всеволод Истомин</div>
            <div class = "profileActivity">Был в сети 228 минут назад</div>
        </div>
        <div class = "menuButton">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g fill="#FFFFFF">
                <g>
                    <g>
                        <path d="M256,170.667c-47.063,0-85.333,38.281-85.333,85.333s38.271,85.333,85.333,85.333s85.333-38.281,85.333-85.333
                            S303.063,170.667,256,170.667z M256,320c-35.292,0-64-28.708-64-64s28.708-64,64-64s64,28.708,64,64S291.292,320,256,320z"/>
                        <path d="M418.583,213.656l-34.104-8.531c-0.542-1.354-1.083-2.688-1.646-4.021l18.083-30.125
                            c2.521-4.198,1.854-9.573-1.604-13.031l-45.271-45.26c-3.479-3.479-8.854-4.115-13.042-1.604l-30.104,18.083
                            c-1.333-0.563-2.667-1.104-4.021-1.635l-8.521-34.115c-1.188-4.75-5.458-8.083-10.354-8.083h-64
                            c-4.896,0-9.167,3.333-10.354,8.083l-8.521,34.115c-1.354,0.531-2.688,1.073-4.021,1.635L171,111.083
                            c-4.188-2.51-9.563-1.875-13.042,1.604l-45.271,45.26c-3.458,3.458-4.125,8.833-1.604,13.031l18.083,30.125
                            c-0.563,1.333-1.104,2.667-1.646,4.021l-34.104,8.531c-4.75,1.177-8.083,5.448-8.083,10.344v64c0,4.896,3.333,9.167,8.083,10.344
                            l34.104,8.531c0.542,1.354,1.083,2.688,1.646,4.021l-18.083,30.125c-2.521,4.198-1.854,9.573,1.604,13.031l45.271,45.25
                            c3.479,3.49,8.875,4.104,13.021,1.604l30.125-18.073c1.333,0.563,2.667,1.104,4.021,1.635l8.521,34.115
                            c1.188,4.75,5.458,8.083,10.354,8.083h64c4.896,0,9.167-3.333,10.354-8.083l8.521-34.115c1.354-0.531,2.688-1.073,4.021-1.635
                            l30.125,18.073c4.125,2.5,9.542,1.885,13.021-1.604l45.271-45.25c3.458-3.458,4.125-8.833,1.604-13.031l-18.083-30.125
                            c0.563-1.333,1.104-2.667,1.646-4.021l34.104-8.531c4.75-1.177,8.083-5.448,8.083-10.344v-64
                            C426.667,219.104,423.333,214.833,418.583,213.656z M405.333,279.667l-31.521,7.885c-3.5,0.865-6.313,3.458-7.5,6.865
                            c-1.479,4.302-3.146,8.469-5.104,12.51c-1.563,3.24-1.396,7.063,0.458,10.146l16.667,27.781l-33.479,33.479l-27.792-16.667
                            c-3.063-1.854-6.896-2.021-10.146-0.448c-4.042,1.958-8.208,3.604-12.521,5.104c-3.396,1.177-5.979,3.99-6.854,7.49
                            l-7.875,31.521h-47.333l-7.875-31.521c-0.875-3.5-3.458-6.313-6.854-7.49c-4.313-1.5-8.479-3.146-12.521-5.104
                            c-3.271-1.583-7.104-1.406-10.146,0.448l-27.792,16.667l-33.479-33.479l16.667-27.781c1.854-3.083,2.021-6.906,0.458-10.146
                            c-1.958-4.042-3.625-8.208-5.104-12.51c-1.188-3.406-4-6-7.5-6.865l-31.521-7.885v-47.333l31.521-7.885
                            c3.5-0.865,6.313-3.458,7.5-6.865c1.479-4.302,3.146-8.469,5.104-12.51c1.563-3.24,1.396-7.063-0.458-10.146l-16.667-27.781
                            l33.479-33.49l27.792,16.677c3.063,1.844,6.896,2.031,10.146,0.448c4.042-1.958,8.208-3.604,12.521-5.104
                            c3.396-1.177,5.979-3.99,6.854-7.49l7.875-31.521h47.333l7.875,31.521c0.875,3.5,3.458,6.313,6.854,7.49
                            c4.313,1.5,8.479,3.146,12.521,5.104c3.229,1.573,7.083,1.396,10.146-0.448l27.792-16.677l33.479,33.49l-16.667,27.781
                            c-1.854,3.083-2.021,6.906-0.458,10.146c1.958,4.042,3.625,8.208,5.104,12.51c1.188,3.406,4,6,7.5,6.865l31.521,7.885V279.667z"
                            />
                        <path d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
                            C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
                            z"/>
                    </g>
                </g>
            </g>

</svg>

        </div>
    </panel>
`;

class TopPanel extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$menuButton = this.shadowRoot.querySelector('.menuButton');
        this.$contacts = this._shadowRoot.querySelector('.contacts');
        this.$uid = this._shadowRoot.querySelector('.uid');
        // this.$menuButton.addEventListener('click', this._onMenuClick.bind(this));
        this.$contacts.addEventListener('click', this._onContactsClick.bind(this));
        this.$contactsHidden = true;
        this.$name = this._shadowRoot.querySelector('.profileName');
        this.$avatar = this._shadowRoot.querySelector('.profileAvatar');
    }
    _onContactsClick(event) {
        if (this.$contactsHidden === true) {
            this.$contactsHidden = false;
            const menuElement = document.querySelector('.contact');
            const contactMenu = document.createElement('contacts-panel');
            menuElement.appendChild(contactMenu);
            let nameArray = localStorage.getItem('nameArray');
            if (nameArray === null) {
                return;
            }
            if (nameArray === '') {
                return;
            }
            nameArray = JSON.parse(nameArray);
            let nameUid = [];
            let messages = [];
            let lastMessage = [];
            for (let i = 0; i < nameArray.length; i++) {
                nameUid = JSON.parse(nameArray[i]);
                const chatBubble = document.createElement('chat-bubble');
                chatBubble.$avatar.style.backgroundImage = 'url(src/' + nameUid[1] + '.png)';
                if (nameUid[0] === 'Name') {
                    chatBubble.$avatar.style.backgroundImage = 'url(src/default.png)';
                }
                chatBubble.$name.innerText = nameUid[0];
                if ((messages = localStorage.getItem(String(nameUid[1]))) !== null && messages !== '') {
                    messages = JSON.parse(messages);
                    lastMessage = messages[messages.length-1];
                    chatBubble.$text.innerText = JSON.parse(lastMessage)[1];
                    chatBubble.$date.innerText = JSON.parse(lastMessage)[0];
                } else {
                    chatBubble.$text.innerText = 'Сообщений нет!';
                    chatBubble.$date.innerText = '--:--';
                }
                
                chatBubble.$uid.innerText = nameUid[1];
                
                contactMenu.$container.appendChild(chatBubble);
            }
        } else {
            const menuElement = document.querySelector('.contact');
            menuElement.querySelector('contacts-panel').remove();
            this.$contactsHidden = true;
        }
    }
}

customElements.define('top-panel', TopPanel);