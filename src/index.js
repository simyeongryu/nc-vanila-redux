import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// action.type
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// action
const addToDo = text => ({ type: ADD_TODO, text });
const deleteToDo = id => ({ type: DELETE_TODO, id });

// 절대로 MUTATE STATE를 하면 안 된다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // push() 등으로 state를 수정하지 않는다.
      // 이전 state 값을 유지하면서 새로운 state를 만들어 return
      // 새로운 state를 만들기 때문에 순서 등을 수정할 수 있다.
      return [...state, { id: Date.now(), text: action.text }];
    case DELETE_TODO:
      // action id 가 아닌 todo를 갖는 새로운 state 리턴
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchDeleteToDo = e => {
  // HTML에서 얻는 id는 string
  const id = Number(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const paintToDos = () => {
  const toDos = store.getState();
  // 남아있는 이전 state값을 지우기 위해 ul 초기화.
  ul.innerHTML = "";

  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);

    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);

    ul.appendChild(li);
  });
};

const onSubmit = e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  dispatchAddToDo(text);
};

store.subscribe(() => console.log(store.getState()));
store.subscribe(paintToDos);

form.addEventListener("submit", onSubmit);
