import { ServiceScope } from '@microsoft/sp-core-library';
import { IPreloadedData } from '../interfaces/IPreloadedData';
/**
 * Interface for the application manager, that's implemented in @microsoft/sp-application-base.
 * @internal
 */
export interface IApplicationManager {
    new (serviceScope: ServiceScope): any;
    startApplication<TApplication>(preloadedData: IPreloadedData): Promise<TApplication>;
}
/**
 * Interface for the navigator, that's implemented in @microsoft/sp-application-base.
 * @internal
 */
export interface INavigator {
    new (serviceScope: ServiceScope): any;
    navigate(url: string): Promise<IPreloadedData>;
    navigateToPreloadedData(preloadedData: IPreloadedData): void;
    navigateToApplication<TApplication>(preloadedData: IPreloadedData): Promise<TApplication>;
}
/**
 * Platform loader.
 * Includes logic to load SPFX application platform and start applications from it.
 *
 * @internal
 */
export default class PlatformLoader {
    /**
     * Loads the application platform and starts the application configured in the preloaded data.
     * Relies in SPComponentLoader to load the framework and the application components.
     *
     * @param preloadedData - Application preloaded data. Must include the application id.
     */
    static startApplication<TApplication>(preloadedData: IPreloadedData, serviceScope: ServiceScope): Promise<TApplication>;
    private static _startApplication;
    /**
     * Runs ApplicationManager.startApplication and properly catches errors coming from there.
     */
    private static _executePlatformCode;
    /**
     * Runs ApplicationManager.startApplication and properly catches errors coming from there.
     */
    private static _runApplicationManager;
    /**
     * Runs Navigator.navigateToApplication and properly catches errors coming from there.
     */
    private static _navigateToApplication;
    /**
     * Loads sp-application-base component.
     * Rejects the promise if sp-application-base can't be loaded.
     */
    private static _loadSpApplicationBase;
}
//# sourceMappingURL=PlatformLoader.d.ts.map