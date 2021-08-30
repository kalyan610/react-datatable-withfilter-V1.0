define(["require", "exports", "tslib", "react"], function (require, exports, tslib_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Merge props for a slot to a slot prop.
     * @param slotProp - Slot prop.
     * @param slotProps - Props for the slot.
     * @param mappedProp - Optional mapped prop name for the slotProp after merging.
     */
    function mergeSlotProp(slotProp, slotProps, mappedProp) {
        var _a;
        if (mappedProp === void 0) { mappedProp = 'children'; }
        if (typeof slotProp === 'object' && !React.isValidElement(slotProp)) {
            return tslib_1.__assign(tslib_1.__assign({}, slotProp), slotProps);
        }
        else {
            return tslib_1.__assign((_a = {}, _a[mappedProp] = slotProp, _a), slotProps);
        }
    }
    exports.mergeSlotProp = mergeSlotProp;
});
//# sourceMappingURL=mergeSlotProp.js.map