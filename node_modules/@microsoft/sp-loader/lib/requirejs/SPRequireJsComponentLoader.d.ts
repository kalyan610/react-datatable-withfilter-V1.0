import { ServiceScope } from '@microsoft/sp-core-library';
import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { BaseComponentLoader } from '../loader/BaseComponentLoader';
import { ILoadScriptOptions } from '../interfaces/ILoadScriptOptions';
import { ISPComponentLoader } from '../interfaces/ISPComponentLoader';
import SystemJsFallbackLoader from './SystemJsFallbackLoader';
/**
 * The component loader for SPFx.
 * This implementation uses RequireJS as the internal module loader.
 *
 * @alpha
 */
export default class SPRequireJsComponentLoader extends BaseComponentLoader implements ISPComponentLoader {
    private _requireJsLoader;
    private _systemJsFallbackLoader;
    private _loadComponentExecutor;
    /**
     * @internal
     */
    constructor(serviceScope: ServiceScope, systemJsFallbackLoader: SystemJsFallbackLoader);
    loadScript<TModule>(url: string, options?: ILoadScriptOptions | undefined): Promise<TModule>;
    loadComponent<TComponent>(manifest: IClientSideComponentManifest): Promise<TComponent>;
    protected _overrideComponent<TComponent>(componentId: string, componentModule: TComponent): void;
    protected _unloadComponent(manifest: IClientSideComponentManifest): void;
    /**
     * This functions tries to load the component with RequireJS, and if the killswitch is not enabled and the load fails,
     * will set up the component to be loaded with SystemJS.
     */
    private _loadComponentWithExecutor;
    private _buildQosExtraData;
    private _handleLoadComponentError;
}
//# sourceMappingURL=SPRequireJsComponentLoader.d.ts.map