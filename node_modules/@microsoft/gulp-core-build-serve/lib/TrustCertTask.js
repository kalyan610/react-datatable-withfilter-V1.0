"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_core_build_1 = require("@microsoft/gulp-core-build");
const certificates_1 = require("./certificates");
/**
 * This task generates and trusts a development certificate. The certificate is self-signed
 *  and stored, along with its private key, in the user's home directory. On Windows, it's
 *  trusted as a root certification authority in the user certificate store. On macOS, it's
 *  trusted as a root cert in the keychain. On other platforms, the certificate is generated
 *  and signed, but the user must trust it manually.
 */
class TrustCertTask extends gulp_core_build_1.GulpTask {
    constructor() {
        super('trust-cert');
    }
    executeTask(gulp, completeCallback) {
        const certificate = certificates_1.ensureCertificate(true, this);
        if (certificate.pemCertificate && certificate.pemKey) {
            completeCallback();
        }
        else {
            completeCallback('Error trusting development certificate.');
        }
    }
}
exports.TrustCertTask = TrustCertTask;
//# sourceMappingURL=TrustCertTask.js.map