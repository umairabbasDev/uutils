"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addZero = exports.numFormatter = void 0;
function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    }
    else if (num < 900) {
        return num;
    }
}
exports.numFormatter = numFormatter;
function addZero(num) {
    return num < 10 ? '0' + num : num;
}
exports.addZero = addZero;
