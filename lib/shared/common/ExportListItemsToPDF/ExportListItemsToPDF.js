import * as React from 'react';
import * as strings from 'ReactDatatableWebPartStrings';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Button } from '@material-ui/core';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
export function ExportListItemsToPDF(props) {
    var htmlElementForPDF = props.htmlElementForPDF, listName = props.listName;
    function genearatePDF() {
        var doc = new jsPDF();
        autoTable(doc, { html: htmlElementForPDF, theme: 'grid' });
        doc.save(listName + ".pdf");
    }
    return (React.createElement(Button, { variant: "contained", onClick: function () { return genearatePDF(); }, startIcon: React.createElement(GetAppSharpIcon, null) }, strings.DownloadAsPDFLabel));
}
//# sourceMappingURL=ExportListItemsToPDF.js.map