var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './RteColorPicker.module.scss';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { FocusZone, FocusZoneDirection, FocusZoneTabbableElements } from 'office-ui-fabric-react/lib/FocusZone';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import { chunk } from '@microsoft/sp-lodash-subset';
var SwatchColorPickerGroup = /** @class */ (function (_super) {
    __extends(SwatchColorPickerGroup, _super);
    function SwatchColorPickerGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwatchColorPickerGroup.prototype.render = function () {
        var _this = this;
        var colorRows = chunk(this.props.groupColors, 5);
        return (React.createElement("div", null,
            React.createElement(Label, { htmlFor: this.props.groupText, className: styles.pickerLabel }, this.props.groupText),
            React.createElement("div", { key: this.props.groupText },
                React.createElement(FocusZone, { direction: FocusZoneDirection.horizontal, handleTabKey: FocusZoneTabbableElements.all, isCircularNavigation: true, className: styles.focusedContainer },
                    React.createElement("table", { className: styles.tableRoot },
                        React.createElement("tbody", null, colorRows.map(function (cr, rowIndex) {
                            return (React.createElement("tr", { role: "row" }, cr.map(function (gc, index) {
                                return (React.createElement("td", { role: "presentation", className: styles.tableCell },
                                    React.createElement(ActionButton, { className: styles.colorCell, role: "gridCell", title: gc.label, "aria-label": gc.label, "aria-selected": _this.props.selectedColor === gc.color, "data-index": index, "data-is-focusable": true, id: _this.props.groupText + "-" + gc.id + "-" + index, onClick: function () { return _this.handleColorChanged(gc.color); } },
                                        React.createElement("svg", { className: styles.svg + " " + (_this.props.selectedColor.toUpperCase() === gc.color.toUpperCase() ? styles.selected : ""), viewBox: "0 0 20 20", fill: gc.color, focusable: "false" },
                                            React.createElement("rect", { width: "100%", height: "100%" })))));
                            })));
                        })))))));
    };
    SwatchColorPickerGroup.prototype.handleColorChanged = function (color) {
        this.props.onColorChanged(color);
    };
    return SwatchColorPickerGroup;
}(React.Component));
export default SwatchColorPickerGroup;
//# sourceMappingURL=SwatchColorPickerGroup.js.map