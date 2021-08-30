"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_core_build_1 = require("@microsoft/gulp-core-build");
const CertificateStore_1 = require("./CertificateStore");
const certificates_1 = require("./certificates");
/**
 * On Windows, this task removes the certificate with the expected serial number from the user's
 *  root certification authorities list. On macOS, it finds the SHA signature of the certificate
 *  with the expected serial number and then removes that certificate from the keychain. On
 *  other platforms, the user must untrust the certificate manually. On all platforms,
 *  the certificate and private key are deleted from the user's home directory.
 */
class UntrustCertTask extends gulp_core_build_1.GulpTask {
    constructor() {
        super('untrust-cert');
    }
    executeTask(gulp, completeCallback) {
        const untrustCertResult = certificates_1.untrustCertificate(this);
        const certificateStore = CertificateStore_1.CertificateStore.instance;
        // Clear out the certificate store
        certificateStore.certificateData = undefined;
        certificateStore.keyData = undefined;
        if (untrustCertResult) {
            completeCallback();
        }
        else {
            completeCallback('Error untrusting certificate.');
        }
    }
}
exports.UntrustCertTask = UntrustCertTask;
//# sourceMappingURL=UntrustCertTask.js.map