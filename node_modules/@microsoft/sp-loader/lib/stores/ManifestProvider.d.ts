import { ServiceScope } from '@microsoft/sp-core-library';
import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
/**
 * @internal
 */
export default class ManifestProvider {
    private static _restApiUrl;
    private _logSource;
    private _webAbsoluteUrl;
    private _pageContext;
    private _httpClient;
    constructor(serviceScope: ServiceScope, webAbsoluteUrl: string);
    /**
     * Given a component id and version, requests its manifest (and all its dependencies) to SharePoint
     * through a REST API.
     * Returns a promise with all the manifests.
     * @param componentId - Id of the requested component
     * @param version - Optional. Version of the requested component
     */
    tryGetManifest(componentId: string, version?: string): Promise<IClientSideComponentManifest[]>;
    /**
     * Given an array of ids and versions, requests their manifest (and all their dependencies) to SharePoint
     * through a REST API.
     * Returns a promise with all the manifests.
     * @param ids - Array with all the id and version pairs
     */
    tryGetManifests(ids: {
        id: string;
        version?: string;
    }[]): Promise<IClientSideComponentManifest[]>;
    private _extractManifests;
}
//# sourceMappingURL=ManifestProvider.d.ts.map