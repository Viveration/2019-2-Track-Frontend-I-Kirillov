const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            background-color: rgba(240, 240, 240);
            height 25px;
            width: auto;
            outline: none;
            flex-grow: 1;
            rgba(142, 36, 170, 0.5);
        }
        @keyframes clickAnimation {
            0% {
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.16);
            }
            50% {
                box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.16);
            }
            99% {
                box-shadow: 0 0 0 5px rgba(0, 0, 0, 0)
            }
            100% {
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
        }
        .button {
            fill: currentColor;
            color: #8E24AA;
            align-items: center;
            height: 35px;
            width: 70px;
            margin-left: 10px;
            border-radius: 15px;
            font-size: 18px;
            position: relative

        }
        .button:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
        .button:active {
            background-color: #FF99FF;
        }
        .inp {
            flex-flow: row nowrap;
            display: flex;
            align-items: center;
            height: 40px;
            padding-left: 10px;
            padding-right: 10px;
            background-color: rgb(0, 0, 0, 0.08);
            border-radius: 5px;
        }
        .clicked {
            animation: clickAnimation 1s ease-in;
        }
    </style>
    <div class = inp>
        <input type="text">
        <div class = "button">
            <svg height="100%" viewBox="0 -66 511.99969 511" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g fill="#8E24AA"><path d="m50 190.507812c0-5.523437-4.476562-10-10-10h-30c-5.523438 0-10 4.476563-10 
                    10 0 5.523438 4.476562 10 10 10h30c5.523438 0 10-4.476562 10-10zm0 0"/><path d="m110.003906 
                    250.507812c0-5.519531-4.476562-10-10-10h-60.003906c-5.523438 0-10 4.480469-10 10 0 5.523438 4.476562 10.003907 
                    10 10.003907h60.003906c5.523438 0 10-4.480469 10-10.003907zm0 0"/><path d="m100.003906 140.503906c5.523438 0 
                    10-4.476562 10-10 0-5.519531-4.476562-10-10-10h-60.003906c-5.523438 0-10 4.480469-10 10 0 5.523438 4.476562 
                    10 10 10zm0 0"/><path d="m326.011719 190.507812c0 5.523438-4.476563 10-10 10-5.523438 0-10-4.476562-10-10 0-5.523437 
                    4.476562-10 10-10 5.523437 0 10 4.476563 10 10zm0 0"/><path d="m506.371094 
                    181.503906-372.011719-180.003906c-3.617187-1.753906-7.9375-1.167969-10.957031 1.488281-3.019532 2.65625-4.15625 
                    6.859375-2.886719 10.675781l41.222656 123.667969-67.28125 44.855469c-2.785156 1.855469-4.453125 4.976562-4.453125 
                    8.320312s1.667969 6.464844 4.453125 8.320313l67.28125 44.851563-41.222656 123.671874c-1.269531 3.8125-.132813 8.019532 
                    2.886719 10.675782 3.03125 2.664062 7.347656 3.234375 10.957031 1.488281l372.011719-180.003906c7.414062-3.59375 7.59375-14.332031 
                    0-18.007813zm-388.339844 9.003906 50.265625-33.507812 11.167969 33.507812-11.167969 33.507813zm79.183594 10h73.792968c5.523438 0 
                    10.003907-4.476562 10.003907-10 0-5.523437-4.480469-10-10.003907-10h-73.792968l-50.226563-150.679687 311.402344 
                    150.679687h-97.378906c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 10 10 10h97.378906l-311.402344 150.679688zm0 0"/>
                </g>
            </svg>
        </div>
    </div>
`;
class FormInput extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$input = this.shadowRoot.querySelector('input');
        this.$myButton = this._shadowRoot.querySelector('.button');
        this.$myButton.addEventListener('click', this._onClick.bind(this));
        this.$myButton.addEventListener('animationend', this._animationDel.bind(this));
    }
    _animationDel(event) {
        this.$myButton.classList.remove('clicked');
    }
    _onClick (event) {
        this.$myButton.dispatchEvent(new Event('onClick'));
        this.$myButton.classList.add('clicked');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        const result = this.$input.value;
        this.$input.value = '';
        return result;
    }
}

customElements.define('form-input', FormInput);
