import * as React from 'react';
import { IPropertyFieldRoleDefinitionPickerHostProps, IPropertyFieldRoleDefinitionPickerHostState } from './IPropertyFieldRoleDefinitionPickerHost';
/**
 * Renders the controls for PropertyFieldRoleDefinitionPicker component
 */
export default class PropertyFieldRoleDefinitionPickerHost extends React.Component<IPropertyFieldRoleDefinitionPickerHostProps, IPropertyFieldRoleDefinitionPickerHostState> {
    private options;
    private selectedOptions;
    private async;
    private resultsRoleDefinition;
    /**
     * Constructor method
     */
    constructor(props: IPropertyFieldRoleDefinitionPickerHostProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: IPropertyFieldRoleDefinitionPickerHostProps, _prevState: IPropertyFieldRoleDefinitionPickerHostState): void;
    /**
     * Loads the role definitions from a SharePoint web
     */
    private loadRoleDefinitions;
    /**
     * Raises when a role definition has been selected
     */
    private onChanged;
    /**
     * Called when the component will unmount
     */
    componentWillUnmount(): void;
    /**
     * Renders the SPRoleDefinitionPicker controls with Office UI Fabric
     */
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyFieldRoleDefinitionPickerHost.d.ts.map