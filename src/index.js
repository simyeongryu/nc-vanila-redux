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
// countStore.subscribe() 는 store안의 state가 변화하면 실행한다.
countStore.subscribe(onChange);

plus.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
