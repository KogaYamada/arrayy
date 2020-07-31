# arrayy

https://www.npmjs.com/package/arrayy
<br >
配列操作するための便利関数を提供したい。
<br >

## arrRandom

`const newArr = getRandom(array, quantity)`
<br >
指定した配列からランダムに値を n 個取得します。
<br >

### 引数

#### array

対象となる配列

#### quantity

ランダムに取得したい数

### 返り値

#### [newArr, copyArr]

newArr:引数(array)から要素をランダムに(quantity)個取得した新しい配列
<br />
copyArr:引数(array)から引数の要素を取り除いた配列

## arrShuffle

`const newArr = arrShuffle(array)`
<br >
指定した配列の中身をシャッフルします。
<br >

### 引数

#### array

対象となる配列

### 返り値

#### newArr

引数(array)の要素の index をランダムに入れ替えた新しい配列
