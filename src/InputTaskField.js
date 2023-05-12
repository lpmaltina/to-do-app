const InputTaskField = ({task, setTask}) => {
    return (
        <input
            type="text"
            name="taskInputField"
            value={task}
            placeholder="Новая задача"
            onChange={(e) => {
               setTask(e.target.value);
            }}
        />
    );
}

export default InputTaskField;
