import * as React from 'react';
import { IPropertyFieldPeoplePickerHostProps, IPeoplePickerState } from './IPropertyFieldPeoplePickerHost';
/**
 * Renders the controls for PropertyFieldPeoplePicker component
 */
export default class PropertyFieldPeoplePickerHost extends React.Component<IPropertyFieldPeoplePickerHostProps, IPeoplePickerState> {
    private searchService;
    private intialPersonas;
    private resultsPeople;
    private resultsPersonas;
    private selectedPeople;
    private selectedPersonas;
    private async;
    private delayedValidate;
    /**
     * Constructor method
     */
    constructor(props: IPropertyFieldPeoplePickerHostProps);
    /**
     * A search field change occured
     */
    private onSearchFieldChanged;
    /**
     * Remove the duplicates if property allowDuplicate equals false
     */
    private removeDuplicates;
    /**
     * Creates the collection of initial personas from initial IPropertyFieldGroupOrPerson collection
     */
    private createInitialPersonas;
    /**
     * Generates a IPersonaProps object from a IPropertyFieldGroupOrPerson object
     */
    private getPersonaFromPeople;
    /**
     * Refreshes the web part properties
     */
    private refreshWebPartProperties;
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
     * Find the index of the selected person
     * @param selectedItem
     */
    private _findIndex;
    /**
     * Event raises when the user changed people from the PeoplePicker component
     */
    private onItemChanged;
    /**
     * Generate a PersonaInitialsColor from the item position in the collection
     */
    private getRandomInitialsColor;
    /**
     * Renders the PeoplePicker controls with Office UI  Fabric
     */
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyFieldPeoplePickerHost.d.ts.map