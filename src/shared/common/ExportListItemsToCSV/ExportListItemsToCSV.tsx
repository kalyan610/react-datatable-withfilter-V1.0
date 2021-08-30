import * as React from 'react';
import * as strings from 'ReactDatatableWebPartStrings';
import { ExportToCsv } from 'export-to-csv';
import { Button } from '@material-ui/core';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import { IIconProps, PrimaryButton } from 'office-ui-fabric-react';
import { CSVLink } from "react-csv";

interface IExportToCSV {
    columnHeader: Array<string>;
    listName: string;
    description: string;
    dataSource: () => any[];
}

export function ExportListItemsToCSV(props: IExportToCSV) {

    const downloadIcon: IIconProps = { iconName: 'Download' };

    let { columnHeader, listName, dataSource } = props;

    //let { columnHeader, listItems, listName, description } = props;

    function generateCSV() {
        let colHeader = columnHeader;
        const options = {
            filename: listName,
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: true,
            title: '',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
            headers: colHeader
        };
        const csvExporter = new ExportToCsv(options);
        csvExporter.generateCsv(dataSource());
    }

    return (
        <CSVLink data={dataSource()} filename={`${listName}.csv`}>

        <PrimaryButton

            text={strings.DownloadAsCSVLabel}

            iconProps={downloadIcon}

            // onClick={(e) => { e.preventDefault(); generateCSV(); }}

           // className={styles.btnCSV}

        />

    </CSVLink>

      
      
    );

}