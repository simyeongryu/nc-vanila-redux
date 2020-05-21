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
