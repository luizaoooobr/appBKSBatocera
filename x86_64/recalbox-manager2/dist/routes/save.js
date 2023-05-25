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

router.post('/', function (req, res, next) {
  try {
    var values = {};

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(req.body)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _key = _step.value;

        var value = req.body[_key];

        if (typeof value === "boolean") {
          value = value ? 1 : 0;
        }

        if ("" === value) {
          continue;
        }

        values[_key] = value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    for (var key in values) {
      (0, _child_process.execSync)(_config2.default.get('recalbox.systemSettingsCommand') + ' -command save -key ' + key + ' -value \'' + values[key] + '\'');
    }

    if (undefined !== values['audio.volume'] && 'production' === req.app.get('env')) {
      // Set volume
      (0, _child_process.exec)(_config2.default.get('recalbox.configScript') + ' volume ' + values['audio.volume'], function (error) {
        if (error) {
          console.error('exec error: ' + error);
        }
      });
    }

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

exports.default = router;