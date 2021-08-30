import * as React from 'react';
import { IPropertyPanePropertyEditorHostProps, IPropertyPanePropertyEditorHostState } from './IPropertyPanePropertyEditorHost';
export default class PropertyPanePropertyEditorHost extends React.Component<IPropertyPanePropertyEditorHostProps, IPropertyPanePropertyEditorHostState> {
    private previousValue;
    private cancel;
    private fileRef;
    constructor(props: IPropertyPanePropertyEditorHostProps, state: IPropertyPanePropertyEditorHostState);
    private setFileRef;
    private getProperties;
    /**
     * Called when the save button  gets clicked
     */
    private onSave;
    /**
     * Called when the properties editor changes
     */
    private onChange;
    /**
     * Called to open the editor panel
     */
    private onOpenPanel;
    /**
    * Close the panel
    */
    private onClosePanel;
    /**
     * Called when clicking 'Download'
     */
    private onDownload;
    /**
     * Called when the changed event occurs on the file upload control
     */
    private onUpload;
    render(): JSX.Element;
}
//# sourceMappingURL=PropertyPanePropertyEditorHost.d.ts.map