import {atom, useRecoilState} from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

export const todoListState = atom({
  key: 'todoListState',
  default: []
})

export const TodoList = () => {
  const todoList = useRecoilState(todoListState)

  return (
      <>
        <TodoItemCreator/>

        {
          todoList.map(todo => <TodoItem key={todo.id} todo={todo}/>)
        }
      </>
  )
}

export default TodoList
