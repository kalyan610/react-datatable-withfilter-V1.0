import { __assign, __spreadArrays } from "tslib";
import { computeDisplayNames } from './computeDisplayNames';
import { defaultComposeOptions } from './defaultComposeOptions';
export function mergeComposeOptions(input, inputOptions, parentOptions) {
    if (parentOptions === void 0) { parentOptions = defaultComposeOptions; }
    var mapPropsToSlotPropsChain = inputOptions.slotProps
        ? __spreadArrays(parentOptions.slotProps, [inputOptions.slotProps]) : parentOptions.slotProps;
    var resolveSlotProps = function (props) {
        return mapPropsToSlotPropsChain.reduce(function (acc, definition) {
            var nextProps = __assign({}, definition(props));
            var slots = __spreadArrays(Object.keys(acc), Object.keys(nextProps));
            var mergedSlotProps = {};
            slots.forEach(function (slot) {
                if (!mergedSlotProps[slot]) {
                    mergedSlotProps[slot] = __assign(__assign({}, acc[slot]), nextProps[slot]);
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
        classes: __spreadArrays(parentOptions.classes, inputClasses),
        displayName: inputOptions.displayName || parentOptions.displayName,
        displayNames: computeDisplayNames(inputOptions, parentOptions),
        mapPropsToStylesPropsChain: inputOptions.mapPropsToStylesProps
            ? __spreadArrays(parentOptions.mapPropsToStylesPropsChain, [inputOptions.mapPropsToStylesProps]) : parentOptions.mapPropsToStylesPropsChain,
        render: typeof input === 'function' ? input : parentOptions.render,
        handledProps: __spreadArrays(parentOptions.handledProps, (inputOptions.handledProps || [])),
        overrideStyles: inputOptions.overrideStyles || false,
        slots: __assign(__assign({}, parentOptions.slots), inputOptions.slots),
        slotProps: mapPropsToSlotPropsChain,
        state: state,
        resolveSlotProps: resolveSlotProps,
        shorthandConfig: __assign(__assign({}, parentOptions.shorthandConfig), inputOptions.shorthandConfig),
    };
}
//# sourceMappingURL=mergeComposeOptions.js.map