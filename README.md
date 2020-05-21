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

# 1.1

```
$ yarn add redux
```

리덕스 사용
1. store를 만든다. store는 state(변하는 데이터)를 저장하는 곳이다.
2. reducer라는 함수를 만든다. data를 modify하는 함수다.

리덕스의 강점은 app 내의 모든 state(변화하는 데이터)를 한 곳에서 관리할 수 있다는 것이다.

```js
import { createStore } from "redux";

// store는 date, 즉 state를 집어넣는 곳이다.
// state는 어플리케이션 내에서 변하는 데이터다.
// 아래 예시에선 count다.
// 리덕스는 변하는 데이터를 관리학;위해 생겼다.

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// store는 reducer를 요구한다. reducer는 데이터를 수정하는 함수다.
// reducer가 return 하는 것이 state를 대체한다.
const countModifier = () => {
  return "Hello";
};

const countStore = createStore(countModifier);
// Hello가 등장.
console.log(countStore.getState());
```

```js
import { createStore } from "redux";



const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// store는 reducer를 요구한다. reducer는 데이터를 수정하는 함수다.
// reducer가 return 하는 것이 state를 대체한다.
// redux의 강점은 state를 한 곳에서 관리하는 것이다.
// state를 수정할 수 있는 곳은 오직 reducer
const countModifier = (count = 0) => {
  // state 수정
  return count;
};

const countStore = createStore(countModifier);

```