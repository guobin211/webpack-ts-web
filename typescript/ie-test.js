"use strict";
exports.__esModule = true;
exports.ieTest = void 0;
function ieTest(params) {
    console.log(params);
    return function (other) {
        return params + " and " + other;
    };
}
exports.ieTest = ieTest;
