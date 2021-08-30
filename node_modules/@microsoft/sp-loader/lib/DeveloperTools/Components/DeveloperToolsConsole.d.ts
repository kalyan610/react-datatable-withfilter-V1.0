/**
 * @file DeveloperToolsConsole.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import * as React from 'react';
import DeveloperToolsTab from './../Models/DeveloperToolsTab';
export interface IDeveloperToolsConsoleState {
    visible: boolean;
    topPosition: number;
    tabs: DeveloperToolsTab[];
    selectedTabId: number;
}
export interface IDeveloperToolsConsoleProps {
}
export default class DeveloperToolsConsole extends React.Component<IDeveloperToolsConsoleProps, IDeveloperToolsConsoleState> {
    constructor(props: IDeveloperToolsConsoleProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<IDeveloperToolsConsoleProps>;
    private _onDrag;
    private _setState;
}
//# sourceMappingURL=DeveloperToolsConsole.d.ts.map