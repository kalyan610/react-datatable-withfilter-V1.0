import * as React from 'react';
import styles from './ReactDatatable.module.scss';
import { IReactDatatableProps } from './IReactDatatableProps';
import { IReactDatatableState } from './IReactDatatableState';
import * as strings from 'ReactDatatableWebPartStrings';
import { SPService } from '../../../shared/service/SPService';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { DisplayMode } from '@microsoft/sp-core-library';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { Alert, AlertTitle } from '@material-ui/lab';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import { Grid, InputAdornment, Link, TextField,Checkbox } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { ExportListItemsToCSV } from '../../../shared/common/ExportListItemsToCSV/ExportListItemsToCSV';
import { ExportListItemsToPDF } from '../../../shared/common/ExportListItemsToPDF/ExportListItemsToPDF';
import { PaginationCustom } from '../../../shared/common/Pagination/PaginationCustom';
import { IPropertyPaneDropdownOption } from '@microsoft/sp-property-pane';
import { csvCellFormatter } from '../../../shared/common/ExportListItemsToCSV/ExportListItemsToCSVFormatter';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.grey[200],
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

export default class ReactDatatable extends React.Component<IReactDatatableProps, IReactDatatableState> {

  private _services: SPService = null;

  constructor(props: IReactDatatableProps) {
    super(props);
    this.state = {
      listItems: [],
      columns: [],
      page: 1,
      rowsPerPage: Number(this.props.pageSize),
      searchText: '',
      sortingFields: '',
      sortDirection: 'asc',
      contentType: '',
      isAllSelected:false
    };
    this._services = new SPService(this.props.context);
    this._onConfigure = this._onConfigure.bind(this);
    this.getSelectedListItems = this.getSelectedListItems.bind(this);
  }

  public componentDidMount() {
    this.getSelectedListItems();
  }

  public componentDidUpdate(prevProps: IReactDatatableProps) {
    if (prevProps.list !== this.props.list) {
      this.props.onChangeProperty("list");
    }
    else if (this.props.fields != prevProps.fields) {
      this.getSelectedListItems();
    }
  }

  public async getSelectedListItems() {
    let fields = this.props.fields || [];
    if (fields.length) {
      let listItems = await this._services.getListItems(this.props.list, fields,this.props.filterCondition);
      /** Format list items for data grid */
      listItems = listItems && listItems.map(item => ({
        id: item.Id,isItemSelected: false, ...fields.reduce((ob, f) => {
          ob[f.key] = item[f.key] ? this.formatColumnValue(item[f.key], f.fieldType) : '-';
          return ob;
        }, {})
      }));
      let dataGridColumns = [...fields].map(f => ({ field: f.key as string, headerName: f.text }));
      this.setState({ listItems: listItems, columns: dataGridColumns });
    }
  }

  private _onConfigure() {
    this.props.context.propertyPane.open();
  }

  public formatColumnValue(value: any, type: string) {
    if (!value) {
      return value;
    }
    switch (type) {
      case 'SP.FieldDateTime':
        var strDate = value;
        var strDateParts = strDate.split("T")[0].split("-");
        var formatedDate = strDateParts[1]+"/"+strDateParts[2]+"/"+strDateParts[0];
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
        value = <Link href={value['Url']} target="_blank">{value['Description']}</Link>;
        break;
      case 'SP.FieldLocation':
        value = JSON.parse(value).DisplayName;
        break;
      default:
        break;
    }
    return value;
  }

  private exportDataFormatter(fields: Array<IPropertyPaneDropdownOption & { fieldType: string }>, listItems: any[], cellFormatterFn: (value: any, type: string) => any) {
    return listItems && listItems.map(item => ({
      ...fields.reduce((ob, f) => {
        ob[f.text] = item[f.key] ? cellFormatterFn(item[f.key], f.fieldType) : '-';
        return ob;
      }, {})
    }));
  }

  private handlePaginationChange(pageNo: number, pageSize: number) {
    this.setState({ page: pageNo, rowsPerPage: pageSize });
  }

  public handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchText: event.target.value });
  }

  public filterListItems() {
    let { searchBy, enableSorting } = this.props;
    let { sortingFields, listItems, searchText } = this.state;
    if (searchText) {
      if (searchBy) {
        listItems = listItems && listItems.length && listItems.filter(l => searchBy.some(field => {
          return (l[field] && l[field].toString().toLowerCase().includes(searchText.toLowerCase()));
        }));
      }
    }
    if (enableSorting && sortingFields) {
      listItems = this.sortListItems(listItems);
    }
    return listItems;
  }

  private sortListItems(listItems: any[]) {
    const { sortingFields, sortDirection } = this.state;
    const isAsc = sortDirection === 'asc' ? 1 : -1;
    let sortFieldDetails = this.props.fields.filter(f => f.key === sortingFields)[0];
    let sortFn: (a, b) => number;
    switch (sortFieldDetails.fieldType) {
      case 'SP.FieldDateTime':
        sortFn = (a, b) => ((new Date(a[sortingFields]).getTime() > new Date(b[sortingFields]).getTime()) ? 1 : -1) * isAsc;
        break;
      default:
        sortFn = (a, b) => ((a[sortingFields] > b[sortingFields]) ? 1 : -1) * isAsc;
        break;
    }
    listItems.sort(sortFn);
    return listItems;
  }

  private paginateFn = (filterItem: any[]) => {
    let { rowsPerPage, page } = this.state;
    return (rowsPerPage > 0
      ? filterItem.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : filterItem
    );
  }

  private handleSorting = (property: string) => (event: React.MouseEvent<unknown>) => {
    let { sortingFields, sortDirection } = this.state;
    const isAsc = sortingFields === property && sortDirection === 'asc';
    this.setState({ sortDirection: (isAsc ? 'desc' : 'asc'), sortingFields: property });
  }
  
  private selectAllItems = (event:any) => {
    var getAllItems = this.state.listItems;
    var updatedItems = [];
    if(event.target.checked)
    {
      getAllItems.map(item => {
        item.isItemSelected = true;
        updatedItems.push(item);
      });
      this.setState({listItems:updatedItems,isAllSelected:true});
    }else{
      getAllItems.map(item => {
        item.isItemSelected = false;
        updatedItems.push(item);
      });
      this.setState({listItems:updatedItems,isAllSelected:false});
    }
    console.log(getAllItems);
  }

  private selectItem = (itemVal:any,event:any) => {
    var getAllItems = this.state.listItems;
    var updatedItems = [];
    var isAllSelectedItems= true;
      getAllItems.map(item => {
        if(itemVal.id == item.id)
        {
          item.isItemSelected = !item.isItemSelected;
        }
        updatedItems.push(item);
      });
      updatedItems.map(item => {
        if(item.isItemSelected == false)
        {
          isAllSelectedItems = false;
        }
      });
      this.setState({listItems:updatedItems,isAllSelected:isAllSelectedItems});
  }


  public render(): React.ReactElement<IReactDatatableProps> {
    let filteredItems = this.filterListItems();
    let { list, fields, enableDownloadAsCsv, enableDownloadAsPdf, enablePagination, displayMode, enableSearching, title, evenRowColor, oddRowColor, sortBy, enableMultiselectBtnOnLeft } = this.props;
    let { sortingFields, sortDirection, columns, listItems, isAllSelected } = this.state;
    filteredItems = enablePagination ? this.paginateFn(filteredItems) : filteredItems;

    return (
      <div className={styles.reactDatatable}>
        {
          this.props.list == "" || this.props.list == undefined ?
            <Placeholder
              iconName='Edit'
              iconText='Configure your web part'
              description={strings.ConfigureWebpartDescription}
              buttonLabel={strings.ConfigureWebpartButtonLabel}
              hideButton={displayMode === DisplayMode.Read}
              onConfigure={this._onConfigure} /> : <>
              <WebPartTitle
                title={title}
                displayMode={DisplayMode.Read}
                updateProperty={() => { }}>
              </WebPartTitle>
              { list && fields && fields.length ?
                <div>
                  <Grid container className={styles.dataTableUtilities}>
                    <Grid item xs={6} className={styles.downloadButtons}>
                      {
                        enableDownloadAsCsv
                          ? <ExportListItemsToCSV
                            columnHeader={columns.map(c => c.headerName)}
                            listName={list}
                            description={title}
                            dataSource={() => this.exportDataFormatter(fields, filteredItems, csvCellFormatter)}
                          /> : <></>
                      }
                      {
                        enableDownloadAsPdf
                          ? <ExportListItemsToPDF
                            listName={list}
                            htmlElementForPDF='#dataTable'
                          />
                          : <></>
                      }
                    </Grid>
                    <Grid container justify='flex-end' xs={6}>
                      {
                        enableSearching ?
                          <TextField
                            onChange={this.handleSearch.bind(this)}
                            size="small"
                            label="Search"
                            variant="outlined"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                          : <></>
                      }
                    </Grid>
                  </Grid>
                  <div id="generateTable">
                    <TableContainer component={Paper} >
                      <Table aria-label="customized table" id="dataTable" >
                        <TableHead>
                          <TableRow>
                            {enableMultiselectBtnOnLeft &&
                              <StyledTableCell >
                                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  checked={isAllSelected} onClick={this.selectAllItems}/>
                              </StyledTableCell>
                            }
                            {columns.map((c) => (
                              <StyledTableCell key={c.headerName} >
                                {
                                  (sortBy && sortBy.indexOf(c.field) !== -1)
                                    ? <TableSortLabel
                                      active={sortingFields === c.field}
                                      direction={sortingFields === c.field ? sortDirection : 'asc'}
                                      onClick={this.handleSorting(c.field)}
                                    >
                                      {c.headerName}
                                    </TableSortLabel>
                                    : c.headerName
                                }
                              </StyledTableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {filteredItems.map((row, index) => (
                            <TableRow
                              style={{ backgroundColor: ((index + 1) % 2 === 0) ? evenRowColor : oddRowColor }} >
                              {enableMultiselectBtnOnLeft &&
                              <StyledTableCell >
                                  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} checked={row.isItemSelected} onClick={this.selectItem.bind(this,row)}/>
                              </StyledTableCell>
                              }
                              {columns.map((c) => (
                                <StyledTableCell >{row[c.field]} </StyledTableCell>
                              ))}
                              
                            </TableRow>
                          ))}
                        </TableBody>
                        {enablePagination ?
                          <React.Fragment>
                            <TableFooter>
                              <TableRow>
                              {enableMultiselectBtnOnLeft && <StyledTableCell colSpan={columns.length+1}>
                                <PaginationCustom
                                  colSpan={columns.length}
                                  classNamePage={styles.muiPagination}
                                  onPaginationUpdate={this.handlePaginationChange.bind(this)}
                                  totalItems={listItems.length}
                                  pageSize={this.props.pageSize} />
                                </StyledTableCell>
                              }
                              {!enableMultiselectBtnOnLeft && <StyledTableCell colSpan={columns.length}>
                                <PaginationCustom
                                  colSpan={columns.length}
                                  classNamePage={styles.muiPagination}
                                  onPaginationUpdate={this.handlePaginationChange.bind(this)}
                                  totalItems={listItems.length}
                                  pageSize={this.props.pageSize} />
                                </StyledTableCell>
                              }
                              </TableRow>
                            </TableFooter>
                          </React.Fragment> : <></>
                        }
                      </Table>
                    </TableContainer>
                  </div>
                </div> : <Alert severity="info">
                  {strings.ListFieldValidation}</Alert>
              }</>
        }
      </div >
    );
  }
}
