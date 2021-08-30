/// <reference types="react" />
interface IExportToCSV {
    columnHeader: Array<string>;
    listName: string;
    description: string;
    dataSource: () => any[];
}
export declare function ExportListItemsToCSV(props: IExportToCSV): JSX.Element;
export {};
//# sourceMappingURL=ExportListItemsToCSV.d.ts.map