import * as React from 'react';
import { IPropertyFieldViewPickerHostProps, IPropertyFieldViewPickerHostState } from './IPropertyFieldViewPickerHost';
/**
 * Renders the controls for PropertyFieldViewPicker component
 */
export default class PropertyFieldViewPickerHost extends React.Component<IPropertyFieldViewPickerHostProps, IPropertyFieldViewPickerHostState> {
    private options;
    private selectedKey;
    private latestValidateValue;
    private async;
    private delayedValidate;
    /**
     * Constructor method
     */
    constructor(props: IPropertyFieldViewPickerHostProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IPropertyFieldViewPickerHostProps, _prevState: IPropertyFieldViewPickerHostState): void;
    /**
     * Loads the views from a SharePoint list
     */
    private loadViews;
    /**
     * Raises when a view has been selected
     */
    private onChanged;
    /**
     * Validates the new custom field value
     */
    private validate;
    /**
     * Notifies the parent Web Part of a property value change
     */
    private notifyAfterValidate;
    /**
     * Called when the component will unmount
     */
    componentWillUnmount(): void;
    /**
     * Renders the SPViewPicker controls with Office UI Fabric
     */
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyFieldViewPickerHost.d.ts.map