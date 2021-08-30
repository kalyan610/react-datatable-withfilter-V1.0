"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * compose() allows you to pass two inputs:
 * - React.forwardRef + static fluentComposeConfig, i.e. previously composed component
 * - a function
 */
function wasComposedPreviously(input) {
    return !!input.fluentComposeConfig;
}
exports.wasComposedPreviously = wasComposedPreviously;
//# sourceMappingURL=wasComposedPreviously.js.map