import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { TasksInfo } from "./components/TasksInfo";
import { TasksList } from "./components/TasksList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto ">
      <Header />
      <Tasks tasks={tasks} setTasks={setTasks} />
      <TasksInfo tasks={tasks} />
      <TasksList handleTask={tasks} handleChangeTask={setTasks} />
    </div>
  );
}

export default App;
