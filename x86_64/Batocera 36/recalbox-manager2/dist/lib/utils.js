'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSystemGamelist = exports.getEsSystems = exports.getRoms = undefined;

// Traitement des ROMs
var getRoms = exports.getRoms = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(system) {
    var subpath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var srcpath, esSystems, systemData, romExtensions;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            srcpath = _path2.default.join(_config2.default.get('recalbox.romsPath'), system, subpath);
            _context.next = 3;
            return getEsSystems();

          case 3:
            esSystems = _context.sent;
            systemData = esSystems.find(function (s) {
              return s.name === system;
            });
            romExtensions = systemData ? systemData.extensions : [];
            return _context.abrupt('return', _fs2.default.readdirSync(srcpath).filter(function (file) {
              return _fs2.default.statSync(_path2.default.join(srcpath, file)).isFile() && -1 !== romExtensions.indexOf(_path2.default.extname(file));
            }));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getRoms(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Promise xml2json


var xmlToJson = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
    var promise;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return new Promise(function (resolve, reject) {
              var parser = new _xml2js2.default.Parser({
                trim: true,
                explicitArray: false
              });

              parser.parseString(_fs2.default.readFileSync(file), function (jsError, jsResult) {
                if (jsError) {
                  reject(jsError);
                } else {
                  resolve(jsResult);
                }
              });
            });

          case 2:
            promise = _context2.sent;
            return _context2.abrupt('return', promise);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function xmlToJson(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

// Traitements des systèmes supportés par ES


var getEsSystems = exports.getEsSystems = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var json;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!esSystems) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt('return', esSystems);

          case 2:
            _context3.next = 4;
            return xmlToJson(_config2.default.get('recalbox.esSystemsCfgPath'));

          case 4:
            json = _context3.sent;

            esSystems = [];

            json.systemList.system.forEach(function (system) {
              esSystems.push({
                name: system.name,
                fullname: system.fullname,
                path: system.path,
                extensions: system.extension ? system.extension.split(' ') : [],
                launchCommand: system.command
              });
            });

            return _context3.abrupt('return', esSystems);

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getEsSystems() {
    return _ref3.apply(this, arguments);
  };
}();

// Traitement des fichiers gamelist.xml


var getSystemGamelist = exports.getSystemGamelist = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(system) {
    var raw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var gameListPath, json, list, gameList;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            gameListPath = getSystemGamelistPath(system);

            if (_fs2.default.existsSync(gameListPath)) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt('return', {});

          case 3:
            _context4.next = 5;
            return xmlToJson(gameListPath);

          case 5:
            json = _context4.sent;

            if (!raw) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt('return', json);

          case 8:
            list = {};
            gameList = json.gameList.game || [];


            if (!Array.isArray(gameList)) {
              gameList = [gameList];
            }

            gameList.forEach(function (game) {
              list[game.path.substring(2)] = game;
            });

            return _context4.abrupt('return', list);

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getSystemGamelist(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.uniqueID = uniqueID;
exports.handleBiosLine = handleBiosLine;
exports.parseGameReleaseDate = parseGameReleaseDate;
exports.getSystemRomsBasePath = getSystemRomsBasePath;
exports.getSystemGamelistPath = getSystemGamelistPath;

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _md5File = require('md5-file');

var _md5File2 = _interopRequireDefault(_md5File);

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function uniqueID() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }

  return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
}

// Traitement d'une ligne du fichier readme.txt des BIOS
var md5Rule = /^[a-f0-9]{32}$/i;
var biosPath = _config2.default.get('recalbox.biosPath');

function handleBiosLine(line) {
  var parts = line.split(' ');

  if (!parts[0].match(md5Rule)) {
    return null;
  }

  parts = parts.filter(Boolean);
  var md5 = parts.shift();
  var name = parts.join(' ').trim();
  var thisBiosPath = _path2.default.join(biosPath, name);

  return {
    md5: md5,
    name: name,
    valid: _fs2.default.existsSync(thisBiosPath) ? md5 === _md5File2.default.sync(thisBiosPath) : null
  };
}var esSystems = void 0;

function parseGameReleaseDate(releaseDate) {
  return {
    day: releaseDate.substring(6, 8),
    month: releaseDate.substring(4, 6),
    year: releaseDate.substring(0, 4)
  };
}

function getSystemRomsBasePath(system) {
  return _path2.default.join(_config2.default.get('recalbox.romsPath'), system);
}

function getSystemGamelistPath(system) {
  return _path2.default.join(getSystemRomsBasePath(system), 'gamelist.xml');
}