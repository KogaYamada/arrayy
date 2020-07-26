"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrShuffle = exports.arrRandom = void 0;
exports.arrRandom = function (arr, quantity) {
    if (arr.length < quantity) {
        throw new Error();
    }
    var newArr = [];
    var copyArr = arr.map(function (el) { return el; });
    while (newArr.length < quantity) {
        var randomNum = Math.floor(Math.random() * copyArr.length);
        newArr.push(copyArr[randomNum]);
        copyArr.splice(randomNum, 1);
    }
    return newArr;
};
exports.arrShuffle = function (arr) {
    var newArr = [];
    var copyArr = arr.map(function (el) { return el; });
    while (copyArr.length) {
        var randomNum = Math.floor(Math.random() * copyArr.length);
        newArr.push(copyArr[randomNum]);
        copyArr.splice(randomNum, 1);
    }
    return newArr;
};
