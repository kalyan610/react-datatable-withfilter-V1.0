import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { IPreloadedData } from './IPreloadedData';
import { ILoadScriptOptions } from './ILoadScriptOptions';
import { IDebugData } from '../debug/DebugManager';
/**
 * Interface for the module loader.
 * It allows to load modules and scripts (through SystemJS) and CSS on the page.
 * Also allows access to the manifests that exist in the page.
 *
 * @internal
 */
export interface ISPComponentLoader {
    /**
     * All registered manifests.
     *
     * @readonly
     * @internal
     */
    readonly _manifestReferences: IClientSideComponentManifest[];
    /**
     * Starts the application.
     * This is called by the page scripts to start loading the framework. Do not call it from your own code.
     *
     * @param preloadedData - Preloaded data for the application.
     *
     * @internal
     */
    _startApplication<TApplication>(preloadedData: IPreloadedData): Promise<TApplication>;
    /**
     * Initializes the component loader.
     * Registers all manifests (including debug manifests, if it applies)
     * and sets up internal logic before allowing to load components.
     *
     * @param preloadedData -     Preloaded data for the application.
     * @param bundledComponents - Map with all the components that are bundled in the same file as the loader.
     *
     * @internal
     */
    _initialize(preloadedData: IPreloadedData, bundledComponents: {
        [id: string]: Object;
    }, debugData: IDebugData): void;
    /**
     * Inserts a `<link ... />` tag for a stylesheet.
     *
     * @param url - The CSS file URL.
     */
    loadCss(url: string): void;
    /**
     * Given a URL, load a script.
     *
     * @remarks
     *
     * If a script with a global variable is being loaded, the global variable already exists, and the script
     * fails to load (because of a syntax error, for example), the original global variable may be returned and an
     * error may not be propagated.
     *
     * @param url     - The script URL.
     * @param options - globalExportsName: If the script isn't an AMD module and loads a global member on the page,
     *                    specify the global member's name.
     * @returns         A promise containing the loaded module.
     */
    loadScript<TModule>(url: string, options?: ILoadScriptOptions): Promise<TModule>;
    /**
     * Loads a component from a manifest.
     *
     * @param manifest - Manifest of the module to load.
     * @returns          A promise containing the loaded module.
     */
    loadComponent<TComponent>(manifest: IClientSideComponentManifest): Promise<TComponent>;
    /**
     * Unloads all components from SPFx.
     * This includes removing their references from SystemJS, RequireJS, and the ComponentLoader.
     *
     * @internal
     */
    _unloadComponents(): void;
    /**
     * Resolve a component id and version, and load it.
     *
     * @param id      - The id of the component to load.
     * @param version - The version of the component to load. If version is not defined, the method
     *                    will load any version of the component.
     * @returns         A promise containing the loaded module.
     *
     * @alpha
     */
    loadComponentById<TComponent>(id: string, version?: string): Promise<TComponent>;
    /**
     * Loads manifests from the specified manifests file URL as non-debug manifests without prompting the user.
     *
     * @param manifestsFileUrl - The URL of the manifests file.
     *
     * @returns A promise that is fulfilled when the manifests are loaded.
     *
     * @internal
     */
    _loadDebugManifestsForWorkbench(manifestsFileUrl: string): Promise<void>;
    /**
     * Try and get a reference to a loaded component module by id and version.
     *
     * @param manifest - Manifest of the module to load.
     * @returns A reference to a component module by id and version or, if it does not exist, undefined.
     *
     * @alpha
     */
    tryGetLoadedComponent<TComponent>(manifest: IClientSideComponentManifest): TComponent | undefined;
    /**
     * Get a component manifest from the component id and version.
     *
     * @param id      - GUID id of the component.
     * @param version - Version of the component. If version is not defined, the method
     *                    will return the manifest for any version of the component.
     * @returns         Manifest for the component.
     *
     * @alpha
     */
    tryGetManifestById(id: string, version?: string): IClientSideComponentManifest | undefined;
    /**
     * {@inheritdoc ManifestStore.requestManfiest}
     *
     * @alpha
     */
    requestManifest(id: string, version?: string): Promise<IClientSideComponentManifest>;
    /**
     * Registers manifests in the manifest store.
     *
     * @param manifests - The manifests to register in the store.
     *
     * @alpha
     */
    registerManifests(manifests: IClientSideComponentManifest[]): void;
}
//# sourceMappingURL=ISPComponentLoader.d.ts.map