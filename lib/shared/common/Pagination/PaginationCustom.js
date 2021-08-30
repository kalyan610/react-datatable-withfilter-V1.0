import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
var useStyles = makeStyles(function (theme) { return ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}); });
export function PaginationCustom(props) {
    var colSpan = props.colSpan, totalItems = props.totalItems, onPaginationUpdate = props.onPaginationUpdate, classNamePage = props.classNamePage;
    var _a = React.useState(0), page = _a[0], setPage = _a[1];
    var _b = React.useState(props.pageSize), rowsPerPage = _b[0], setRowsPerPage = _b[1];
    var classes = useStyles();
    React.useEffect(function () {
        onPaginationUpdate(page, rowsPerPage);
    }, [page, rowsPerPage]);
    var handlePageChange = function (event, newPage) {
        setPage(newPage);
    };
    return (React.createElement(Pagination, { count: Math.round(totalItems / rowsPerPage) - 1, page: page, className: classNamePage, showFirstButton: true, showLastButton: true, variant: "outlined", shape: "rounded", size: "small", onChange: handlePageChange }));
}
//# sourceMappingURL=PaginationCustom.js.map