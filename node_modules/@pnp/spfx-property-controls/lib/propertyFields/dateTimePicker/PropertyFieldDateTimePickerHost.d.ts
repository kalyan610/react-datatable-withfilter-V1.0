import * as React from 'react';
import { IPropertyFieldDateTimePickerHostProps, IPropertyFieldDateTimePickerHostState } from './IPropertyFieldDateTimePickerHost';
/**
 * Renders the controls for PropertyFieldDateTimePicker component
 */
export default class PropertyFieldDateTimePickerHost extends React.Component<IPropertyFieldDateTimePickerHostProps, IPropertyFieldDateTimePickerHostState> {
    static defaultProps: {
        showLabels: boolean;
    };
    private _latestValidateValue;
    private async;
    private delayedValidate;
    private _crntDate;
    private _crntHours;
    private _crntMinutes;
    private _crntSeconds;
    /**
     * Constructor
     */
    constructor(props: IPropertyFieldDateTimePickerHostProps);
    /**
     * Function to retrieve the initial date
     */
    private _getDateValue;
    /**
     * Function called when the DatePicker Office UI Fabric component selected date changed
     */
    private _onSelectDate;
    /**
     * Function called when hours value have been changed
     * @param element Hours dropdown value
     */
    private _dropdownHoursChanged;
    /**
     * Function called when minutes value have been changed
     * @param element Minutes dropdown value
     */
    private _dropdownMinutesChanged;
    /**
     * Function called when seconds value have been changed
     * @param element Seconds dropdown value
     */
    private _dropdownSecondsChanged;
    /**
     * Save the new date
     */
    private _saveDate;
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
     * Renders the control
     */
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyFieldDateTimePickerHost.d.ts.map