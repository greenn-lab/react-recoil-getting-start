import './App.css';
import {RecoilRoot} from "recoil";
import TodoList from "./todo/TodoList";

function App() {
  return (
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
  );
}

export default App;
