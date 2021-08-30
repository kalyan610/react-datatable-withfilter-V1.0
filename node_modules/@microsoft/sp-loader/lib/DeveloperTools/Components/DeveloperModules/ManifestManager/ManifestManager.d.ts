/**
 * @file ManifestManager.tsx
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import * as React from 'react';
import { IManifestStoreEntry } from './../../../../stores/ManifestStore';
export interface IManifestManagerState {
    manifests: IManifestStoreEntry[];
    selectedManifest: IManifestStoreEntry | undefined;
}
export interface IManifestManagerProps {
}
export default class ManifestManager extends React.Component<IManifestManagerProps, IManifestManagerState> {
    private static _selectedManifestId;
    private _selection;
    constructor(props: IManifestManagerProps);
    render(): React.ReactElement<{}>;
    private getUpdatedState;
}
//# sourceMappingURL=ManifestManager.d.ts.map