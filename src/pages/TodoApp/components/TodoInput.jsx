import { motion } from "framer-motion";
import { useState } from "react";

const TodoInput = ({addTodo}) => {

    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (text.trim() ===  "") return;
        addTodo(text,dueDate);
        setText("");
        setDueDate("");
    };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full h-auto gap-3 py-2 flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        type="text"
        placeholder="Add a task...."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-[40px]  rounded-2xl flex  text-center border-none focus:outline-none focus:ring-0 focus:border-transparent dark:bg-black dark:text-white light: "
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full h-[40px]  rounded-2xl flex  text-center border-none focus:outline-none focus:ring-0 focus:border-transparent dark:bg-black dark:text-white "
      />

      <motion.button
        type="submit"
        whileTap={{ scale: 0.9 }}
        className="w-full bg-white text-black px-4 py-2 rounded-2xl"
      >
        Add
      </motion.button>
    </motion.form>
  );
};
export default TodoInput;
