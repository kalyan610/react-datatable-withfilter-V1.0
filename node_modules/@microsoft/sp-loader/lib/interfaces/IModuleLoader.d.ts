import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
export declare type ErrorProcessor = (manifest: IClientSideComponentManifest, name: string) => Promise<void>;
export interface IModuleLoader {
    readonly loadEntryPointErrorProcessors: ErrorProcessor[];
    readonly loadComponentDependencyErrorProcessors: ErrorProcessor[];
    readonly loadPathDependencyErrorProcessors: ErrorProcessor[];
    load<TModule>(manifest: IClientSideComponentManifest, name?: string, globalName?: string): Promise<TModule>;
    loadFromFailoverPath<TModule>(name: string): Promise<TModule>;
    configure(manifest: IClientSideComponentManifest): void;
    delete(manifest: IClientSideComponentManifest): void;
    ensure(manifest: IClientSideComponentManifest, module: any): void;
}
//# sourceMappingURL=IModuleLoader.d.ts.map