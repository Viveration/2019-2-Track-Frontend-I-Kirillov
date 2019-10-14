const template = document.createElement('template');
template.innerHTML = `
    <style>
        contacts {
            height: 100%;
            width: 100%;
            min-width: 250px;
            flex-flow: column nowrap:
            justify-content: flex-start;
            align-items: center;
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

        .logo {
            min-width: 130px;
            font-weight: 700;
            height: 30px;
            margin-left: 2%;
            margin-right: auto;
            flex-basis: content;
            overflow: hidden;
            color: #FFFFFF;
            white-space: nowrap;
            font-family: helvetica;
            text-align: center;
            font-size: 25px;
        }

        .searchButton {
            height: 30px;
            width: 30px;
            margin-left: 5px;
            margin-right: 5px;
        }

        .contactsContainer {
            display: flex;
            height: calc(100% - 50px);
            width: 100%;
            min-width: 250px;
            flex-flow: column nowrap;
            overflow-y: auto;
            overflow-x: hidden;
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
        </contacts>
        
`;

class ContactsPanel extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$searchHidden = true;
        this.$container = this._shadowRoot.querySelector('.contactsContainer');
        this.$head = this._shadowRoot.querySelector('.contactsHead');
        this.$button = this.$head.querySelector('.searchButton');
        this.$button.addEventListener('click', this._onClick.bind(this));

    }

    _onClick(event) {
        if (this.$searchHidden === true) {
            let form = document.createElement('div');
            form.className = 'inputForm';
            let search = document.createElement('input');
            search.type = "text";
            search.plaseholder = "Поиск...";
            search.className = "searchInput";
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
