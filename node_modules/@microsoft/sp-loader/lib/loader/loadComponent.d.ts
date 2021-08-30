import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { IModuleLoader } from '../interfaces/IModuleLoader';
/**
 * Loads a component from a manifest.
 *
 * @param manifest - Manifest of the module to load.
 * @returns          A promise containing the loaded module.
 */
export default function loadComponent<TComponent>(manifest: IClientSideComponentManifest, moduleLoader: IModuleLoader): Promise<TComponent>;
//# sourceMappingURL=loadComponent.d.ts.map