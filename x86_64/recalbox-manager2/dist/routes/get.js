'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _child_process = require('child_process');

var _utils = require('../lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var osutils = require('../lib/osutils');

var router = _express2.default.Router(); // eslint-disable-line babel/new-cap

/* eslint-disable no-case-declarations */

router.get('/', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var option, params, queryParams, data, srcpath, directoryPath, excluded, contents, paramSystem, esSystems, systemData, system, subpath, roms, gamelist, list, seekableFields, currentTemp, maxTemp, currentPercent, total, free, used, ESPath, cmd, authConfigCheck, authConfigCheckFile, credentials, authCredentials, hashedCredentials, authConfig, authFile, _authCredentials;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            option = req.query.option;
            params = {};
            queryParams = req.query.params || '';


            queryParams.split(',').map(function (param) {
              var parts = param.split('=');

              params[[parts[0]]] = parts[1];
            });
            data = void 0;
            srcpath = void 0;
            _context.t0 = option;
            _context.next = _context.t0 === 'hostname' ? 10 : _context.t0 === 'directoryListing' ? 12 : _context.t0 === 'readFile' ? 18 : _context.t0 === 'biosList' ? 20 : _context.t0 === 'screenshotsList' ? 24 : _context.t0 === 'canTakeScreenshots' ? 27 : _context.t0 === 'systemFullname' ? 29 : _context.t0 === 'romsList' ? 36 : _context.t0 === 'esSystems' ? 49 : _context.t0 === 'temperature' ? 53 : _context.t0 === 'ram' ? 58 : _context.t0 === 'disks' ? 63 : _context.t0 === 'cpus' ? 65 : _context.t0 === 'ESStatus' ? 67 : _context.t0 === 'needAuth' ? 71 : _context.t0 === 'logout' ? 75 : _context.t0 === 'authConfig' ? 78 : 82;
            break;

          case 10:
            data = req.hostname;
            return _context.abrupt('break', 83);

          case 12:
            directoryPath = _path2.default.join(_config2.default.get('recalbox.romsPath'), params.subpath || '');
            excluded = _config2.default.get('recalbox.romsExcludedFolders');

            data = _fs2.default.readdirSync(directoryPath).filter(function (file) {
              return -1 === excluded.indexOf(file) && _fs2.default.statSync(_path2.default.join(directoryPath, file)).isDirectory();
            });

            // add favorites "virtual" folder
            if (params.addFavorites) {
              data.push('favorites');
            }

            data.sort();
            return _context.abrupt('break', 83);

          case 18:
            data = _fs2.default.readFileSync(params.file).toString();
            return _context.abrupt('break', 83);

          case 20:
            contents = _fs2.default.readFileSync(_config2.default.get('recalbox.biosFilePath'), 'utf8');

            data = [];

            contents.split("\n").forEach(function (line) {
              var lineResult = (0, _utils.handleBiosLine)(line);

              if (null !== lineResult) {
                data.push(lineResult);
              }
            });
            return _context.abrupt('break', 83);

          case 24:
            srcpath = _config2.default.get('recalbox.screenshotsPath');
            data = _fs2.default.readdirSync(srcpath).filter(function (file) {
              return _fs2.default.statSync(_path2.default.join(srcpath, file)).isFile() && '.png' === _path2.default.extname(file);
            });
            return _context.abrupt('break', 83);

          case 27:
            data = true;
            return _context.abrupt('break', 83);

          case 29:
            paramSystem = params.system;
            _context.next = 32;
            return (0, _utils.getEsSystems)();

          case 32:
            esSystems = _context.sent;
            systemData = esSystems.find(function (x) {
              return x.name === paramSystem;
            });

            data = systemData ? systemData.fullname : paramSystem;
            return _context.abrupt('break', 83);

          case 36:
            system = params.system;
            subpath = params.subpath || '';
            _context.next = 40;
            return (0, _utils.getRoms)(system, subpath);

          case 40:
            roms = _context.sent;
            _context.next = 43;
            return (0, _utils.getSystemGamelist)(system);

          case 43:
            gamelist = _context.sent;
            list = [];
            seekableFields = ['releasedate', 'name', 'image', 'desc', 'genre', 'developer', 'publisher', 'players', 'rating'];


            roms.forEach(function (romName) {
              var filepath = _path2.default.join(subpath, romName);
              var romData = {
                path: filepath,
                name: romName,
                releasedate: {}
              };

              if (gamelist[filepath]) {
                var gamelistData = gamelist[filepath];

                seekableFields.forEach(function (field) {
                  if (gamelistData[field]) {
                    var value = gamelistData[field];

                    if ('releasedate' === field) {
                      value = (0, _utils.parseGameReleaseDate)(value);
                    } else if ('image' === field) {
                      if (Array.isArray(value)) {
                        value = value[0];
                      }
                      value = _path2.default.join('/', system, value);
                    }

                    romData[field] = value;
                  }
                });
              }

              list.push(romData);
            });

            data = list;
            return _context.abrupt('break', 83);

          case 49:
            _context.next = 51;
            return (0, _utils.getEsSystems)();

          case 51:
            data = _context.sent;
            return _context.abrupt('break', 83);

          case 53:
            currentTemp = (0, _child_process.execSync)('cat /sys/class/thermal/thermal_zone0/temp 2> /dev/null || echo 0').toString() / 1000;
            maxTemp = 100;
            currentPercent = Math.floor(currentTemp * 100 / maxTemp);


            data = {
              current: Math.round(currentTemp, 2),
              current_percent: currentPercent,
              max: Math.round(maxTemp, 2),
              color: currentPercent > 70 ? 'orange' : currentPercent < 30 ? 'green' : ''
            };
            return _context.abrupt('break', 83);

          case 58:
            total = osutils.totalmem();
            free = osutils.freemem();
            used = total - free;


            data = {
              total: Math.round(total, 2),
              used: Math.round(used, 2),
              used_percent: Math.floor(used * 100 / total),
              free: Math.round(free, 2)
            };
            return _context.abrupt('break', 83);

          case 63:
            data = osutils.listHardDrive();
            return _context.abrupt('break', 83);

          case 65:
            data = osutils.listCPUs();
            return _context.abrupt('break', 83);

          case 67:
            ESPath = _config2.default.get('recalbox.emulationStationPath');
            cmd = ESPath + ' status | cut -d \' \' -f 3';

            data = 'running' === (0, _child_process.execSync)(cmd).toString().trim() ? 'OK' : 'KO';
            return _context.abrupt('break', 83);

          case 71:
            authConfigCheck = _config2.default.get('auth');
            authConfigCheckFile = '' + authConfigCheck.path + authConfigCheck.file;


            if (!_fs2.default.existsSync(authConfigCheckFile)) {
              data = false;
            } else {
              credentials = req.session.isAuthenticated;
              authCredentials = JSON.parse(_fs2.default.readFileSync(authConfigCheckFile).toString());
              hashedCredentials = _crypto2.default.createHash('sha256').update(authCredentials.login + '\n' + authCredentials.password, 'utf8').digest().toString();


              data = credentials !== hashedCredentials;
            }

            return _context.abrupt('break', 83);

          case 75:
            req.session = null;
            data = true;
            return _context.abrupt('break', 83);

          case 78:
            authConfig = _config2.default.get('auth');
            authFile = '' + authConfig.path + authConfig.file;


            if (!_fs2.default.existsSync(authFile)) {
              data = { needAuth: false };
            } else {
              _authCredentials = JSON.parse(_fs2.default.readFileSync(authFile).toString());


              data = {
                needAuth: 1,
                login: _authCredentials.login
              };
            }

            return _context.abrupt('break', 83);

          case 82:
            throw new Error('Option "' + option + '" unknown');

          case 83:

            res.json({ success: true, data: _defineProperty({}, option, data) });
            _context.next = 89;
            break;

          case 86:
            _context.prev = 86;
            _context.t1 = _context['catch'](0);

            next(_context.t1);

          case 89:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 86]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = router;