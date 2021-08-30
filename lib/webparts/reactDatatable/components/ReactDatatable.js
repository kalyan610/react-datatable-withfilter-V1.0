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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import styles from './ReactDatatable.module.scss';
import * as strings from 'ReactDatatableWebPartStrings';
import { SPService } from '../../../shared/service/SPService';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { DisplayMode } from '@microsoft/sp-core-library';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { Alert } from '@material-ui/lab';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import { Grid, InputAdornment, Link, TextField, Checkbox } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { withStyles, createStyles } from '@material-ui/core/styles';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { ExportListItemsToCSV } from '../../../shared/common/ExportListItemsToCSV/ExportListItemsToCSV';
import { ExportListItemsToPDF } from '../../../shared/common/ExportListItemsToPDF/ExportListItemsToPDF';
import { PaginationCustom } from '../../../shared/common/Pagination/PaginationCustom';
import { csvCellFormatter } from '../../../shared/common/ExportListItemsToCSV/ExportListItemsToCSVFormatter';
var StyledTableCell = withStyles(function (theme) {
    return createStyles({
        head: {
            backgroundColor: theme.palette.grey[200],
        },
        body: {
            fontSize: 14,
        },
    });
})(TableCell);
var ReactDatatable = /** @class */ (function (_super) {
    __extends(ReactDatatable, _super);
    function ReactDatatable(props) {
        var _this = _super.call(this, props) || this;
        _this._services = null;
        _this.paginateFn = function (filterItem) {
            var _a = _this.state, rowsPerPage = _a.rowsPerPage, page = _a.page;
            return (rowsPerPage > 0
                ? filterItem.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : filterItem);
        };
        _this.handleSorting = function (property) { return function (event) {
            var _a = _this.state, sortingFields = _a.sortingFields, sortDirection = _a.sortDirection;
            var isAsc = sortingFields === property && sortDirection === 'asc';
            _this.setState({ sortDirection: (isAsc ? 'desc' : 'asc'), sortingFields: property });
        }; };
        _this.selectAllItems = function (event) {
            var getAllItems = _this.state.listItems;
            var updatedItems = [];
            if (event.target.checked) {
                getAllItems.map(function (item) {
                    item.isItemSelected = true;
                    updatedItems.push(item);
                });
                _this.setState({ listItems: updatedItems, isAllSelected: true });
            }
            else {
                getAllItems.map(function (item) {
                    item.isItemSelected = false;
                    updatedItems.push(item);
                });
                _this.setState({ listItems: updatedItems, isAllSelected: false });
            }
            console.log(getAllItems);
        };
        _this.selectItem = function (itemVal, event) {
            var getAllItems = _this.state.listItems;
            var updatedItems = [];
            var isAllSelectedItems = true;
            getAllItems.map(function (item) {
                if (itemVal.id == item.id) {
                    item.isItemSelected = !item.isItemSelected;
                }
                updatedItems.push(item);
            });
            updatedItems.map(function (item) {
                if (item.isItemSelected == false) {
                    isAllSelectedItems = false;
                }
            });
            _this.setState({ listItems: updatedItems, isAllSelected: isAllSelectedItems });
        };
        _this.state = {
            listItems: [],
            columns: [],
            page: 1,
            rowsPerPage: Number(_this.props.pageSize),
            searchText: '',
            sortingFields: '',
            sortDirection: 'asc',
            contentType: '',
            isAllSelected: false
        };
        _this._services = new SPService(_this.props.context);
        _this._onConfigure = _this._onConfigure.bind(_this);
        _this.getSelectedListItems = _this.getSelectedListItems.bind(_this);
        return _this;
    }
    ReactDatatable.prototype.componentDidMount = function () {
        this.getSelectedListItems();
    };
    ReactDatatable.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.list !== this.props.list) {
            this.props.onChangeProperty("list");
        }
        else if (this.props.fields != prevProps.fields) {
            this.getSelectedListItems();
        }
    };
    ReactDatatable.prototype.getSelectedListItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fields, listItems, dataGridColumns;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fields = this.props.fields || [];
                        if (!fields.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._services.getListItems(this.props.list, fields, this.props.filterCondition)];
                    case 1:
                        listItems = _a.sent();
                        /** Format list items for data grid */
                        listItems = listItems && listItems.map(function (item) { return (__assign({ id: item.Id, isItemSelected: false }, fields.reduce(function (ob, f) {
                            ob[f.key] = item[f.key] ? _this.formatColumnValue(item[f.key], f.fieldType) : '-';
                            return ob;
                        }, {}))); });
                        dataGridColumns = fields.slice().map(function (f) { return ({ field: f.key, headerName: f.text }); });
                        this.setState({ listItems: listItems, columns: dataGridColumns });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ReactDatatable.prototype._onConfigure = function () {
        this.props.context.propertyPane.open();
    };
    ReactDatatable.prototype.formatColumnValue = function (value, type) {
        if (!value) {
            return value;
        }
        switch (type) {
            case 'SP.FieldDateTime':
                var strDate = value;
                var strDateParts = strDate.split("T")[0].split("-");
                var formatedDate = strDateParts[1] + "/" + strDateParts[2] + "/" + strDateParts[0];
                value = formatedDate;
                break;
            case 'SP.FieldMultiChoice':
                value = (value instanceof Array) ? value.join() : value;
                break;
            case 'SP.Taxonomy.TaxonomyField':
                value = value['Label'];
                break;
            case 'SP.FieldLookup':
                value = value['Title'];
                break;
            case 'SP.FieldUser':
                value = value['Title'];
                break;
            // case 'SP.FieldMultiLineText':
            //   value = <div dangerouslySetInnerHTML={{ __html: value }}></div>;
            //   break;
            case 'SP.FieldMultiLineText':
            case 'SP.FieldText':
                value = value;
                break;
            case 'SP.FieldText':
                value = value;
                break;
            case 'SP.FieldComputed':
                value = value;
                break;
            case 'SP.FieldUrl':
                value = React.createElement(Link, { href: value['Url'], target: "_blank" }, value['Description']);
                break;
            case 'SP.FieldLocation':
                value = JSON.parse(value).DisplayName;
                break;
            default:
                break;
        }
        return value;
    };
    ReactDatatable.prototype.exportDataFormatter = function (fields, listItems, cellFormatterFn) {
        return listItems && listItems.map(function (item) { return (__assign({}, fields.reduce(function (ob, f) {
            ob[f.text] = item[f.key] ? cellFormatterFn(item[f.key], f.fieldType) : '-';
            return ob;
        }, {}))); });
    };
    ReactDatatable.prototype.handlePaginationChange = function (pageNo, pageSize) {
        this.setState({ page: pageNo, rowsPerPage: pageSize });
    };
    ReactDatatable.prototype.handleSearch = function (event) {
        this.setState({ searchText: event.target.value });
    };
    ReactDatatable.prototype.filterListItems = function () {
        var _a = this.props, searchBy = _a.searchBy, enableSorting = _a.enableSorting;
        var _b = this.state, sortingFields = _b.sortingFields, listItems = _b.listItems, searchText = _b.searchText;
        if (searchText) {
            if (searchBy) {
                listItems = listItems && listItems.length && listItems.filter(function (l) { return searchBy.some(function (field) {
                    return (l[field] && l[field].toString().toLowerCase().includes(searchText.toLowerCase()));
                }); });
            }
        }
        if (enableSorting && sortingFields) {
            listItems = this.sortListItems(listItems);
        }
        return listItems;
    };
    ReactDatatable.prototype.sortListItems = function (listItems) {
        var _a = this.state, sortingFields = _a.sortingFields, sortDirection = _a.sortDirection;
        var isAsc = sortDirection === 'asc' ? 1 : -1;
        var sortFieldDetails = this.props.fields.filter(function (f) { return f.key === sortingFields; })[0];
        var sortFn;
        switch (sortFieldDetails.fieldType) {
            case 'SP.FieldDateTime':
                sortFn = function (a, b) { return ((new Date(a[sortingFields]).getTime() > new Date(b[sortingFields]).getTime()) ? 1 : -1) * isAsc; };
                break;
            default:
                sortFn = function (a, b) { return ((a[sortingFields] > b[sortingFields]) ? 1 : -1) * isAsc; };
                break;
        }
        listItems.sort(sortFn);
        return listItems;
    };
    ReactDatatable.prototype.render = function () {
        var _this = this;
        var filteredItems = this.filterListItems();
        var _a = this.props, list = _a.list, fields = _a.fields, enableDownloadAsCsv = _a.enableDownloadAsCsv, enableDownloadAsPdf = _a.enableDownloadAsPdf, enablePagination = _a.enablePagination, displayMode = _a.displayMode, enableSearching = _a.enableSearching, title = _a.title, evenRowColor = _a.evenRowColor, oddRowColor = _a.oddRowColor, sortBy = _a.sortBy, enableMultiselectBtnOnLeft = _a.enableMultiselectBtnOnLeft;
        var _b = this.state, sortingFields = _b.sortingFields, sortDirection = _b.sortDirection, columns = _b.columns, listItems = _b.listItems, isAllSelected = _b.isAllSelected;
        filteredItems = enablePagination ? this.paginateFn(filteredItems) : filteredItems;
        return (React.createElement("div", { className: styles.reactDatatable }, this.props.list == "" || this.props.list == undefined ?
            React.createElement(Placeholder, { iconName: 'Edit', iconText: 'Configure your web part', description: strings.ConfigureWebpartDescription, buttonLabel: strings.ConfigureWebpartButtonLabel, hideButton: displayMode === DisplayMode.Read, onConfigure: this._onConfigure }) : React.createElement(React.Fragment, null,
            React.createElement(WebPartTitle, { title: title, displayMode: DisplayMode.Read, updateProperty: function () { } }),
            list && fields && fields.length ?
                React.createElement("div", null,
                    React.createElement(Grid, { container: true, className: styles.dataTableUtilities },
                        React.createElement(Grid, { item: true, xs: 6, className: styles.downloadButtons },
                            enableDownloadAsCsv
                                ? React.createElement(ExportListItemsToCSV, { columnHeader: columns.map(function (c) { return c.headerName; }), listName: list, description: title, dataSource: function () { return _this.exportDataFormatter(fields, filteredItems, csvCellFormatter); } }) : React.createElement(React.Fragment, null),
                            enableDownloadAsPdf
                                ? React.createElement(ExportListItemsToPDF, { listName: list, htmlElementForPDF: '#dataTable' })
                                : React.createElement(React.Fragment, null)),
                        React.createElement(Grid, { container: true, justify: 'flex-end', xs: 6 }, enableSearching ?
                            React.createElement(TextField, { onChange: this.handleSearch.bind(this), size: "small", label: "Search", variant: "outlined", InputProps: {
                                    endAdornment: (React.createElement(InputAdornment, { position: "end" },
                                        React.createElement(SearchIcon, null))),
                                } })
                            : React.createElement(React.Fragment, null))),
                    React.createElement("div", { id: "generateTable" },
                        React.createElement(TableContainer, { component: Paper },
                            React.createElement(Table, { "aria-label": "customized table", id: "dataTable" },
                                React.createElement(TableHead, null,
                                    React.createElement(TableRow, null,
                                        enableMultiselectBtnOnLeft &&
                                            React.createElement(StyledTableCell, null,
                                                React.createElement(Checkbox, { inputProps: { 'aria-label': 'uncontrolled-checkbox' }, checked: isAllSelected, onClick: this.selectAllItems })),
                                        columns.map(function (c) { return (React.createElement(StyledTableCell, { key: c.headerName }, (sortBy && sortBy.indexOf(c.field) !== -1)
                                            ? React.createElement(TableSortLabel, { active: sortingFields === c.field, direction: sortingFields === c.field ? sortDirection : 'asc', onClick: _this.handleSorting(c.field) }, c.headerName)
                                            : c.headerName)); }))),
                                React.createElement(TableBody, null, filteredItems.map(function (row, index) { return (React.createElement(TableRow, { style: { backgroundColor: ((index + 1) % 2 === 0) ? evenRowColor : oddRowColor } },
                                    enableMultiselectBtnOnLeft &&
                                        React.createElement(StyledTableCell, null,
                                            React.createElement(Checkbox, { inputProps: { 'aria-label': 'uncontrolled-checkbox' }, checked: row.isItemSelected, onClick: _this.selectItem.bind(_this, row) })),
                                    columns.map(function (c) { return (React.createElement(StyledTableCell, null,
                                        row[c.field],
                                        " ")); }))); })),
                                enablePagination ?
                                    React.createElement(React.Fragment, null,
                                        React.createElement(TableFooter, null,
                                            React.createElement(TableRow, null,
                                                enableMultiselectBtnOnLeft && React.createElement(StyledTableCell, { colSpan: columns.length + 1 },
                                                    React.createElement(PaginationCustom, { colSpan: columns.length, classNamePage: styles.muiPagination, onPaginationUpdate: this.handlePaginationChange.bind(this), totalItems: listItems.length, pageSize: this.props.pageSize })),
                                                !enableMultiselectBtnOnLeft && React.createElement(StyledTableCell, { colSpan: columns.length },
                                                    React.createElement(PaginationCustom, { colSpan: columns.length, classNamePage: styles.muiPagination, onPaginationUpdate: this.handlePaginationChange.bind(this), totalItems: listItems.length, pageSize: this.props.pageSize }))))) : React.createElement(React.Fragment, null))))) : React.createElement(Alert, { severity: "info" }, strings.ListFieldValidation))));
    };
    return ReactDatatable;
}(React.Component));
export default ReactDatatable;
//# sourceMappingURL=ReactDatatable.js.map