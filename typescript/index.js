"use strict";
exports.__esModule = true;
var ie_test_1 = require("./ie-test");
var fs_1 = require("fs");
ie_test_1.ieTest('Tom')('Jerry');
var files = fs_1.readdirSync(__dirname);
files.forEach(console.log);
