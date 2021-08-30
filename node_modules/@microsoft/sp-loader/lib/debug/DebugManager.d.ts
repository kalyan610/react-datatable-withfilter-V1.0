import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import SPStarter from '../starter/SPStarter';
import { ISPComponentLoader } from '../interfaces/ISPComponentLoader';
/**
 * Data required to start SPFx in debug mode. It includes the debug loader object and the debug manifests, when
 * applicable.
 *
 * @internal
 */
export interface IDebugData {
    /**
     * The debug loader object. When a debug loader is loaded, this is its SPStarter
     */
    debugLoader: typeof SPStarter | undefined;
    /**
     * The debug manifests.
     */
    debugManifests: IClientSideComponentManifest[] | undefined;
    /**
     * If debug manifests should be registered as non-debug manifests.
     */
    registerAsNonDebug: boolean;
}
/**
 * Provides APIs to manage debug scripts.
 *
 * This is used in order to provide security measures before running arbitrary code, and to provide
 * improved debugging experience when a debug loader is used.
 *
 * @internal
 */
export declare class DebugManager {
    private static _initializationPromise;
    private static _debugLoaderUrl;
    private static _debugManifestsFileUrl;
    /**
     * Checks if debug scripts are requested.
     * This method is the first thing called after flights are initialized in SPStarter.start() and should not be called
     * anywhere else.
     *
     * The following cases are supported (in order):
     *  - If the ?reset query parameter is present, clear the debug data and load the page normally.
     *  - If there is SPFX Debug session data containing the testMode property, load the scripts specified in the
     *      session data and return the debug loader and/or manifests. This case is only used for integration tests. The
     *      session data will get set externally by the test harness.
     *  - If the ?loader and/or the ?debugManifestsFile query parameter is present, prompt for
     *      consent and, if consent is granted, load the scripts, record the URLs in the SPFX Debug session data, and
     *      return the debug loader and/or manifests.
     *  - If there is SPFX Debug session data containing a loader URL and/or a manifests file URL, prompt for consent and,
     *      if consent is granted, load the scripts and return the debug loader and/or debug manifests.
     *  - In all other cases, return with no debug loader or manifests.
     *
     * @param componentLoader - The component loader to use to load debug scripts.
     * @param debugData - If defined, the currently executing loader is already a debug loader and the
     *  specified debug data was loaded by the non-debug loader. If the currently executing loader is already a debug
     *  loader, just set these manifests in the manifest store and return.
     *
     * @returns Promise optionally resolving to a debug loader.
     */
    static initialize(componentLoader: ISPComponentLoader, debugData: IDebugData | undefined): Promise<IDebugData>;
    static loadAndRegisterManifestsFile(componentLoader: ISPComponentLoader, manifestsFileUrl: string, registerAsNonDebug: boolean): Promise<IClientSideComponentManifest[]>;
    private static _handleDebugParameters;
    private static _handleNonTestModeDebugParameters;
    private static _getDebugScripts;
    private static _loadLoader;
    private static _getUrlErrorText;
    private static _registerManifests;
}
//# sourceMappingURL=DebugManager.d.ts.map