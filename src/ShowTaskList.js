const ShowTaskList = ({task, tasks, setTasks, deleteTask}) => {
    if (tasks.length > 0){
        return (
            <ul className="taskList">
            {tasks.map((task, _) => (
                <div className="task">
                <li> {task} </li>
                
                <button
                    className="deleteButton"
                    onClick={() => {
                        const newTasks = [];
                        for (let curTask of tasks) {
                            if (curTask !== task){
                                newTasks.push(curTask);
                            }
                        }
                        setTasks(newTasks);
                    }}
                >Удалить</button>
                
                </div>
            ))}
            </ul>
        );
    }
    return <p>Поздравляем! Вы успешно справились со всеми задачами!</p>;
};

export default ShowTaskList;
