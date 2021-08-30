import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as React from 'react';

interface IPagination {
    colSpan: number;    
    totalItems: number;
    onPaginationUpdate: (pageNo: number, pageSize: number) => void;
    pageSize:number;
    classNamePage:string;
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function PaginationCustom(props: IPagination) {
    
    let { colSpan, totalItems, onPaginationUpdate,classNamePage } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(props.pageSize);
    const classes = useStyles();
    
    React.useEffect(() => {
        onPaginationUpdate(page, rowsPerPage);
    }, [page, rowsPerPage]);

    const handlePageChange = (event, newPage: number) => {
        setPage(newPage);
    };
    
    return (
        <Pagination 
        count={Math.round(totalItems/rowsPerPage)-1}
        page={page}
        className={classNamePage}
        showFirstButton 
        showLastButton 
        variant="outlined" 
        shape="rounded"
        size ="small"
        onChange={handlePageChange}/>
     );
}