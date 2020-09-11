# arrayy 1.1.3

配列操作するための便利関数を提供したい。

---

## randomPick

```javascript
const [newArray, otherElements] = randomPick(array, quantity);
```

指定した配列からランダムに値を n 個取得します。

### 引数

- array: 対象となる配列

- quantity: ランダムに取得したい数

### 返り値

#### 配列 : [newArray, otherElements]

- newArray:引数(array)から要素をランダムに(quantity)個取得した新しい配列
- otherElements:引数(array)から引数の要素を取り除いた新しい配列

---

## shuffle

```javascript
const newArray = arrShuffle(array);
```

指定した配列の中身をシャッフルします。

### 引数

- array: 対象となる配列

### 返り値

#### newArr

- 引数(array)の要素の index をランダムに入れ替えた新しい配列
  <br />
  re
