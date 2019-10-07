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
        .contacts {
            height: 40px;
            width: 40px;
        }
        .menuButton {
            height: 40px;
            width: 40px;
        }


        .fas{
            width: 40px;
            height: 40px;
            color: rgba(0, 0, 0, 0.87);
        }
    </style>
    <panel>
        <div class = "contacts">
            <i class="fas fa-align-justify"></i>
        </div>
        <div class = "menuButton">
            <i class="fas fa-cog"></i>
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
        this.$menuButton.addEventListener('click', this._onMenuClick.bind(this));
        this.$contacts.addEventListener('click', this._onContactsClick.bind(this));
    }

}

customElements.define('top-panel', TopPanel);