# Vanila Redux

# 1.0 Vanila Counter

간단한 숫자 Counter를 바닐라 스크립트로 만든다.

index.html

```html
<button id="plus">Plus</button>
  <span>0</span>
<button id="minus">Minus</button>
```

index.js

```js
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateNumber = () => {
  number.innerText = count;
};

const handlePlus = () => {
  count++;
  updateNumber();
};

const handleMinus = () => {
  count--;
  updateNumber();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
```