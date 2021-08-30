import { ServiceScope, ServiceKey } from '@microsoft/sp-core-library';
import { IModuleLoader } from '../interfaces/IModuleLoader';
export default class ComponentOverrider {
    /**
     * Given a component id and a component module, it sets the component in the loader, therefore being
     * available without the need of loading it separately.
     * Should only be used when initializing the loader.
     *
     * @param componentId - Id of the component to override. There should be only one version of the component.
     * @param componentModule - Component module.
     */
    static overrideComponent<TComponent>(componentId: string, componentModule: TComponent, serviceScope: ServiceScope, moduleLoaderServiceKey: ServiceKey<IModuleLoader>): void;
    /**
     * This is necessary because assemblies don't advertise the component version, and it may be the case where the page
     * requires both React 15 and React 16 manifests, but assemblies never have React 15 anymore.  When assemblies have
     * a deeper understanding of the versions that are included in them, this can be removed.
     */
    private static getReactVersionIfNecessary;
}
//# sourceMappingURL=ComponentOverrider.d.ts.map