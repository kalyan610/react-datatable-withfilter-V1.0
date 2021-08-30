import * as React from 'react';
import { IReactDatatableProps } from './IReactDatatableProps';
import { IReactDatatableState } from './IReactDatatableState';
export default class ReactDatatable extends React.Component<IReactDatatableProps, IReactDatatableState> {
    private _services;
    constructor(props: IReactDatatableProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IReactDatatableProps): void;
    getSelectedListItems(): Promise<void>;
    private _onConfigure;
    formatColumnValue(value: any, type: string): any;
    private exportDataFormatter;
    private handlePaginationChange;
    handleSearch(event: React.ChangeEvent<HTMLInputElement>): void;
    filterListItems(): any[];
    private sortListItems;
    private paginateFn;
    private handleSorting;
    private selectAllItems;
    private selectItem;
    render(): React.ReactElement<IReactDatatableProps>;
}
//# sourceMappingURL=ReactDatatable.d.ts.map