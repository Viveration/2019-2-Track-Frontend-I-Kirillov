function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        }
        ;
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }
        ;
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value"in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        _setPrototypeOf(subClass, superClass);
}

function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class))
            return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class))
                return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    }
    ;
    return _wrapNativeSuper(Class);
}

function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
    if (Reflect.construct.sham)
        return false;
    if (typeof Proxy === "function")
        return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class)
                _setPrototypeOf(instance, Class.prototype);
            return instance;
        }
        ;
    }
    return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    }
    ;
    return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }
    ;
    return _getPrototypeOf(o);
}

var template = document.createElement('template');
template.innerHTML = "\n    <style>\n        :host {\n        display: block;\n        font-family: sans-serif;\n        }\n        .bubble {\n            color: #876ED7;\n            border: 1px solid black; \n            background-color: #3914AF; \n            padding: 10px;\n        }\n        .date {\n            background-color: #7109AA;\n            color: yellow;\n            border: 1px solid black; \n            padding: 10px;\n        }\n        .name {\n            background-color: #FFD300\n            color: black;\n            border: 1px solid black; \n            padding: 10px;\n        }\n    </style>\n\n    <message-bubble>\n        <div class = \"name\">DefaultName</div>\n        <div class = \"bubble\"></div>\n        <div class = \"date\"></div>\n    </message-bubble>\n";

var MessageBubble = /*#__PURE__*/
function(_HTMLElement) {
    _inherits(MessageBubble, _HTMLElement);

    function MessageBubble() {
        var _this;

        _classCallCheck(this, MessageBubble);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageBubble).call(this));
        _this._shadowRoot = _this.attachShadow({
            mode: 'open'
        });

        _this._shadowRoot.appendChild(template.content.cloneNode(true));

        _this.$text = _this._shadowRoot.querySelector('.bubble');
        _this.$date = _this._shadowRoot.querySelector('.date');
        _this.$name = _this._shadowRoot.querySelector('.name');
        return _this;
    }

    _createClass(MessageBubble, null, [{
        key: "observedAttributes",
        get: function get() {
            return ['value'];
        }
    }]);

    return MessageBubble;
}(_wrapNativeSuper(HTMLElement));

customElements.define('message-bubble', MessageBubble);
