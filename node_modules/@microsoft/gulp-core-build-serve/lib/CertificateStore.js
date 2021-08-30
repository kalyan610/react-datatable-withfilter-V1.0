"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const os_1 = require("os");
const node_core_library_1 = require("@microsoft/node-core-library");
class CertificateStore {
    static get instance() {
        if (!CertificateStore._instance) {
            CertificateStore._instance = new CertificateStore();
            CertificateStore._instance._initialize();
        }
        return CertificateStore._instance;
    }
    get certificatePath() {
        return this._certificatePath;
    }
    get certificateData() {
        if (!this._certificateData) {
            if (node_core_library_1.FileSystem.exists(this._certificatePath)) {
                this._certificateData = node_core_library_1.FileSystem.readFile(this._certificatePath);
            }
            else {
                return undefined;
            }
        }
        return this._certificateData;
    }
    set certificateData(certificate) {
        if (certificate) {
            node_core_library_1.FileSystem.writeFile(this._certificatePath, certificate);
        }
        else if (node_core_library_1.FileSystem.exists(this._certificatePath)) {
            node_core_library_1.FileSystem.deleteFile(this._certificatePath);
        }
        this._certificateData = certificate;
    }
    get keyData() {
        if (!this._keyData) {
            if (node_core_library_1.FileSystem.exists(this._keyPath)) {
                this._keyData = node_core_library_1.FileSystem.readFile(this._keyPath);
            }
            else {
                return undefined;
            }
        }
        return this._keyData;
    }
    set keyData(key) {
        if (key) {
            node_core_library_1.FileSystem.writeFile(this._keyPath, key);
        }
        else if (node_core_library_1.FileSystem.exists(this._keyPath)) {
            node_core_library_1.FileSystem.deleteFile(this._keyPath);
        }
        this._keyData = key;
    }
    _initialize() {
        const unresolvedUserFolder = os_1.homedir();
        this._userProfilePath = path.resolve(unresolvedUserFolder);
        if (!node_core_library_1.FileSystem.exists(this._userProfilePath)) {
            throw new Error('Unable to determine the current user\'s home directory');
        }
        this._gcbServeDataPath = path.join(this._userProfilePath, '.gcb-serve-data');
        node_core_library_1.FileSystem.ensureFolder(this._gcbServeDataPath);
        this._certificatePath = path.join(this._gcbServeDataPath, 'gcb-serve.cer');
        this._keyPath = path.join(this._gcbServeDataPath, 'gcb-serve.key');
    }
}
exports.CertificateStore = CertificateStore;
//# sourceMappingURL=CertificateStore.js.map