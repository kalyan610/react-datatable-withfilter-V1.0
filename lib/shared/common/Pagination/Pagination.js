import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import * as React from 'react';
var useStyles1 = makeStyles(function (theme) { return ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}); });
export function Pagination(props) {
    var colSpan = props.colSpan, totalItems = props.totalItems, onPaginationUpdate = props.onPaginationUpdate;
    var _a = React.useState(0), page = _a[0], setPage = _a[1];
    var _b = React.useState(props.pageSize), rowsPerPage = _b[0], setRowsPerPage = _b[1];
    React.useEffect(function () {
        onPaginationUpdate(page, rowsPerPage);
    }, [page, rowsPerPage]);
    var handlePageChange = function (event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function (event) {
        setRowsPerPage(parseInt(event.target.value, 50));
        setPage(0);
    };
    function TablePaginationActions(props) {
        var classes = useStyles1();
        var theme = useTheme();
        var count = props.count, page = props.page, rowsPerPage = props.rowsPerPage, onChangePage = props.onChangePage;
        var handleFirstPageButtonClick = function (event) {
            onChangePage(event, 0);
        };
        var handleBackButtonClick = function (event) {
            onChangePage(event, page - 1);
        };
        var handleNextButtonClick = function (event) {
            onChangePage(event, page + 1);
        };
        var handleLastPageButtonClick = function (event) {
            onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };
        return (React.createElement("div", { className: classes.root },
            React.createElement(IconButton, { onClick: handleFirstPageButtonClick, disabled: page === 0, "aria-label": "first page" }, theme.direction === 'rtl' ? React.createElement(LastPageIcon, null) : React.createElement(FirstPageIcon, null)),
            React.createElement(IconButton, { onClick: handleBackButtonClick, disabled: page === 0, "aria-label": "previous page" }, theme.direction === 'rtl' ? React.createElement(KeyboardArrowRight, null) : React.createElement(KeyboardArrowLeft, null)),
            React.createElement(IconButton, { onClick: handleNextButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1, "aria-label": "next page" }, theme.direction === 'rtl' ? React.createElement(KeyboardArrowLeft, null) : React.createElement(KeyboardArrowRight, null)),
            React.createElement(IconButton, { onClick: handleLastPageButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1, "aria-label": "last page" }, theme.direction === 'rtl' ? React.createElement(FirstPageIcon, null) : React.createElement(LastPageIcon, null))));
    }
    return (React.createElement(TablePagination, { rowsPerPageOptions: [props.pageSize], colSpan: colSpan, count: totalItems, rowsPerPage: rowsPerPage, page: page, SelectProps: {
            inputProps: { 'aria-label': 'rows per page' },
            native: false,
        }, onChangePage: handlePageChange, onChangeRowsPerPage: handleChangeRowsPerPage, ActionsComponent: TablePaginationActions }));
}
//# sourceMappingURL=Pagination.js.map