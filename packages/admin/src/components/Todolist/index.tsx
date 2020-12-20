import React, { useState } from "react";
import { connect } from "react-redux";

function TodoList(props: any) {
  let [num, setNum] = useState(0);
  function handleBtnClick() {
    setNum(++num);
  }
  return (
    <div>
      <div>
        <input value={props.inputValue} onChange={props.handleInputChange} />
        {num}
        <button onClick={handleBtnClick}>{props.children}</button>
      </div>
      <ul>
        <li>Dell</li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    inputValue: state.inputValue,
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    handleInputChange(e: any) {
      const action = {
        type: "change_input_value",
        value: e.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
