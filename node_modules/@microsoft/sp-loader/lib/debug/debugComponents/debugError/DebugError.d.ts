import * as React from 'react';
export interface IDebugErrorProps {
    errorText?: string;
    innerError: Error;
    title: string;
}
export interface IDebugErrorState {
    isShown: boolean;
}
export default class DebugError extends React.Component<IDebugErrorProps, IDebugErrorState> {
    constructor(props: IDebugErrorProps);
    render(): React.ReactElement<IDebugErrorProps>;
}
//# sourceMappingURL=DebugError.d.ts.map