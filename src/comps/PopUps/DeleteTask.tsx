interface DeleteTask__Inputs {
    taskID: Number | null
    setTaskID: Function
    tasks: (any)[]
    setTasks: Function
    viewDeleteTask: Boolean
    setViewDeleteTask: Function
}


export default function DeleteTask({ taskID, setTaskID, tasks, setTasks, viewDeleteTask, setViewDeleteTask }: DeleteTask__Inputs) {
    const description = tasks.map((task) => task.id == taskID && task.description)
    
    function handleDelete() {
        setTasks(tasks.filter((task) => task.id != taskID))
        setTaskID(null)
        setViewDeleteTask(false)
    }
    function handleCancel() {
        setTaskID(null);
        setViewDeleteTask(false)
    }
    return <div style={{
        opacity: viewDeleteTask ? '1' : '0', pointerEvents: viewDeleteTask ? 'initial' : 'none'}} className="PopUp DeleteTask Container--col">
                <h2 className="PopUp--DeleteTask__Title">Are you sure you want to delete this task?</h2>
        <p className="PopUp--DeleteTask__Description">{description}</p>
                <div className="PopUp--DeleteTask__Buttons Container--row">
                    <button onClick={handleDelete} className="PopUp--DeleteTask__Button">DELETE</button>
                    <div onClick={handleCancel} className="PopUp--DeleteTask__Button">CANCEL</div>
                </div>
            </div>
}