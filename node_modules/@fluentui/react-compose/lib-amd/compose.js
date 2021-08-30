define(["require", "exports", "tslib", "react", "./wasComposedPreviously", "./mergeComposeOptions"], function (require, exports, tslib_1, React, wasComposedPreviously_1, mergeComposeOptions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function compose(input, inputOptions) {
        if (inputOptions === void 0) { inputOptions = {}; }
        var composeOptions = mergeComposeOptions_1.mergeComposeOptions(input, inputOptions, wasComposedPreviously_1.wasComposedPreviously(input) ? input.fluentComposeConfig : undefined);
        var Component = React.forwardRef(function (props, ref) {
            return composeOptions.render(props, ref, tslib_1.__assign(tslib_1.__assign({}, composeOptions), { state: composeOptions.state(props, ref, composeOptions), slots: tslib_1.__assign(tslib_1.__assign({}, composeOptions.slots), { __self: Component }) }));
        });
        Component.displayName = composeOptions.displayName;
        if (input.defaultProps) {
            Component.defaultProps = input.defaultProps;
        }
        Component.fluentComposeConfig = composeOptions;
        return Component;
    }
    exports.default = compose;
});
//# sourceMappingURL=compose.js.map