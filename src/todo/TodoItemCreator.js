import {useSetRecoilState} from "recoil";
import {useState} from "react";
import {todoListState} from "./TodoList";

let id = 0; // 고유한 Id 생성을 위한 유틸리티

function getId() {
  return id++;
}

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
      <div>
        <input type="text" value={inputValue} onChange={onChange}/>
        <button onClick={addItem}>Add</button>
      </div>
  );
}

export default TodoItemCreator
