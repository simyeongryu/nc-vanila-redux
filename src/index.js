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
