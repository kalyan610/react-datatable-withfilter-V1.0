import { IClientSideComponentManifest, IComponentModuleConfiguration } from '@microsoft/sp-module-interfaces';
import SPLoaderError from './SPLoaderError';
export default class ErrorBuilder {
    static buildLoadComponentError(manifest: IClientSideComponentManifest, error: Error): SPLoaderError;
    static buildLoadComponentReturnsEmptyError(manifest: IClientSideComponentManifest): SPLoaderError;
    static buildLoadComponentReturnsDefaultEmptyError(manifest: IClientSideComponentManifest): SPLoaderError;
    static buildLoadComponentDependencyError(manifest: IClientSideComponentManifest, error: Error): SPLoaderError;
    static buildManifestNotFoundError(moduleConfiguration: IComponentModuleConfiguration): SPLoaderError;
    static buildLoadPathDependencyBlockedError(manifest: IClientSideComponentManifest, name: string): SPLoaderError;
    static buildModuleHasUndeclaredDependencyError(manifest: IClientSideComponentManifest, dependencyName: string): SPLoaderError;
    static buildLoadEntryPointError(manifest: IClientSideComponentManifest, error: Error): SPLoaderError;
    static buildLoadPathDependencyError(manifest: IClientSideComponentManifest, dependencyName: string, error: Error): SPLoaderError;
    static buildMissingPathDependencyError(manifest: IClientSideComponentManifest, dependencyName: string): SPLoaderError;
    static buildLoadComponentDependencyFailoverPathError(manifest: IClientSideComponentManifest, dependencyName: string, failoverPath: string, error: Error): SPLoaderError;
    static buildLoadScriptWithStringError(): SPLoaderError;
    static buildUrlStatusLocalhostFileNotFoundError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusFileNotFoundError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusForbiddenError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusClientErrorError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusServerErrorError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusLocalhostNetworkErrorError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusDocLibNetworkErrorError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusHttpsNetworkErrorError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusNetworkErrorError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildUrlStatusUndefinedError(manifest: IClientSideComponentManifest, resourceName: string, url: string): SPLoaderError;
    static buildScriptFailedToCreateGlobalError(globalName: string, scriptUrl: string): SPLoaderError;
    static buildModuleHasFailedDependencyError(resource: string, dependency: string): SPLoaderError;
    private static buildErrorWithVerboseLog;
    private static buildErrorWithErrorLog;
}
//# sourceMappingURL=ErrorBuilder.d.ts.map