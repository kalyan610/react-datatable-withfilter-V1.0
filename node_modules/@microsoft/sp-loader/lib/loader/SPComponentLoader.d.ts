import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { ISPComponentLoader } from '../interfaces/ISPComponentLoader';
import { ILoadScriptOptions } from '../interfaces/ILoadScriptOptions';
import { IPreloadedData } from '../interfaces/IPreloadedData';
/**
 * Component loader.
 * Needs to be initialized with an implemented `ISPComponentLoader`.
 *
 * @public
 */
export declare class SPComponentLoader {
    private static _instance;
    /**
     * Initializes the component loader with an implementation.
     * Must be called once before it can be used.
     *
     * @internal
     */
    static _initialize(componentLoader: ISPComponentLoader): void;
    /**
     * {@inheritDoc  ISPComponentLoader._startApplication}
     *
     * @internal
     */
    static _startApplication<TApplication>(preloadedData: IPreloadedData): Promise<TApplication>;
    /**
     * {@inheritDoc  ISPComponentLoader.loadCss}
     */
    static loadCss(url: string): void;
    /**
     * {@inheritDoc  ISPComponentLoader.loadScript}
     */
    static loadScript<TModule>(url: string, options?: ILoadScriptOptions): Promise<TModule>;
    /**
     * {@inheritDoc  ISPComponentLoader.loadComponent}
     */
    static loadComponent<TComponent>(manifest: IClientSideComponentManifest): Promise<TComponent>;
    /**
     * {@inheritDoc  ISPComponentLoader.loadComponentById}
     *
     * @public
     */
    static loadComponentById<TComponent>(id: string, version?: string): Promise<TComponent>;
    /**
     * {@inheritDoc  ISPComponentLoader.registerManifests}
     *
     * @alpha
     */
    static registerManifests(manifests: IClientSideComponentManifest[]): void;
    /**
     * {@inheritDoc  ISPComponentLoader.manifestReferences}
     *
     * @internal
     */
    static _getManifestReferences(): IClientSideComponentManifest[];
    /**
     * Returns static copies of all the manifests.
     *
     * @public
     */
    static getManifests(): IClientSideComponentManifest[];
    /**
     * {@inheritDoc  ISPComponentLoader.tryGetLoadedComponent}
     *
     * @alpha
     */
    static tryGetLoadedComponent<TComponent>(manifest: IClientSideComponentManifest): TComponent | undefined;
    /**
     * {@inheritDoc  ISPComponentLoader.tryGetManifestById}
     *
     * @alpha
     */
    static tryGetManifestById(id: string, version?: string): IClientSideComponentManifest | undefined;
    /**
     * {@inheritdoc ManifestStore.requestManifest}
     *
     * @alpha
     */
    static requestManifest(id: string, version?: string): Promise<IClientSideComponentManifest>;
    /**
     * {@inheritDoc  ISPComponentLoader._loadDebugManifestsForWorkbench}
     *
     * @internal
     */
    static _loadDebugManifestsForWorkbench(manifestsFileUrl: string): Promise<void>;
}
//# sourceMappingURL=SPComponentLoader.d.ts.map