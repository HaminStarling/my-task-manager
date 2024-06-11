// components/TaskForm.tsx
"use client";
import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col sm:flex-row items-center">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="เพิ่มงานใหม่"
        className="flex-1 border p-2 rounded-lg mb-2 sm:mb-0 sm:mr-2 w-full"
      />
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-500 text-white p-2 rounded-lg"
      >
        ADD
      </button>
    </form>
  );
};

export default TaskForm;
