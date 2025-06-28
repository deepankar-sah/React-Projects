import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// DarkMode Provider
import { useDarkMode } from "./context/DarkModeContext";
//Components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import DarkModeToggle from "./components/DarkModeToggle"

const Todo = () => {

  const {darkMode} = useDarkMode()
  //Todo State Management
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, dueDate) => {
    const newTodo = {
      id: Date.now(),
      text,
      dueDate,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter ===  "active") return !todo.completed;
    if (filter ===  "completed") return todo.completed;
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`py-6 flex items-center justify-between flex-col gap-5 ${ darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-black"}`}
    >
      <h1 className="w-full h-full font-mono text-center text-3xl ">
        Hemlow this is a ToDo application built with love ❤️ by deepankar
      </h1>
      <DarkModeToggle/>
      <motion.div className="w-[600px] h-[600px] py-4 px-3 gap-3 flex flex-col items-start justify-items-start bg-blue-50 rounded-2xl border-gray-200 drop-shadow-black">
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          setTodos={setTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </motion.div>
    </motion.div>
  );
};
export default Todo;
