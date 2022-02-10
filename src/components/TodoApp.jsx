import { useNotesStore } from "../context/Context";
import { useState } from "react";
import { useObserver } from "mobx-react";
const TodoApp = () => {
    const [todo,setTodo] = useState("");
    const store = useNotesStore();
    const addNote = (todo) => {
        store.addNote(todo);
        setTodo("")
    };
    return useObserver(() => (
        <div>
        <div className="mobx-todo-app-title"> 
        <h2>Mobx Todo App</h2>
        <h4 className="notes-left">Note(s) left: {store.notes.length}</h4>
        </div>
        <div className="mobx-todo-input">
        <input
          value={todo}
          className="inputEl"
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        />
            <button className="btnEl" onClick={() => addNote(todo)}>Add Task</button>
        </div>
        <div className="notes">
            {store.notes.map((todo) => {
                return (
                    <ul key={todo.id} className="todo">
                        <li>{todo.text}</li>
                        <button className="removeEl" onClick={() => store.removeNote(todo.id)}>Remove Task</button>
                    </ul>
                )
            })}
        </div>
      </div>
    ))
}
export default TodoApp;