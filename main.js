const {createStore} = Redux;

const reducer = (state, {type,payload}) => {  
  if (type === "INC") {
    return state + payload;
  }
  if (type === "DEC") {
    return state - payload;
  }
  return state;
}

const store = createStore(reducer, state = 0);

store.subscribe(() => {
  console.log("store changed to:  " + store.getState());
})

store.dispatch({type: "INC", payload: 5});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "INC", payload: 33});
store.dispatch({type: "DEC", payload: 55});