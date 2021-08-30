"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const ServeTask_1 = require("./ServeTask");
const ReloadTask_1 = require("./ReloadTask");
const TrustCertTask_1 = require("./TrustCertTask");
const UntrustCertTask_1 = require("./UntrustCertTask");
/**
 * @public
 */
exports.serve = new ServeTask_1.ServeTask();
/**
 * @public
 */
exports.reload = new ReloadTask_1.ReloadTask();
/**
 * @public
 */
exports.trustDevCert = new TrustCertTask_1.TrustCertTask();
/**
 * @public
 */
exports.untrustDevCert = new UntrustCertTask_1.UntrustCertTask();
exports.default = exports.serve; // tslint:disable-line:export-name
//# sourceMappingURL=index.js.map