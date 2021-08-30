import { ServiceScope } from '@microsoft/sp-core-library';
import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { BaseComponentLoader } from '../loader/BaseComponentLoader';
import { ILoadScriptOptions } from '../interfaces/ILoadScriptOptions';
import { ISPComponentLoader } from '../interfaces/ISPComponentLoader';
import { IPreloadedData } from '../interfaces/IPreloadedData';
/**
 * The component loader for SPFx.
 * This implementation uses SystemJS as the internal module loader.
 *
 * @alpha
 */
export default class SPSystemJsComponentLoader extends BaseComponentLoader implements ISPComponentLoader {
    private _systemJsLoader;
    /**
     * @internal
     */
    constructor(serviceScope: ServiceScope);
    /**
     * Given a URL, load a script.
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
    protected _overrideComponent<TComponent>(componentId: string, componentModule: TComponent): void;
    protected _unloadComponent(manifest: IClientSideComponentManifest): void;
    /**
     * Workaround for ListView host app, as there are problems when using SystemJS and RequireJS together.
     * By configuring SystemJS scriptLoad = false it ensures that the "define" definition in the window is
     * the one from RequireJS
     * @override
     */
    protected _listViewHostWorkaround(preloadedData: IPreloadedData): void;
    private _buildQosExtraData;
    private _handleLoadComponentError;
}
//# sourceMappingURL=SPSystemJsComponentLoader.d.ts.map