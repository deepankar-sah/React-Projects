import { DragDropContext, Droppable,Draggable } from "@hello-pangea/dnd"
import { motion, AnimatePresence } from "framer-motion"

const TodoList = ({todos, setTodos, toggleTodo, deleteTodo, editTodo}) => {
        const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = [...todos];
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setTodos(reordered);
  };


  return (
    <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todo-list">
            {(provided) =>  (
                <ul {...  provided.droppableProps}
                ref={provided.innerRef}
                className="w-full ">
                   <AnimatePresence>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                  {(provided) => (
                    <motion.li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="w-full bg-white dark:bg-gray-800 dark:text-white p-3 my-2 rounded shadow flex justify-between items-center"
                    >
                      <span
                        onClick={() => toggleTodo(todo.id)}
                        className={`w-full cursor-pointer flex-1 ${
                          todo.completed ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {todo.text}
                      </span>

                      <button
                        onClick={() => {
                          const updated = prompt("Edit task", todo.text);
                          if (updated) editTodo(todo.id, updated);
                        }}
                        className="text-blue-500 mx-2"
                      >
                        ✏️
                      </button>

                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-500"
                      >
                        ❌
                      </button>
                    </motion.li>
                  )}
                </Draggable>
              ))}
            </AnimatePresence>
            {provided.placeholder} 
                </ul>
            )}
        </Droppable>
    </DragDropContext>
  )
}
export default TodoList