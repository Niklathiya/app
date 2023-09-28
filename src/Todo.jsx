import { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const onClickAdd = () => {
    if (newTodo.trim() === "") return;
    const todo = {
      id: Date.now(),
      title: newTodo,
      complete: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const onClickEdit = (editedtodo) => {
    if (editedtodo.title.trim() === "") return;
    const updatetodo = todos.map((todo) =>
      todo.id === editedtodo.id ? editedtodo : todo
    );
    setTodos(updatetodo);
    setEditTodo(null);
  };

  const onClickDelete = (id) => {
    const filtertodo = todos.filter((todo) => todo.id !== id);
    setTodos(filtertodo);
  };

  const handleToggleComplete = (id) => {
    const toggletodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(toggletodo);
  };

  return (
    <>
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="enter your todo task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={onClickAdd}>Add</button>

      <>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {editTodo && editTodo.id === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editTodo.title}
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, title: e.target.value })
                    }
                  />
                  <button onClick={() => onClickEdit(editTodo)}>save</button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "",
                    }}
                  >
                    {todo.title}
                  </span>
                  <button onClick={() => handleToggleComplete(todo.id)}>
                    {todo.completed ? "Uncomplete" : "Complete"}
                  </button>
                  <button onClick={() => setEditTodo(todo)}>Edit</button>
                  <button onClick={() => onClickDelete(todo.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </>
    </>
  );
}
export default TodoList;
