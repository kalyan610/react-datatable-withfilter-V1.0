export function appendClasses() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    var result = '';
    for (var _a = 0, classes_1 = classes; _a < classes_1.length; _a++) {
        var className = classes_1[_a];
        if (className) {
            result = (result ? result + " " : '') + className;
        }
    }
    return result;
}
//# sourceMappingURL=appendClasses.js.map