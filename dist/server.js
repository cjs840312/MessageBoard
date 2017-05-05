'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_bodyParser2.default.json());

var MESSAGES = { "Message": [] };

server.listen(3000, function () {
  console.log('listening on port 3000...');
});

server.get('/', function (req, res) {

  res.send((0, _view2.default)({
    title: 'Message Board'
  }));
});

server.get('/bundle.js', function (req, res) {
  res.sendFile(__dirname + "/bundle.js");
});

server.get('/message', function (req, res) {
  res.send(MESSAGES);
});

server.post('/message', function (req, res) {
  MESSAGES.Message = MESSAGES.Message.concat([{ "time": req.body.time, "content": req.body.content }]);
  console.log(MESSAGES);
});