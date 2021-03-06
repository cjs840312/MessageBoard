'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('./App.css');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
   _inherits(App, _Component);

   function App(props) {
      _classCallCheck(this, App);

      var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

      _this.state = { Message: [] };
      return _this;
   }

   _createClass(App, [{
      key: 'getMessage',
      value: function getMessage() {
         var _this2 = this;

         fetch('/message', {
            method: 'GET',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            } }).then(function (res) {
            return res.json();
         }).then(function (json) {
            _this2.setState({ "Message": json.Message });
         });
      }
   }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
         setInterval(this.getMessage.bind(this), 100);
      }
   }, {
      key: 'render',
      value: function render() {

         return _react2.default.createElement(
            'div',
            { className: 'App' },
            _react2.default.createElement(
               'h1',
               null,
               ' Message Board '
            ),
            _react2.default.createElement(WritePlace, null),
            this.state.Message.map(function (item, index) {
               return _react2.default.createElement(MessageBlock, { key: index, time: item.time, content: item.content });
            })
         );
      }
   }]);

   return App;
}(_react.Component);

;

var MessageBlock = function (_Component2) {
   _inherits(MessageBlock, _Component2);

   function MessageBlock(props) {
      _classCallCheck(this, MessageBlock);

      return _possibleConstructorReturn(this, (MessageBlock.__proto__ || Object.getPrototypeOf(MessageBlock)).call(this, props));
   }

   _createClass(MessageBlock, [{
      key: 'render',
      value: function render() {

         return _react2.default.createElement(
            'div',
            { className: _App2.default.MessageBlock },
            this.props.time,
            _react2.default.createElement('br', null),
            this.props.content
         );
      }
   }]);

   return MessageBlock;
}(_react.Component);

var WritePlace = function (_Component3) {
   _inherits(WritePlace, _Component3);

   function WritePlace(props) {
      _classCallCheck(this, WritePlace);

      var _this4 = _possibleConstructorReturn(this, (WritePlace.__proto__ || Object.getPrototypeOf(WritePlace)).call(this, props));

      _this4.state = { "content": "" };
      _this4.handleChange = _this4.handleChange.bind(_this4);
      _this4.handleClick = _this4.handleClick.bind(_this4);
      return _this4;
   }

   _createClass(WritePlace, [{
      key: 'handleChange',
      value: function handleChange(e) {
         this.setState({ "content": e.target.value });
      }
   }, {
      key: 'handleClick',
      value: function handleClick(e) {
         var d = new Date();
         fetch('/message', {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               "time": d.toString(),
               "content": this.state.content
            })
         });
      }
   }, {
      key: 'render',
      value: function render() {

         return _react2.default.createElement(
            'div',
            { className: _App2.default.WritePlace },
            _react2.default.createElement('textarea', { className: _App2.default.WriteAera, onChange: this.handleChange }),
            _react2.default.createElement(
               'button',
               { onClick: this.handleClick },
               'push'
            )
         );
      }
   }]);

   return WritePlace;
}(_react.Component);

exports.default = App;