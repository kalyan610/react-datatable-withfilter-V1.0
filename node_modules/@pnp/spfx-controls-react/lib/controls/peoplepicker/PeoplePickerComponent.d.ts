import * as React from 'react';
import { IPeoplePickerProps, IPeoplePickerState } from './IPeoplePicker';
/**
 * PeoplePicker component
 */
export declare class PeoplePicker extends React.Component<IPeoplePickerProps, IPeoplePickerState> {
    private peopleSearchService;
    private suggestionsLimit;
    private groupId;
    constructor(props: IPeoplePickerProps);
    /**
     * componentWillMount lifecycle hook
     */
    componentWillMount(): void;
    /**
     * componentWillUpdate lifecycle hook
     */
    componentWillUpdate(nextProps: IPeoplePickerProps, nextState: IPeoplePickerState): void;
    componentWillReceiveProps(nextProps: IPeoplePickerProps): void;
    /**
     * Get initial persons
     */
    private getInitialPersons;
    /**
     * A search field change occured
     */
    private onSearchFieldChanged;
    /**
     * On item selection change event
     */
    private onChange;
    /**
     * Returns the most recently used person
     *
     * @param currentPersonas
     */
    private returnMostRecentlyUsedPerson;
    /**
     * Removes duplicates
     *
     * @param personas
     * @param possibleDupes
     */
    private removeDuplicates;
    private validate;
    private validated;
    /**
     * Checks if list contains the person
     *
     * @param persona
     * @param personas
     */
    private listContainsPersona;
    /**
     * Default React component render method
     */
    render(): React.ReactElement<IPeoplePickerProps>;
}
//# sourceMappingURL=PeoplePickerComponent.d.ts.map