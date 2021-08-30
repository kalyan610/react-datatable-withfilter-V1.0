var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
import { sp } from '@pnp/sp/presets/all';
var SPService = /** @class */ (function () {
    function SPService(context) {
        this.context = context;
        sp.setup({
            spfxContext: this.context
        });
    }
    //call to get user Id
    SPService.prototype.getCurrentUserId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.currentUser.get().then(function (result) {
                                return result.Id;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SPService.prototype.getListItems = function (selectedList, selectedFields, selectedCondition) {
        return __awaiter(this, void 0, void 0, function () {
            var selectQuery, expandQuery, listItems, currectUserId, items, i, _a, _b, _c, err_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 10, , 11]);
                        selectQuery = ['Id'];
                        expandQuery = [];
                        listItems = [];
                        currectUserId = this.getCurrentUserId();
                        items = void 0;
                        for (i = 0; i < selectedFields.length; i++) {
                            switch (selectedFields[i].fieldType) {
                                case 'SP.FieldUser':
                                case 'SP.FieldLookup':
                                    selectQuery.push(selectedFields[i].key + "/Title");
                                    expandQuery.push(selectedFields[i].key);
                                    break;
                                case 'SP.Field':
                                    selectQuery.push('Attachments,AttachmentFiles');
                                    expandQuery.push('AttachmentFiles');
                                    break;
                                default:
                                    selectQuery.push(selectedFields[i].key);
                                    break;
                            }
                        }
                        if (!(selectedCondition != "" && selectedCondition != null)) return [3 /*break*/, 4];
                        if (!(selectedCondition.trim().indexOf("[ME]") > 0)) return [3 /*break*/, 2];
                        _b = (_a = selectedCondition).replace;
                        _c = [/\[ME\]/g];
                        return [4 /*yield*/, currectUserId];
                    case 1:
                        selectedCondition = _b.apply(_a, _c.concat([(_d.sent()).toString()]));
                        _d.label = 2;
                    case 2: return [4 /*yield*/, sp.web.lists.getById(selectedList).items
                            .filter(selectedCondition)
                            .select(selectQuery.join())
                            .expand(expandQuery.join())
                            .top(4999)
                            .getPaged()];
                    case 3:
                        items = _d.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, sp.web.lists.getById(selectedList).items
                            .select(selectQuery.join())
                            .expand(expandQuery.join())
                            .top(4999)
                            .getPaged()];
                    case 5:
                        items = _d.sent();
                        _d.label = 6;
                    case 6:
                        listItems = items.results;
                        _d.label = 7;
                    case 7:
                        if (!items.hasNext) return [3 /*break*/, 9];
                        return [4 /*yield*/, items.getNext()];
                    case 8:
                        items = _d.sent();
                        listItems = listItems.concat(items.results);
                        return [3 /*break*/, 7];
                    case 9: return [2 /*return*/, listItems];
                    case 10:
                        err_1 = _d.sent();
                        Promise.reject(err_1);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    SPService.prototype.getFields = function (selectedList) {
        return __awaiter(this, void 0, void 0, function () {
            var allFields, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.lists
                                .getById(selectedList)
                                .fields
                                .filter("Hidden eq false and ReadOnlyField eq false and Title ne 'Content Type' and Title ne 'Attachments'")
                                .get()];
                    case 1:
                        allFields = _a.sent();
                        return [2 /*return*/, allFields];
                    case 2:
                        err_2 = _a.sent();
                        Promise.reject(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return SPService;
}());
export { SPService };
//# sourceMappingURL=SPService.js.map