# Vanila Redux

## 1.0 Vanila Counter

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

## 1.1

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

## 1.2 

store.dispatch(action) 으로 reducer와 소통한다.

```js
import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// store는 reducer를 요구한다. reducer는 데이터를 수정하는 함수다.
// reducer(state, action);
// reducer가 return 하는 것이 state를 대체한다.
// redux의 강점은 state를 한 곳에서 관리하는 것이다.
// state를 수정할 수 있는 곳은 오직 reducer
// 조건분기는 action으로 한다. reducer의 두번째 args
// action은 plain object여야 한다.
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
// createStore는 store를 만든다.
const countStore = createStore(countModifier);
// action 은 dispatch() 안에 있는 args를 action으로 reducer를 호출한다.
// dispatch로 reducer를 부른다.
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "ADD" });

console.log(countStore.getState());
```

## 1.3
```js
import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// store는 reducer를 요구한다. reducer는 데이터를 수정하는 함수다.
// reducer(state, action);
// reducer가 return 하는 것이 state를 대체한다.
// redux의 강점은 state를 한 곳에서 관리하는 것이다.
// state를 수정할 수 있는 곳은 오직 reducer
// 조건분기는 action으로 한다. reducer의 두번째 args
// action은 plain object여야 한다.
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
// createStore는 store를 만든다.
const countStore = createStore(countModifier);
// countStore.getState()는 store 내 현재 state를 조회한다.
const onChange = () => {
  number.innerText = countStore.getState();
};
// countStore.subscribe() 는 store안의 state가 변화하면 실행되고 args를 실행.
countStore.subscribe(onChange);
// action 객체는 type 프로퍼티가 반드시 필요하다.
plus.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});

```
## 1.4
switch문, action 변수화

```js
import { createStore } from "redux";

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

// action.type을 변수로 지정하면 디버깅하기 쉽다.
// 만약 오타를 내면 변수 에러가 뜨기 때문
const ADD = "ADD";
const MINUS = "MINUS";

// reducer는 switch를 쓰면 좀더 가독성이 좋다.
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

plus.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

```

## 2.0

바닐라 스크립트로 짠 todo 리스트

index.html

```html
<body>
    <h1>TO DO</h1>
    <form>
      <input type="text" placeholder="write to do" />
      <button>ADD</button>
      <ul></ul>
    </form>
  </body>
```

index.js

```js
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = toDo => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
```

하지만 이건 단순히 HTML을 변경시킬 뿐이어서 새로고침 등을 하면 다 사라진다.

```js
import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 절대로 MUTATE STATE를 하면 안 된다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  // dispatch로 reducer 실행
  // action의 다른 프로퍼티로 input의 value를 reducer로 전달
  store.dispatch({ type: ADD_TODO, text });
};

form.addEventListener("submit", onSubmit);
```
