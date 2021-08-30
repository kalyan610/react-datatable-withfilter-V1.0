import * as React from 'react';
import * as strings from 'ReactDatatableWebPartStrings';
import { ExportToCsv } from 'export-to-csv';
import { PrimaryButton } from 'office-ui-fabric-react';
import { CSVLink } from "react-csv";
export function ExportListItemsToCSV(props) {
    var downloadIcon = { iconName: 'Download' };
    var columnHeader = props.columnHeader, listName = props.listName, dataSource = props.dataSource;
    //let { columnHeader, listItems, listName, description } = props;
    function generateCSV() {
        var colHeader = columnHeader;
        var options = {
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
        var csvExporter = new ExportToCsv(options);
        csvExporter.generateCsv(dataSource());
    }
    return (React.createElement(CSVLink, { data: dataSource(), filename: listName + ".csv" },
        React.createElement(PrimaryButton, { text: strings.DownloadAsCSVLabel, iconProps: downloadIcon })));
}
//# sourceMappingURL=ExportListItemsToCSV.js.map