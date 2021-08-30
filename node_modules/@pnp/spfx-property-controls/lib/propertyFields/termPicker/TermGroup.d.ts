import * as React from 'react';
import { ITermGroupProps, ITermGroupState } from './IPropertyFieldTermPickerHost';
/**
 * Term group component
 */
export default class TermGroup extends React.Component<ITermGroupProps, ITermGroupState> {
    constructor(props: ITermGroupProps);
    /**
     * Handle the click event: collapse or expand
     */
    private _handleClick;
    /**
     * Function to auto expand the termset
     */
    private _autoExpand;
    private _loadTermSets;
    render(): JSX.Element;
}
//# sourceMappingURL=TermGroup.d.ts.map