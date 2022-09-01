"use strict";
exports.__esModule = true;
exports.Foo = exports.depA = exports.depABis = void 0;
var depABis = function (str) {
    if (str === "1") {
        return 12;
    }
};
exports.depABis = depABis;
var depA = function (str) {
    if (str === "1") {
        return 12;
    }
};
exports.depA = depA;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.bar = function () {
        var x = 12;
        x = x + 2;
    };
    return Foo;
}());
exports.Foo = Foo;
