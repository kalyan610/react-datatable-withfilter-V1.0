import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import LoadComponentExecutor from '../utilities/LoadComponentExecutor';
import { ServiceScope } from '@microsoft/sp-core-library';
export default class SystemJsFallbackLoader {
    private static _window;
    private _serviceScope;
    private _systemJsComponentLoader;
    private _systemJsLoader;
    private _isInitialized;
    private _executor;
    private define;
    private require;
    private requirejs;
    constructor(serviceScope: ServiceScope);
    readonly executor: LoadComponentExecutor;
    loadComponent<T>(manifest: IClientSideComponentManifest): Promise<T>;
    private _loadComponentImpl;
    private _ensureInitialized;
    private _saveGlobals;
    private _restoreGlobals;
}
//# sourceMappingURL=SystemJsFallbackLoader.d.ts.map