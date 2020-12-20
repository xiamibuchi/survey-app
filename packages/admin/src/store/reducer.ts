interface State {
  token: string;
  [propName: string]: any;
}

interface Action {
  type: string;
  value: any;
}

const defaultState: State = {
  token: "123",
  inputValue: "233",
};

function reducer(state = defaultState, action: Action) {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state)); // 对之前的state做一次深拷贝
    newState.inputValue = action.value;
    return newState;
  }
  return state;
}

export default reducer;
