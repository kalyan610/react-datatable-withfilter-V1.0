/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file TraceListItem.tsx
 * Sub-component for TraceList. One of these exists for each row in the table.
 */
import * as React from 'react';
import { _LogEvent } from '@microsoft/sp-diagnostics';
export interface ITraceListItemProps {
    id: number;
    trace: _LogEvent;
}
export default class TraceListItem extends React.Component<ITraceListItemProps, {}> {
    render(): React.ReactElement<ITraceListItemProps>;
}
//# sourceMappingURL=TraceListItem.d.ts.map