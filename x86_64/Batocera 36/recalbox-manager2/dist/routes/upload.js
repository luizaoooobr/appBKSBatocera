'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _child_process = require('child_process');

var _utils = require('../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router(); // eslint-disable-line babel/new-cap

var storage = _multer2.default.diskStorage({
  destination: function destination(req, file, cb) {
    var dir = void 0;

    switch (req.body.type) {
      case 'bios':
        dir = _config2.default.get('recalbox.biosPath');
        break;
      case 'roms':
        dir = _path2.default.resolve(_config2.default.get('recalbox.romsPath'), req.body.system, req.body.path);
        break;
      case 'romImage':
        dir = _path2.default.resolve(_config2.default.get('recalbox.romsPath'), req.body.system, 'media/images');
        break;
    }

    if (_fs2.default.existsSync(dir)) {
      return cb(null, dir);
    }

    _fs2.default.mkdir(dir, function (err) {
      return cb(err, dir);
    });
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var uploadMulter = (0, _multer2.default)({ storage: storage });
var upload = uploadMulter.single('file');

router.post('/bios', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      return next(err);
    }

    // Everything went fine
    if (req.file && req.file.originalname) {
      try {
        var data = (0, _child_process.execSync)('grep -w "' + req.file.originalname + '" ' + _config2.default.recalbox.biosFilePath);
        var lineResult = (0, _utils.handleBiosLine)(data.toString());

        if (null !== lineResult) {
          lineResult.success = true;

          return res.json(lineResult);
        }
      } catch (e) {} // eslint-disable-line no-empty
    }

    res.json({ success: true });
  });
});

router.post('/roms', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      return next(err);
    }

    // Everything went fine
    if (req.file && req.file.originalname) {
      return res.json({
        success: true,
        gameData: {
          path: _path2.default.join(req.body.path, req.file.originalname),
          name: req.file.originalname,
          releasedate: {}
        }
      });
    }

    res.json({ success: true });
  });
});

router.post('/romImage', function (req, res, next) {
  upload(req, res, function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err) {
      var body, rawGameList, searchedPath, gameData, gameIndex, builder, xml;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!err) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', next(err));

            case 2:
              if (!(req.file && req.file.originalname)) {
                _context.next = 23;
                break;
              }

              body = req.body;
              _context.next = 6;
              return (0, _utils.getSystemGamelist)(body.system, true);

            case 6:
              rawGameList = _context.sent;
              searchedPath = './' + body.gamePath;
              gameData = { path: searchedPath };
              gameIndex = void 0;


              if (rawGameList.gameList.game) {
                if (!Array.isArray(rawGameList.gameList.game)) {
                  rawGameList.gameList.game = [rawGameList.gameList.game];
                }

                gameIndex = rawGameList.gameList.game.findIndex(function (x) {
                  return x.path === searchedPath;
                });
                gameData = -1 !== gameIndex ? rawGameList.gameList.game[gameIndex] : gameData;
              } else {
                rawGameList.gameList = { game: [] };
              }

              // Update game data
              gameData.image = './media/images/' + req.file.filename;

              // Save change
              if (undefined !== gameIndex) {
                // Replace existing entry
                rawGameList.gameList.game[gameIndex] = gameData;
              } else {
                // Add new entry
                rawGameList.gameList.game.push(gameData);
              }

              builder = new _xml2js2.default.Builder();
              xml = builder.buildObject(rawGameList);
              _context.prev = 15;

              _fs2.default.writeFileSync((0, _utils.getSystemGamelistPath)(body.system), xml);

              return _context.abrupt('return', res.json({
                success: true,
                image: _path2.default.join(body.system, 'media/images', req.file.filename)
              }));

            case 20:
              _context.prev = 20;
              _context.t0 = _context['catch'](15);
              throw new Error('Unable to update the ROM.');

            case 23:

              res.json({ success: true });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[15, 20]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

exports.default = router;