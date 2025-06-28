import { motion } from "framer-motion";
import { useState } from "react";

const Todo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-6 flex items-center justify-between flex-col gap-5 bg-blue-100"
    >
      <h1 className="w-full h-full font-mono text-center text-3xl bg-blue-50">
        hemlow this is a todo application built with love ❤️ by deepankar
      </h1>
    </motion.div>
  );
};
export default Todo;


