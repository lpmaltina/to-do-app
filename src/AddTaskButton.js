const addTaskButton = ({task, tasks, setTask, setTasks, setAddStatus}) => {
    return (
        <button
                className="addButton"
                onClick={() => {
                    if (task === ""){
                        setAddStatus("Введите название задачи!");
                    } else if (tasks.includes(task)){
                        setAddStatus("Такая задача уже есть!");
                    } else {
                        setTasks([...tasks, task]);
                        setTask("");
                        setAddStatus("Задача успешно добавлена!");
                    }
                }}
            >Добавить</button>
    );
};

export default addTaskButton;
