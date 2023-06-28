'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var deleteRom = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(payload) {
    var i, file, romPath, rawGameList, _loop, _i, _ret, builder, xml;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Delete ROM file
            for (i = 0; i <= payload.files.length; i++) {
              file = payload.files[i];
              romPath = _path2.default.resolve(_config2.default.get('recalbox.romsPath'), payload.system, file);


              _fs2.default.unlinkSync(romPath);
            }

            // Remove ROM data from gamelist.xml
            _context2.next = 3;
            return (0, _utils.getSystemGamelist)(payload.system, true);

          case 3:
            rawGameList = _context2.sent;

            _loop = function _loop(_i) {
              var file = payload.files[_i];
              var searchedPath = './' + file;
              var gameIndex = void 0;

              if (!rawGameList.gameList.game) {
                return 'continue';
              }

              if (!Array.isArray(rawGameList.gameList.game)) {
                rawGameList.gameList.game = [rawGameList.gameList.game];
              }

              gameIndex = rawGameList.gameList.game.findIndex(function (x) {
                return x.path === searchedPath;
              });

              if (-1 === gameIndex) {
                return 'continue';
              }

              // remove image
              _fs2.default.unlinkSync(_path2.default.resolve(_config2.default.get('recalbox.romsPath'), payload.system, rawGameList.gameList.game[gameIndex].image));

              // Remove entry
              delete rawGameList.gameList.game[gameIndex];
            };

            _i = 0;

          case 6:
            if (!(_i <= payload.files.length)) {
              _context2.next = 13;
              break;
            }

            _ret = _loop(_i);

            if (!(_ret === 'continue')) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt('continue', 10);

          case 10:
            _i++;
            _context2.next = 6;
            break;

          case 13:
            builder = new _xml2js2.default.Builder();
            xml = builder.buildObject(rawGameList);


            _fs2.default.writeFileSync((0, _utils.getSystemGamelistPath)(payload.system), xml);

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function deleteRom(_x4) {
    return _ref2.apply(this, arguments);
  };
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _child_process = require('child_process');

var _utils = require('../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router(); // eslint-disable-line babel/new-cap

/* eslint-disable no-case-declarations */

router.post('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var action, body, data, biosPath, raspi2png, screenshotName, screenPath, screenshotPath, esAction, rawGameList, basePath, searchedPath, gameData, gameIndex, year, month, day, builder, xml, _authConfig, _authFile, credentials, decodeScript, decodedPassword, needAuth, securityRest, authConfig, authFile, securityCredentials, encodeScript, content, system, file, host, port, dgram, message, client;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            action = req.query.action;
            body = req.body;
            data = void 0;
            _context.t0 = action;
            _context.next = _context.t0 === 'writeFile' ? 7 : _context.t0 === 'deleteBios' ? 9 : _context.t0 === 'takeScreenshot' ? 12 : _context.t0 === 'deleteScreenshot' ? 18 : _context.t0 === 'reboot-es' ? 21 : _context.t0 === 'shutdown-es' ? 21 : _context.t0 === 'start-es' ? 21 : _context.t0 === 'reboot-os' ? 33 : _context.t0 === 'shutdown-os' ? 35 : _context.t0 === 'deleteRom' ? 37 : _context.t0 === 'editRom' ? 39 : _context.t0 === 'login' ? 69 : _context.t0 === 'security' ? 84 : _context.t0 === 'launch-rom' ? 96 : 104;
            break;

          case 7:
            data = _fs2.default.writeFileSync(body.file, body.data);
            return _context.abrupt('break', 105);

          case 9:
            biosPath = _path2.default.resolve(_config2.default.get('recalbox.biosPath'), body.file);


            _fs2.default.unlinkSync(biosPath);
            return _context.abrupt('break', 105);

          case 12:
            raspi2png = _config2.default.get('recalbox.raspi2png');
            screenshotName = 'screenshot-' + new Date().toISOString().replace(/[:\.]/g, '-') + '.png';
            screenPath = raspi2png.savePath + '/' + screenshotName;


            if ('production' === req.app.get('env')) {
              (0, _child_process.execSync)(raspi2png.command + ' ' + screenPath);
            }

            data = screenshotName;
            return _context.abrupt('break', 105);

          case 18:
            screenshotPath = _path2.default.resolve(_config2.default.get('recalbox.screenshotsPath'), body.file);


            _fs2.default.unlinkSync(screenshotPath);
            return _context.abrupt('break', 105);

          case 21:
            esAction = void 0;
            _context.t1 = action;
            _context.next = _context.t1 === 'reboot-es' ? 25 : _context.t1 === 'shutdown-es' ? 27 : _context.t1 === 'start-es' ? 29 : 31;
            break;

          case 25:
            esAction = 'restart';
            return _context.abrupt('break', 31);

          case 27:
            esAction = 'stop';
            return _context.abrupt('break', 31);

          case 29:
            esAction = 'start';
            return _context.abrupt('break', 31);

          case 31:

            (0, _child_process.spawn)(_config2.default.get('recalbox.emulationStationPath'), [esAction], {
              stdio: 'ignore', // piping all stdio to /dev/null
              detached: true
            }).unref();
            return _context.abrupt('break', 105);

          case 33:
            // @todo Wait for reboot. The manager will be unreachable for a while.
            (0, _child_process.spawn)('reboot');
            return _context.abrupt('break', 105);

          case 35:
            // @todo What to do? The manager will become unreachable.
            (0, _child_process.spawn)('shutdown', ['-h', 'now']);
            return _context.abrupt('break', 105);

          case 37:
            deleteRom(body);

            return _context.abrupt('break', 105);

          case 39:
            _context.next = 41;
            return (0, _utils.getSystemGamelist)(body.system, true);

          case 41:
            rawGameList = _context.sent;
            basePath = body.gameData.path;
            searchedPath = './' + basePath;
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
            year = body.gameData.releasedate.year || '0000';
            month = body.gameData.releasedate.month || '00';
            day = body.gameData.releasedate.day || '00';


            delete body.gameData.releasedate;
            delete body.gameData.path;
            delete body.gameData.image;

            Object.assign(gameData, body.gameData);

            gameData.desc = (gameData.desc || '').replace(/(\r\n|\r)/gm, "\n");
            gameData.releasedate = year + month + day + 'T000000';

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
            _context.prev = 59;

            _fs2.default.writeFileSync((0, _utils.getSystemGamelistPath)(body.system), xml);

            gameData.path = basePath;
            data = gameData;
            _context.next = 68;
            break;

          case 65:
            _context.prev = 65;
            _context.t2 = _context['catch'](59);
            throw new Error('Unable to update the ROM "' + body.gameData.name + '".');

          case 68:
            return _context.abrupt('break', 105);

          case 69:
            _context.prev = 69;
            _authConfig = _config2.default.get('auth');
            _authFile = '' + _authConfig.path + _authConfig.file;
            credentials = JSON.parse(_fs2.default.readFileSync(_authFile).toString());
            decodeScript = _config2.default.get('recalbox.encodeScript');
            decodedPassword = (0, _child_process.execSync)(decodeScript + ' decode ' + credentials.password).toString().trim();

            if (!(credentials.login !== body.login || decodedPassword !== body.password)) {
              _context.next = 77;
              break;
            }

            throw new Error('Bad credentials.');

          case 77:

            setSessionCredentials(req, credentials);
            _context.next = 83;
            break;

          case 80:
            _context.prev = 80;
            _context.t3 = _context['catch'](69);
            throw new Error('Bad credentials.');

          case 83:
            return _context.abrupt('break', 105);

          case 84:
            needAuth = body.needAuth, securityRest = _objectWithoutProperties(body, ['needAuth']);
            authConfig = _config2.default.get('auth');
            authFile = '' + authConfig.path + authConfig.file;
            _context.prev = 87;

            if (!needAuth) {
              if (_fs2.default.existsSync(authFile)) {
                _fs2.default.unlinkSync(authFile);

                req.session = null;
              }
            } else {
              securityCredentials = _extends({}, securityRest);
              encodeScript = _config2.default.get('recalbox.encodeScript');


              securityCredentials.password = (0, _child_process.execSync)(encodeScript + ' encode ' + securityCredentials.password).toString().trim();

              content = JSON.stringify(securityCredentials);


              if (!_fs2.default.existsSync(authConfig.path)) {
                _fs2.default.mkdirSync(authConfig.path);
              }

              _fs2.default.writeFileSync(authFile, content);

              setSessionCredentials(req, securityCredentials);
            }
            _context.next = 95;
            break;

          case 91:
            _context.prev = 91;
            _context.t4 = _context['catch'](87);

            console.error(_context.t4);
            throw new Error('Error while saving security credentials.');

          case 95:
            return _context.abrupt('break', 105);

          case 96:
            system = body.system, file = body.file;
            host = _config2.default.get('recalbox.ip');
            port = _config2.default.get('recalbox.udpPort');
            dgram = require('dgram');
            message = new Buffer('START|' + system + '|' + file + '|');
            client = dgram.createSocket('udp4');


            client.send(message, 0, message.length, port, host, function (err) {
              if (err) {
                throw err;
              }

              client.close();
            });

            return _context.abrupt('break', 105);

          case 104:
            throw new Error('Action "' + action + '" unknown.');

          case 105:

            res.json({ success: true, data: data });
            _context.next = 111;
            break;

          case 108:
            _context.prev = 108;
            _context.t5 = _context['catch'](0);

            next(_context.t5);

          case 111:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 108], [59, 65], [69, 80], [87, 91]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

function setSessionCredentials(req, credentials) {
  var hashedCredentials = _crypto2.default.createHash('sha256').update(credentials.login + '\n' + credentials.password, 'utf8').digest().toString();

  req.session.isAuthenticated = hashedCredentials;
}

exports.default = router;