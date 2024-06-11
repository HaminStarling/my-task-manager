// context/TaskContext.tsx
"use client";
import { createContext, useState, ReactNode } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  toggleTask: () => {},
  deleteTask: () => {},
});

interface TaskProviderProps {
  children: ReactNode;
}

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    
  ]);

  const addTask = (title: string) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
