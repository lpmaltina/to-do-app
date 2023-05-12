import { useState } from "react";
import InputTaskField from "./InputTaskField";
import AddTaskButton from "./AddTaskButton";
import ShowTaskList from "./ShowTaskList";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [addStatus, setAddStatus] = useState("");
    
    return (
        <div className="App">
            <h1>Список дел</h1>
            <InputTaskField task={task} setTask={setTask} />
            <AddTaskButton task={task} tasks={tasks} setTask={setTask} setTasks={setTasks} setAddStatus={setAddStatus} />
            <p> {addStatus} </p>
            <h2>Задачи</h2>
            <ShowTaskList task={task} tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;
