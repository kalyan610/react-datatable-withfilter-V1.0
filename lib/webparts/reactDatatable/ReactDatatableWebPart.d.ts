import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IReactDatatableWebPartProps {
    title: string;
    list: string;
    fields: any;
    fieldDetails: any;
    searchBy: any[];
    sortBy: any[];
    oddRowColor: string;
    evenRowColor: string;
    enableSorting: boolean;
    enableSearching: boolean;
    enablePagination: boolean;
    enableDownloadAsCsv: boolean;
    enableDownloadAsPdf: boolean;
    fieldOrder: Array<any>;
    filterCondition: string;
    pageSize: number;
    enableMultiselectBtnOnLeft: boolean;
}
export default class ReactDatatableWebPart extends BaseClientSideWebPart<IReactDatatableWebPartProps> {
    private _services;
    private _selectedFields;
    onInit(): Promise<void>;
    private mapFieldsToObjects;
    getSelectedListFields(): Promise<void>;
    render(): void;
    onChangeProperty: (changeType: string, oldValue: any, newValue: any[]) => void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ReactDatatableWebPart.d.ts.map