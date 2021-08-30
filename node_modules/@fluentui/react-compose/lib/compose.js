import { __assign } from "tslib";
import * as React from 'react';
import { wasComposedPreviously } from './wasComposedPreviously';
import { mergeComposeOptions } from './mergeComposeOptions';
function compose(input, inputOptions) {
    if (inputOptions === void 0) { inputOptions = {}; }
    var composeOptions = mergeComposeOptions(input, inputOptions, wasComposedPreviously(input) ? input.fluentComposeConfig : undefined);
    var Component = React.forwardRef(function (props, ref) {
        return composeOptions.render(props, ref, __assign(__assign({}, composeOptions), { state: composeOptions.state(props, ref, composeOptions), slots: __assign(__assign({}, composeOptions.slots), { __self: Component }) }));
    });
    Component.displayName = composeOptions.displayName;
    if (input.defaultProps) {
        Component.defaultProps = input.defaultProps;
    }
    Component.fluentComposeConfig = composeOptions;
    return Component;
}
export default compose;
//# sourceMappingURL=compose.js.map