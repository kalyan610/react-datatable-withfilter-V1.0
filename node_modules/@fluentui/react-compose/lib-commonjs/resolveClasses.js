"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendClasses_1 = require("./appendClasses");
/**
 * Helper utility which takes in a classes array from compose options, resolves functions,
 * merges them into a final result, and distributes classnames to slotProps within the given
 * resolver result object.
 */
function resolveClasses(result, classes) {
    var state = result.state, slots = result.slots, slotProps = result.slotProps;
    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
        var classFunctionOrObject = classes_1[_i];
        var classObj = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof classFunctionOrObject === 'function' ? classFunctionOrObject(state, slots) : classFunctionOrObject;
        if (classObj) {
            for (var _a = 0, _b = Object.keys(classObj); _a < _b.length; _a++) {
                var slotName = _b[_a];
                if (classObj[slotName] && slots[slotName]) {
                    appendToSlotClassName(slotProps, slotName, classObj[slotName]);
                }
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendToSlotClassName(slotProps, 'root', state.className);
    return result;
}
exports.resolveClasses = resolveClasses;
function appendToSlotClassName(slotProps, slotName, className) {
    if (className) {
        var slot = (slotProps[slotName] = slotProps[slotName] || {});
        slot.className = appendClasses_1.appendClasses(slot.className, className);
    }
}
exports.appendToSlotClassName = appendToSlotClassName;
//# sourceMappingURL=resolveClasses.js.map