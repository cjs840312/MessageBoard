"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title;

  return "\n    <html>\n      <head>\n        <title>" + title + "</title>\n      </head>\n      \n      <body>\n        <div id=\"root\"></div>\n      </body>\n\n      <script src=\"./bundle.js\"></script>\n    </html>\n  ";
};