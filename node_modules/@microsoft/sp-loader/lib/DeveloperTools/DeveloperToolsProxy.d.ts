/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * @file DeveloperToolsProxy.ts
 */
import { IDeveloperToolsTab } from './IDeveloperToolsTab';
import { IDeveloperTools } from './IDeveloperTools';
/**
 * Developer tools.
 * Allows to register tabs in the developer tools.
 *
 * @internal
 */
export default class DeveloperToolsProxy {
    private static _instance;
    /**
     * Initializes the developer tools with an implementation.
     * Must be called once before it can be used.
     */
    static initialize(developerToolsLoader: IDeveloperTools): void;
    /**
     * {@inheritDoc  IDeveloperTools.registerDeveloperToolsTab}
     */
    static registerDeveloperToolsTab(developerToolsTab: IDeveloperToolsTab): void;
}
//# sourceMappingURL=DeveloperToolsProxy.d.ts.map