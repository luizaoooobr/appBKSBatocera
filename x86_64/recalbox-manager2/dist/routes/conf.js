'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line babel/new-cap

router.get('/', function (req, res, next) {
  try {
    var result = {};

    req.query.keys.split(',').forEach(function (key) {
      result[key] = _config2.default.get(key);
    });

    res.json(result);
  } catch (err) {
    next(err);
  }
});

exports.default = router;