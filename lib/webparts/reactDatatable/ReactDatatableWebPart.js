var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneToggle, } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'ReactDatatableWebPartStrings';
import ReactDatatable from './components/ReactDatatable';
import { sp } from '@pnp/sp';
import { SPService } from '../../shared/service/SPService';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';
import { PropertyFieldOrder } from '@pnp/spfx-property-controls/lib/PropertyFieldOrder';
var ReactDatatableWebPart = /** @class */ (function (_super) {
    __extends(ReactDatatableWebPart, _super);
    function ReactDatatableWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._services = null;
        _this.mapFieldsToObjects = function () {
            var _a = _this.properties, _b = _a.fields, fields = _b === void 0 ? [] : _b, _c = _a.fieldDetails, fieldDetails = _c === void 0 ? [] : _c;
            return fields.map(function (f) { return fieldDetails.find(function (fDetails) { return fDetails.key === f; }); });
        };
        _this.onChangeProperty = function (changeType, oldValue, newValue) {
            switch (changeType) {
                case "list":
                    _this.getSelectedListFields();
                    _this.properties.fields = [];
                    break;
                case "fieldOrder":
                    _this.properties.fields = newValue.map(function (n) { return n.key; });
                    break;
                default:
                    break;
            }
        };
        return _this;
    }
    ReactDatatableWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context
            });
            _this._services = new SPService(_this.context);
        });
    };
    ReactDatatableWebPart.prototype.getSelectedListFields = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allFields;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.properties.list) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._services.getFields(this.properties.list)];
                    case 1:
                        allFields = _a.sent();
                        this.properties.fieldDetails = allFields.map(function (field) { return ({ key: field.InternalName, text: field.Title, fieldType: field['odata.type'] }); });
                        this.context.propertyPane.refresh();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ReactDatatableWebPart.prototype.render = function () {
        this.getSelectedListFields();
        var element = React.createElement(ReactDatatable, {
            context: this.context,
            title: this.properties.title,
            list: this.properties.list,
            fieldDetails: this.properties.fieldDetails,
            fields: this.mapFieldsToObjects(),
            enableSorting: this.properties.enableSorting,
            enableSearching: this.properties.enableSearching,
            enablePagination: this.properties.enablePagination,
            searchBy: this.properties.searchBy,
            sortBy: this.properties.sortBy,
            enableDownloadAsCsv: this.properties.enableDownloadAsCsv,
            enableDownloadAsPdf: this.properties.enableDownloadAsPdf,
            displayMode: this.displayMode,
            oddRowColor: this.properties.oddRowColor,
            evenRowColor: this.properties.evenRowColor,
            fieldOrder: this.properties.fieldOrder,
            filterCondition: this.properties.filterCondition,
            onChangeProperty: this.onChangeProperty,
            pageSize: Number(this.properties.pageSize),
            enableMultiselectBtnOnLeft: this.properties.enableMultiselectBtnOnLeft
        });
        ReactDom.render(element, this.domElement);
    };
    ReactDatatableWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ReactDatatableWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ReactDatatableWebPart.prototype.getPropertyPaneConfiguration = function () {
        var isSearch = !this.properties.enableSearching;
        var isSort = !this.properties.enableSorting;
        this._selectedFields = this.mapFieldsToObjects();
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    displayGroupsAsAccordion: true,
                    groups: [
                        {
                            groupName: strings.ListConfigurationGroupName,
                            isCollapsed: false,
                            groupFields: [
                                PropertyPaneTextField('title', {
                                    label: strings.DataTableTitleFieldLabel
                                }),
                                PropertyFieldListPicker('list', {
                                    label: strings.ListPickerLabel,
                                    selectedList: this.properties.list,
                                    includeHidden: false,
                                    orderBy: PropertyFieldListPickerOrderBy.Title,
                                    disabled: false,
                                    baseTemplate: 100,
                                    onPropertyChange: this.onChangeProperty.bind(this),
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    key: 'listPickerFieldId',
                                }),
                                PropertyPaneTextField('filterCondition', {
                                    label: strings.DataTablefilterConditionFieldLabel
                                }),
                                PropertyFieldMultiSelect('fields', {
                                    key: 'fields',
                                    label: strings.MultiSelectFieldLabel,
                                    options: this.properties.fieldDetails,
                                    selectedKeys: this.properties.fields
                                }),
                                PropertyPaneTextField('pageSize', {
                                    label: strings.DataTablePageSizeFieldLabel
                                }),
                            ]
                        },
                        {
                            groupName: strings.SearchAndSortGroupName,
                            isCollapsed: false,
                            groupFields: [
                                PropertyPaneToggle('enableSorting', {
                                    label: strings.SortingToggleLabel,
                                    checked: true
                                }),
                                PropertyFieldMultiSelect('sortBy', {
                                    key: 'sortBy',
                                    label: strings.SortByLabel,
                                    disabled: isSort,
                                    options: this._selectedFields,
                                    selectedKeys: this.properties.sortBy
                                }),
                                PropertyPaneToggle('enableSearching', {
                                    label: strings.SearchingToggleLabel,
                                    checked: false
                                }),
                                PropertyFieldMultiSelect('searchBy', {
                                    key: 'searchBy',
                                    label: strings.SearchByLabel,
                                    disabled: isSearch,
                                    options: this._selectedFields,
                                    selectedKeys: this.properties.searchBy
                                }),
                            ]
                        },
                    ]
                },
                {
                    displayGroupsAsAccordion: true,
                    groups: [
                        {
                            groupName: strings.AdvancedFeaturesGroupName,
                            isCollapsed: false,
                            groupFields: [
                                PropertyPaneToggle('enableDownloadAsCsv', {
                                    label: strings.CSVToggleLabel,
                                    checked: false
                                }),
                                PropertyPaneToggle('enableDownloadAsPdf', {
                                    label: strings.PDFToggleLabel,
                                    checked: false
                                }),
                                PropertyPaneToggle('enablePagination', {
                                    label: strings.PaginationLabel,
                                    checked: false
                                }),
                                PropertyPaneToggle('enableMultiselectBtnOnLeft', {
                                    label: strings.ActionBtnOnLeftLabel,
                                    checked: false
                                }),
                                PropertyFieldOrder("fieldOrder", {
                                    key: "fieldOrder",
                                    label: strings.OrderListItemsLabel,
                                    items: this._selectedFields,
                                    textProperty: "text",
                                    properties: this.properties,
                                    onPropertyChange: this.onChangeProperty
                                }),
                                PropertyFieldColorPicker('evenRowColor', {
                                    label: strings.EvenRowColorLabel,
                                    selectedColor: this.properties.evenRowColor,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Full,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                                PropertyFieldColorPicker('oddRowColor', {
                                    label: strings.OddRowColorLabel,
                                    selectedColor: this.properties.oddRowColor,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Full,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                            ]
                        },
                    ]
                }
            ]
        };
    };
    return ReactDatatableWebPart;
}(BaseClientSideWebPart));
export default ReactDatatableWebPart;
//# sourceMappingURL=ReactDatatableWebPart.js.map