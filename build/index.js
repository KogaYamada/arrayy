"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrShuffle = exports.arrRandom = void 0;
exports.arrRandom = function (arr, quantity) {
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
exports.arrShuffle = function (arr) {
    var newArr = [];
    var copyArr = arr.concat();
    while (copyArr.length) {
        var randomNum = Math.floor(Math.random() * copyArr.length);
        newArr.push(copyArr[randomNum]);
        copyArr.splice(randomNum, 1);
    }
    return newArr;
};
var cards = [
    { title: 'カード1', id: '1' },
    { title: 'カード2', id: '2' },
    { title: 'カード3', id: '3' },
    { title: 'カード4', id: '4' },
    { title: 'カード5', id: '5' },
    { title: 'カード6', id: '6' },
    { title: 'カード7', id: '7' },
    { title: 'カード8', id: '8' },
    { title: 'カード9', id: '9' },
    { title: 'カード10', id: '10' },
    { title: 'カード11', id: '11' },
    { title: 'カード12', id: '12' },
    { title: 'カード13', id: '13' },
    { title: 'カード14', id: '14' },
    { title: 'カード15', id: '15' },
    { title: 'カード16', id: '16' },
    { title: 'カード17', id: '17' },
    { title: 'カード18', id: '18' },
    { title: 'カード19', id: '19' },
    { title: 'カード20', id: '20' },
];
console.log(exports.arrRandom(cards, 5));
