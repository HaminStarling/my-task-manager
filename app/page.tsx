// pages/index.tsx
import TaskForm from '../app/component/Task-Form';
import TaskList from '../app/component/Task-List';
import { TaskProvider } from '../app/context/TaskContext';

const Home: React.FC = () => {
  return (
    <TaskProvider>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-5xl font-bold mb-6 text-center">Task Manager</h1>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default Home;

