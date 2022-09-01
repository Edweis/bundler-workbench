"use strict";
exports.__esModule = true;
exports.handler = void 0;
var http_status_codes_1 = require("http-status-codes");
var dep_a_1 = require("./dep-a");
var handler = function () {
    var x = "hello";
    var y = "ciao";
    if (http_status_codes_1.StatusCodes.OK)
        console.log("They are equal!");
    if (true)
        console.log("This should alwasy show");
    if (false)
        console.log("This should never show");
    if (false)
        console.log((0, dep_a_1.depABis)("hello you"));
    if (process.env.NODE_ENV === 'production')
        console.log('should only show in PROD');
    console.log(process.env.NODE_ENV);
};
exports.handler = handler;
