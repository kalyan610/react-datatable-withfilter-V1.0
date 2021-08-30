import { Environment, EnvironmentType } from "@microsoft/sp-core-library";
import SPServiceMock from "./SPServiceMock";
import SPService from "./SPService";
var SPServiceFactory = /** @class */ (function () {
    function SPServiceFactory() {
    }
    SPServiceFactory.createService = function (context, includeDelay, delayTimeout, webAbsoluteUrl) {
        if (Environment.type === EnvironmentType.Local) {
            return new SPServiceMock(includeDelay, delayTimeout);
        }
        return new SPService(context, webAbsoluteUrl);
    };
    return SPServiceFactory;
}());
export { SPServiceFactory };
//# sourceMappingURL=SPServiceFactory.js.map