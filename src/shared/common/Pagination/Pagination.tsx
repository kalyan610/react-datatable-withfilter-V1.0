import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import * as React from 'react';

interface IPagination {
    colSpan: number;    
    totalItems: number;
    onPaginationUpdate: (pageNo: number, pageSize: number) => void;
    pageSize:number;
}
const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

export function Pagination(props: IPagination) {
    
    let { colSpan, totalItems, onPaginationUpdate } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(props.pageSize);

    
  
    React.useEffect(() => {
        onPaginationUpdate(page, rowsPerPage);
    }, [page, rowsPerPage]);

    const handlePageChange = (event, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 50));
        setPage(0);
    };
    function TablePaginationActions(props:any) {
        const classes = useStyles1();
        const theme = useTheme();
        const { count, page, rowsPerPage, onChangePage } = props;
      
        const handleFirstPageButtonClick = (event:any) => {
          onChangePage(event, 0);
        };
      
        const handleBackButtonClick = (event:any) => {
          onChangePage(event, page - 1);
        };
      
        const handleNextButtonClick = (event:any) => {
          onChangePage(event, page + 1);
        };
      
        const handleLastPageButtonClick = (event:any) => {
          onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };
      
        return (
          <div className={classes.root}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label="first page"
            >
              {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="next page"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="last page"
            >
              {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
          </div>
        );
      }
    
    return (
      <TablePagination
        rowsPerPageOptions={[props.pageSize]}
        colSpan={colSpan}
        count={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: false,
        }}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
        />
       
    );
}