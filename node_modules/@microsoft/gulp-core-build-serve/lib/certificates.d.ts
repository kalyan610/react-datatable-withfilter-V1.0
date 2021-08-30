/// <reference path="../src/NodeForgeExtensions.d.ts" />
import { GulpTask } from '@microsoft/gulp-core-build';
export interface ICertificate {
    pemCertificate: string;
    pemKey: string;
}
/**
 * Get the dev certificate from the store, or, optionally, generate a new one and trust it if one doesn't exist in the
 *  store.
 */
export declare function ensureCertificate<TGulpTask>(canGenerateNewCertificate: boolean, parentTask: GulpTask<TGulpTask>): ICertificate;
export declare function untrustCertificate<TGulpTask>(parentTask: GulpTask<TGulpTask>): boolean;
//# sourceMappingURL=certificates.d.ts.map