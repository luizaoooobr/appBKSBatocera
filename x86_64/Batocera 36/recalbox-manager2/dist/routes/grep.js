'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line babel/new-cap

router.get('/', function (req, res, next) {
  try {
    var keys = req.query.keys.replace(/\./g, '\\.');
    var data = (0, _child_process.execSync)('egrep -w "' + keys + '" ' + _config2.default.get('recalbox.confPath'));
    data = data.toString().trim().split('\n');
    var result = {};

    data.forEach(function (line) {
      var parts = line.split('=');
      var name = parts.shift();
      var disabled = void 0;

      if (';' === name[0]) {
        name = name.substring(1);
        disabled = true;
      } else {
        disabled = false;
      }

      result[name] = {
        value: parts.join('='),
        disabled: disabled
      };
    });

    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

exports.default = router;