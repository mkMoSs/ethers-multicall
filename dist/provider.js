"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMulticallAddress = exports.Provider = void 0;
var call_1 = require("./call");
var calls_1 = require("./calls");
var Provider = /** @class */ (function () {
    function Provider(provider, chainId) {
        this._provider = provider;
        this._multicallAddress = getAddressForChainId(chainId);
    }
    Provider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Only required if `chainId` was not provided in constructor
                        _a = this;
                        return [4 /*yield*/, getAddress(this._provider)];
                    case 1:
                        // Only required if `chainId` was not provided in constructor
                        _a._multicallAddress = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.getEthBalance = function (address) {
        if (!this._provider) {
            throw new Error('Provider should be initialized before use.');
        }
        return calls_1.getEthBalance(address, this._multicallAddress);
    };
    Provider.prototype.all = function (calls) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._provider) {
                    throw new Error('Provider should be initialized before use.');
                }
                return [2 /*return*/, call_1.all(calls, this._multicallAddress, this._provider)];
            });
        });
    };
    return Provider;
}());
exports.Provider = Provider;
var multicallAddresses = {
    1: '0xcA11bde05977b3631167028862bE2a173976CA11',
    3: '0xcA11bde05977b3631167028862bE2a173976CA11',
    4: '0xcA11bde05977b3631167028862bE2a173976CA11',
    5: '0xcA11bde05977b3631167028862bE2a173976CA11',
    10: '0xcA11bde05977b3631167028862bE2a173976CA11',
    25: '0xcA11bde05977b3631167028862bE2a173976CA11',
    42: '0xcA11bde05977b3631167028862bE2a173976CA11',
    56: '0xcA11bde05977b3631167028862bE2a173976CA11',
    66: '0xcA11bde05977b3631167028862bE2a173976CA11',
    69: '0xcA11bde05977b3631167028862bE2a173976CA11',
    97: '0xcA11bde05977b3631167028862bE2a173976CA11',
    100: '0xcA11bde05977b3631167028862bE2a173976CA11',
    128: '0xcA11bde05977b3631167028862bE2a173976CA11',
    137: '0xcA11bde05977b3631167028862bE2a173976CA11',
    250: '0xcA11bde05977b3631167028862bE2a173976CA11',
    288: '0xcA11bde05977b3631167028862bE2a173976CA11',
    338: '0xcA11bde05977b3631167028862bE2a173976CA11',
    420: '0xcA11bde05977b3631167028862bE2a173976CA11',
    1088: '0xcA11bde05977b3631167028862bE2a173976CA11',
    1284: '0xcA11bde05977b3631167028862bE2a173976CA11',
    1285: '0xcA11bde05977b3631167028862bE2a173976CA11',
    1287: '0xcA11bde05977b3631167028862bE2a173976CA11',
    1337: '0xcA11bde05977b3631167028862bE2a173976CA11',
    4002: '0xcA11bde05977b3631167028862bE2a173976CA11',
    9000: '0xcA11bde05977b3631167028862bE2a173976CA11',
    9001: '0xcA11bde05977b3631167028862bE2a173976CA11',
    42161: '0xcA11bde05977b3631167028862bE2a173976CA11',
    42220: '0xcA11bde05977b3631167028862bE2a173976CA11',
    43113: '0xcA11bde05977b3631167028862bE2a173976CA11',
    43114: '0xcA11bde05977b3631167028862bE2a173976CA11',
    44787: '0xcA11bde05977b3631167028862bE2a173976CA11',
    80001: '0xcA11bde05977b3631167028862bE2a173976CA11',
    421613: '0xcA11bde05977b3631167028862bE2a173976CA11',
    1313161554: '0xcA11bde05977b3631167028862bE2a173976CA11',
};
function setMulticallAddress(chainId, address) {
    multicallAddresses[chainId] = address;
}
exports.setMulticallAddress = setMulticallAddress;
function getAddressForChainId(chainId) {
    return multicallAddresses[chainId];
}
function getAddress(provider) {
    return __awaiter(this, void 0, void 0, function () {
        var chainId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getNetwork()];
                case 1:
                    chainId = (_a.sent()).chainId;
                    return [2 /*return*/, getAddressForChainId(chainId)];
            }
        });
    });
}
