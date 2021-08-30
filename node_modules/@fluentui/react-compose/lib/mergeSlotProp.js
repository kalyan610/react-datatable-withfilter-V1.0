import { __assign } from "tslib";
import * as React from 'react';
/**
 * Merge props for a slot to a slot prop.
 * @param slotProp - Slot prop.
 * @param slotProps - Props for the slot.
 * @param mappedProp - Optional mapped prop name for the slotProp after merging.
 */
export function mergeSlotProp(slotProp, slotProps, mappedProp) {
    var _a;
    if (mappedProp === void 0) { mappedProp = 'children'; }
    if (typeof slotProp === 'object' && !React.isValidElement(slotProp)) {
        return __assign(__assign({}, slotProp), slotProps);
    }
    else {
        return __assign((_a = {}, _a[mappedProp] = slotProp, _a), slotProps);
    }
}
//# sourceMappingURL=mergeSlotProp.js.map