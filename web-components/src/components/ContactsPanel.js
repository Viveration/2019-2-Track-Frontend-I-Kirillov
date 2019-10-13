const template = document.createElement('template');
template.innerHTML = `
    <style>
        contacts {
            height: 100%;
            width: 100%;
            flex-flow: column nowrap:
            justify-content: flex-start;
            align-items: center;
        }
        .contactsHead {
            display: flex;
            background-color: #8E24AA;
            min-width: 150px;
            width: 100%;
            height: 50px;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
        }
        .logo {
            height: 30px;
            margin-left: 15px;
            margin-right: auto;
            width: 125px;
            overflow: hidden;
            color: #FFFFFF;
            white-space: nowrap;
            font-family: helvetica;
            text-align: center;
            font-size: 25px;
        }
        .searchButton {
            height: 40px;
            width: 40px;
            background-color: red;
        }

        .contactsContainer {
            display: flex;
            height: calc(100% - 50px);
            width: 100%;
            min-width: 150px;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
        }
        chat-bubble {
            width: 100%;
            border-bottom: 1px rgba(0, 0, 0, 0.5) solid;

        }
    </style>
        <contacts>
            <div class = "contactsHead">
                <div class="logo">Messenger</div>
                <div class="searchButton"></div>
                </div>
            <div class = "contactsContainer">
            </div>
        </contacts>
        
`;

class ContactsPanel extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$container = this._shadowRoot.querySelector('.contactsContainer');
        this.$head = this._shadowRoot.querySelector('.contactsHead');
        this.$button = this.$head.querySelector('.searchButton');
        this.$button.addEventListener('click', this._onClick.bind(this));

    }

    _onClick(event) {
        this.$head.appendChild('search-input');
        this.$search = this.$head.querySelector('search-input');
    }

    _addChatFromHistory(){

    }

}      

customElements.define('contacts-panel', ContactsPanel);
