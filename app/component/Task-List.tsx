// components/TaskList.tsx
"use client";
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList: React.FC = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center mb-4 p-2 border rounded-lg bg-gray-50"
        >
          <span
            onClick={() => toggleTask(task.id)}
            className={`flex-1 cursor-pointer ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.title}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="ml-4 bg-red-500 text-white p-1 rounded-lg"
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

