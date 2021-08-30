define(["require", "exports", "tslib", "./computeDisplayNames", "./defaultComposeOptions"], function (require, exports, tslib_1, computeDisplayNames_1, defaultComposeOptions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function mergeComposeOptions(input, inputOptions, parentOptions) {
        if (parentOptions === void 0) { parentOptions = defaultComposeOptions_1.defaultComposeOptions; }
        var mapPropsToSlotPropsChain = inputOptions.slotProps
            ? tslib_1.__spreadArrays(parentOptions.slotProps, [inputOptions.slotProps]) : parentOptions.slotProps;
        var resolveSlotProps = function (props) {
            return mapPropsToSlotPropsChain.reduce(function (acc, definition) {
                var nextProps = tslib_1.__assign({}, definition(props));
                var slots = tslib_1.__spreadArrays(Object.keys(acc), Object.keys(nextProps));
                var mergedSlotProps = {};
                slots.forEach(function (slot) {
                    if (!mergedSlotProps[slot]) {
                        mergedSlotProps[slot] = tslib_1.__assign(tslib_1.__assign({}, acc[slot]), nextProps[slot]);
                    }
                });
                return mergedSlotProps;
            }, {});
        };
        var inputClasses = Array.isArray(inputOptions.classes) ? inputOptions.classes : [inputOptions.classes];
        var state = function (props, ref, options) {
            if (inputOptions.state) {
                return inputOptions.state(parentOptions.state(props, ref, options), ref, options);
            }
            return parentOptions.state(props, ref, options);
        };
        return {
            className: inputOptions.className || parentOptions.className,
            classes: tslib_1.__spreadArrays(parentOptions.classes, inputClasses),
            displayName: inputOptions.displayName || parentOptions.displayName,
            displayNames: computeDisplayNames_1.computeDisplayNames(inputOptions, parentOptions),
            mapPropsToStylesPropsChain: inputOptions.mapPropsToStylesProps
                ? tslib_1.__spreadArrays(parentOptions.mapPropsToStylesPropsChain, [inputOptions.mapPropsToStylesProps]) : parentOptions.mapPropsToStylesPropsChain,
            render: typeof input === 'function' ? input : parentOptions.render,
            handledProps: tslib_1.__spreadArrays(parentOptions.handledProps, (inputOptions.handledProps || [])),
            overrideStyles: inputOptions.overrideStyles || false,
            slots: tslib_1.__assign(tslib_1.__assign({}, parentOptions.slots), inputOptions.slots),
            slotProps: mapPropsToSlotPropsChain,
            state: state,
            resolveSlotProps: resolveSlotProps,
            shorthandConfig: tslib_1.__assign(tslib_1.__assign({}, parentOptions.shorthandConfig), inputOptions.shorthandConfig),
        };
    }
    exports.mergeComposeOptions = mergeComposeOptions;
});
//# sourceMappingURL=mergeComposeOptions.js.map