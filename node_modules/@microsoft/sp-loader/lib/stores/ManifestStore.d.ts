/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file ManifestStore.ts
 */
import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { IPreloadedData } from '../interfaces/IPreloadedData';
import ManifestProvider from './ManifestProvider';
/**
 * @internal
 */
export interface IManifestStoreEntry {
    /**
     * The component id.
     */
    id: string;
    /**
     * The component version.
     */
    version: string;
    /**
     * The manifest V2 payload.
     */
    manifest?: IClientSideComponentManifest;
    /**
     * A debug manifest V2 payload, if one has been provided.
     */
    debugManifest?: IClientSideComponentManifest;
}
/**
 * This class maintains a cache of the manifests on the current page.
 *
 * @internal
 */
export default class ManifestStore {
    private static _instance;
    private _manifestProvider;
    static readonly instance: ManifestStore;
    /**
     * Map from component id to array of manifest store indexes.
     * This allows to store manifests for different versions of the same component.
     *
     * @remarks
     * Example: `'d1d91016-032f-456d-98a4-721247c305e8' -->[ Version(1.0.0), Version(2.0.0) ]`
     */
    private _manifestVersions;
    /**
     * Map from manifest store index string to manifest store entry.
     * Manifest store index is generated through logic in utilities/normalizeComponentId (`<id>_<version>`)
     * e.g. `'d1d91016-032f-456d-98a4-721247c305e8_1.0.0' --> { ManifestStoreEntry }`
     */
    private _manifests;
    /**
     * Set of all the component ids that have their manifest pinned.
     * If a component id has its manifest pinned, no other manifest can be added for that component id,
     * regardless of version or debug manifest.
     *
     * @remarks
     *
     * Example: `{ '1c6c9123-7aac-41f3-a376-3caea41ed83f', '7263c7d0-1d6a-45ec-8d85-d4d1d234171b' }`
     */
    private _pinnedManifests;
    /**
     * Register the preloaded manifests on the manifest store.
     *
     * @param preloadedData - The preloaded data
     */
    registerPreloadedManifests(preloadedData: IPreloadedData): void;
    /**
     * Register debug manifests on the manifest store.
     *
     * @param manifests - A dictionary of debug manifests.
     */
    registerDebugManifests(manifests: IClientSideComponentManifest[]): void;
    /**
     * Return a manifest by its component id and version.
     *
     * @remarks
     * If version is not provided, it will return the only available version. If more than
     * one version is available and version is not provided, returns undefined.
     *
     * Only return a debug manifest is debug is allowed. If a manifest isn't found by
     * the provided id, return undefined.
     *
     * @param id        - The component id of the manifest to retrieve.
     * @param version   - The version of the component of the manifest to retrieve.
     * @param shouldLog - True if failures should be logged. Defaults to true.
     * @returns           The retrieved manifest, or undefined if one could not be found.
     */
    tryGetManifest(id: string, version?: string, shouldLog?: boolean): IClientSideComponentManifest | undefined;
    /**
     * Return a manifest by its component id and version.
     *
     * @remarks
     * If version is not provided, it will return the only available version. If more than
     * one version is available and version is not provided, the function throws.
     *
     * Only return a debug manifest is debug is allowed. If a manifest isn't found by
     * the provided id, the function throws.
     *
     * @param id      - The component id of the manifest to retrieve.
     * @param version - The version of the component of the manifest to retrieve.
     * @returns         The retrieved manifest, or undefined if one could not be found.
     */
    getManifest(id: string, version?: string): IClientSideComponentManifest;
    /**
     * Get all registered manifests.
     *
     * @returns The registered manifests.
     */
    getRegisteredManifests(): IClientSideComponentManifest[];
    /**
     * Removes all manifests that are not considered essential, and registers all the manifests passed as input.
     * Essential manifests are assembly-related manifest, and debug manifests.
     *
     * @param manifests - Manifests to add.
     */
    replaceManifests(manifests: IClientSideComponentManifest[]): void;
    /**
     * Returns a map of manifest IDs to manifests.
     *
     * @returns A map of manifest IDs to manifests.
     */
    _getManifestMap(): Map<string, IManifestStoreEntry>;
    /**
     * Loads additional manifests into the manifest store, updating existing manifests.
     *
     * @param manifests - The manifests to load into the store.
     */
    registerManifests(manifests: IClientSideComponentManifest[], overwriteExisting: boolean): void;
    /**
     * Pins the manifest for a specific component id.
     * That means that no other manifest can be added for the specified component id.
     *
     * @remarks
     * This is used by assemblies to ensure that debug manifests are not replacing components already in use.
     *
     * @param componentId - Component id with only one manifest, which will be pinned.
     */
    _pinManifest(componentId: string): void;
    /**
     * Given a component id and version, requests its manifest (and all its dependencies) to SharePoint
     * through a REST API.
     * @param id - Id of the requested component
     * @param version - Optional. Version of the requested component
     * @returns Promise with the requested manifest. Rejects the promise if the manifest was not found.
     */
    requestManifest(id: string, version?: string): Promise<IClientSideComponentManifest>;
    /**
     * Given a component id and version, requests its manifest (and all its dependencies) to SharePoint
     * through a REST API.
     * @param ids - List of ids and (optionally) versions of the manifests to request.
     * @returns Promise with the requested manifests. Rejects the promise if the manifest was not found.
     */
    requestManifests(ids: {
        id: string;
        version?: string;
    }[]): Promise<IClientSideComponentManifest[]>;
    /**
     * Sets the manifest provider.
     * This is used to request manifests in the server if they are not found in the manifest store.
     *
     * @remarks
     * This must be set once by SPApplicationLoader. If it is called more than once it does nothing.
     */
    _setManifestProvider(manifestProvider: ManifestProvider): void;
    private _isManifestPinned;
    private _removeAllManifests;
    /**
     * Removes a manifest from the manifest store based on its id.
     * If it's a pinned manifest or a debug manifest it will skip it.
     *
     * @param id - Id of the manifest to remove.
     * @param version - Version of the manifest to remove.
     * @returns true if the manifest was removed.
     */
    private _removeManifest;
    /**
     * Internal implementation of `getManifest` that toggles whether failures should be logged or not.
     */
    private _getManifest;
    private _getManifestNotFoundErrorMessage;
    private _getManifestFromStoreEntry;
    private _addManifest;
    private _addDebugManifest;
    private _internalAddManifest;
    /**
     * Adds the manifest to the versions map.
     *
     * If the component id is not present in the map, adds a new entry in the map.
     * If the id and version are already present, it does nothing.
     */
    private _addManifestToVersionsMap;
    /**
     * Returns the index for a component id and version.
     * The index might not be for the same version, but a compatible one.
     *
     * If an index is not found, returns undefined.
     * If an index is request without a version, and there are multiple versions,
     * returns an error.
     * If more than one compatible version is found, an error is logged and
     * returns the highest compatible version.
     */
    private _getExistingIndex;
    /**
     * Gets the manifest store index for a component id without version.
     *
     * If no version is found for the id, returns undefined.
     * If there are too many manifests for the component id, logs an error and returns undefined.
     */
    private _getUniqueManifestStoreIndex;
    private _createIndexFromManifest;
    private _createIndex;
    private _findDebugIndex;
}
//# sourceMappingURL=ManifestStore.d.ts.map