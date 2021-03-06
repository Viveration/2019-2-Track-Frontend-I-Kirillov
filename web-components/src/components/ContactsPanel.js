const template = document.createElement('template');
template.innerHTML = `
    <style>
        @keyframes show {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        contacts {
            display: flex;
            overflow: hidden;
            flex-flow: column nowrap;
            min-height: 100%;
            width: 100%;
            position: relative;
            min-width: 250px;
            flex-flow: column nowrap:
            justify-content: flex-start;
            align-items: center;
            animation: showC 0.5s ease-in;
        }
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(255, 153, 255, 0.5);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(255, 153, 255, 0.5);
            }
            100% {
                box-shadow: 0 0 0 10px rgba(255, 151, 255, 0);
            }
        }
        .inputForm {
            display: flex;
            min-width: 60px;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            height: 30px;
            width: 40%;
            margin-left: auto;
            background-color: #FF99FF;
            border-radius: 5px;
        }

        .searchInput {
            height 25px;
            width: 90%;
            outline: none;
        }

        .contactsHead {
            display: flex;
            background-color: #8E24AA;
            width: 100%;
            min-width: 250px;
            height: 50px;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
        }
        @keyframes headSlide {
            from {
                margin-bottom: 100%
            }
            to {
                margin-bottom: 0px;
            }
        }
        .logo {
            min-width: 130px;
            font-weight: 700;
            height: 30px;
            margin-left: 80px;
            margin-right: auto;
            flex-basis: content;
            overflow: hidden;
            color: #FFFFFF;
            white-space: nowrap;
            font-family: helvetica;
            text-align: center;
            font-size: 25px;
            animation: headSlide 0.5s ease-out;
        }

        .searchButton {
            height: 30px;
            width: 30px;
            padding: 10px;
            min-width: 30px;
            animation: headSlide 0.5s ease-out;
        }
        .searchButton:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
        .searchButton:active {
            background-color: #990099;
        }

        .contactsContainer {
            position: relative;
            display: flex;
            height: calc(100% - 50px);
            width: 100%;
            min-width: 250px;
            flex-flow: column nowrap;
            overflow-y: auto;
            overflow-x: hidden;
            align-items: flex-start;
            animation: showC 0.5s ease-out;
        }
        @keyframes showC {
            from {
                margin-bottom: 200%;
            }
            to {
                margin-bottom: 0px;
            }
        }
        chat-bubble {
            width: 100%;
            border-bottom: 1px rgba(0, 0, 0, 0.5) solid;

        }
        .createChat {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 3;
            bottom: 5px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background-color: #FF99FF;
        }
        .pulse {
            animation: pulse 1s linear;
        }
        .show {
            animation: show 0.5s linear;
        }
    </style>
        <contacts>
            <div class = "contactsHead">
                <div class="logo">Messenger</div>
                <div class="searchButton">
                    <?xml version="1.0"?>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
                        viewBox="0 0 512 512" enable-background="new 0 0 512 512" width="30px" height="30px" class="">
                        <g><g>
                            <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   
                                S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   
                                C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" 
                                data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"/>
                        </g></g>
                    </svg>
                </div>
            </div>
            <div class = "contactsContainer">
            </div>
            <div class = "createChat">
                <?xml version="1.0"?>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" 
                    x="0px" y="0px" width="40px" height="40px" viewBox="0 0 35.738 35.738" 
                    style="enable-background:new 0 0 35.738 35.738; position: center;" xml:space="preserve">
                    <g><g>
                        <path d="M0,35.667c0,0,11.596-37.07,35.738-35.55c0,0-2.994,4.849-10.551,6.416c0,0,3.518,0.429,6.369-0.522   
                            c0,0-1.711,5.515-11.025,6.273c0,0,5.133,1.331,7.414,0.57c0,0-0.619,4.111-10.102,6.154c-0.562,0.12-4.347,1.067-1.306,1.448   
                            c0,0,4.371,0.763,5.514,0.381c0,0-3.744,5.607-12.928,5.132c-0.903-0.047-1.332,0-1.332,0L0,35.667z" 
                            data-original="#000000" class="active-path" data-old_color="#000000" fill="#D60BDD"/>
                    </g></g> 
                    </svg>
            </div>
        </contacts>
        
`;

class ContactsPanel extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$searchHidden = true;
        this.$activeChatUid = null;
        this.$container = this._shadowRoot.querySelector('.contactsContainer');
        this.$head = this._shadowRoot.querySelector('.contactsHead');
        this.$button = this.$head.querySelector('.searchButton');
        this.$button.addEventListener('click', this._onClick.bind(this));
        this.$createButton = this._shadowRoot.querySelector('.createChat');
        this.$createButton.addEventListener('click', this._createChat.bind(this));
        this.$createButton.addEventListener('animationend', this._animationDel.bind(this));

    }
    _animationDel(event) {
        this.$createButton.classList.remove('pulse');
    }
    _createChat(event) {
        const button = this.$createButton;
        this.$createButton.classList.add('pulse');
        const name = 'Name';
        let uid = null;
        if ((nameArray = localStorage.getItem('nameArray')) == null) {
            localStorage.setItem('nameArray', '');
            nameArray = [];
            uid = 0;
            nameUid = [name, uid];
            nameArray.push(JSON.stringify(nameUid));
        } else {
            if (nameArray !== '') {
                nameArray = JSON.parse(nameArray);
                uid = nameArray.length;
                nameUid = [name, uid];
                nameArray.push(JSON.stringify(nameUid));
            } else {
                nameArray = [];
                uid = 0;
                nameUid = [name, uid];
                nameArray.push(JSON.stringify(nameUid));
            }
        }
        localStorage.setItem('nameArray', JSON.stringify(nameArray));
        const chatBubble = document.createElement('chat-bubble');
        chatBubble.$avatar.style.backgroundImage = 'url(src/default.svg)';
        chatBubble.$name.innerText = name;
        chatBubble.$uid.innerText = uid;
        chatBubble.$text.innerText = '';
        chatBubble.$date.innerText = '--:--';
        this.$container.appendChild(chatBubble);
        chatBubble.classList.add('show');
    }
    _onClick(event) {
        if (this.$searchHidden === true) {
            const form = document.createElement('div');
            form.className = 'inputForm';
            const search = document.createElement('input');
            search.type = 'text';
            form.classList.add('show');
            search.placeholder = 'Поиск...';
            search.className = 'searchInput';
            this.$head.insertBefore(form, this.$button);
            this.$head.querySelector('.inputForm').appendChild(search);
            this.$searchHidden = false;
        } else {
            this.$head.querySelector('.inputForm').remove();
            this.$searchHidden = true;
        }
    }

}      
customElements.define('contacts-panel', ContactsPanel);
