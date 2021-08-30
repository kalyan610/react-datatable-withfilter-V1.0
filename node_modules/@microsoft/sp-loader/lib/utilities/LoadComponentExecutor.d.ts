import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
export default class LoadComponentExecutor {
    private _activeLoads;
    private _pendingLoads;
    private _loadFunction;
    private _alternativeExecutor;
    constructor(loadFunction: (manifest: IClientSideComponentManifest) => Promise<any>);
    setAlternativeExecutor(executor: LoadComponentExecutor): void;
    loadComponent<T>(manifest: IClientSideComponentManifest): Promise<T>;
    /**
     * Returns true if SystemJS is currently running any loadComponent() call.
     *
     * @remarks
     * This is used to ensure that SystemJS will not run while RequireJS is not done with all loads.
     */
    readonly isRunning: boolean;
    /**
     * When called, executes all the loadComponent() calls that couldn't be executed before.
     *
     * @remarks
     * This is used to ensure that we don't run SystemJS while RequireJS is not done trying to load a component.
     */
    processPendingLoads(): void;
    /**
     * Returns true if loadComponent() can be executed.
     *
     * @remarks
     * It just checks that RequireJS is not running at the time, as both can't work at the same time.
     */
    private _canRunLoad;
    /**
     * Increments the number of active loads.
     */
    private _incrementActiveLoads;
    /**
     * Decrements the number of active loads.
     * When there are no active loads, it tries to load any pending request in RequireJS.
     */
    private _decrementActiveLoads;
}
//# sourceMappingURL=LoadComponentExecutor.d.ts.map