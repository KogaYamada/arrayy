"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.randomPick = void 0;
exports.randomPick = function (arr, quantity) {
    if (arr.length < quantity) {
        throw new Error();
    }
    var newArr = [];
    var copyArr = arr.concat();
    while (newArr.length < quantity) {
        var randomNum = Math.floor(Math.random() * copyArr.length);
        newArr.push(copyArr[randomNum]);
        copyArr.splice(randomNum, 1);
    }
    return [newArr, copyArr];
};
exports.shuffle = function (arr) {
    var newArr = [];
    var copyArr = arr.concat();
    while (copyArr.length) {
        var randomNum = Math.floor(Math.random() * copyArr.length);
        newArr.push(copyArr[randomNum]);
        copyArr.splice(randomNum, 1);
    }
    return newArr;
};
//# sourceMappingURL=index.js.map