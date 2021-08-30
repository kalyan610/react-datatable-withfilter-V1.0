define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultComposeOptions = {
        className: process.env.NODE_ENV === 'production' ? '' : 'no-classname-🙉',
        classes: [],
        displayName: '',
        displayNames: [],
        mapPropsToStylesPropsChain: [],
        render: function () { return null; },
        handledProps: [],
        overrideStyles: false,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        slots: { __self: function () { return null; } },
        slotProps: [],
        state: function (props) { return props; },
        resolveSlotProps: function () { return ({}); },
        shorthandConfig: {},
    };
});
//# sourceMappingURL=defaultComposeOptions.js.map