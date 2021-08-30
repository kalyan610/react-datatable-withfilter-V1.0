/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceDisplay.tsx
 */
import * as React from 'react';
import { IDeveloperToolsCompPropBase } from '../../../IDeveloperToolsTab';
import { ITraceFilter } from './../../../Stores/TraceDisplayStore';
export interface ITraceDisplayState {
    filter: ITraceFilter;
}
export interface ITraceDisplayProps extends IDeveloperToolsCompPropBase {
}
export default class TraceDisplay extends React.Component<ITraceDisplayProps, ITraceDisplayState> {
    constructor(props: ITraceDisplayProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<ITraceDisplayProps>;
    private _setState;
}
//# sourceMappingURL=TraceDisplay.d.ts.map