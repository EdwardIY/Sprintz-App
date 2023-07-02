interface DeleteTask__Inputs {
    taskID: Number | null
    setTaskID: Function
    tasksToday: (any)[]
    setTasksToday: Function
    taskPopUpState: any
    setTaskPopUpState: Function
}


export default function DeleteTask({ taskID, setTaskID, tasksToday, setTasksToday, taskPopUpState, setTaskPopUpState }: DeleteTask__Inputs) {
    const description = tasksToday.map((task) => task.id == taskID && task.description)
    
    function handleDelete() {
        setTasksToday(tasksToday.filter((task) => task.id != taskID))
        setTaskID(null)
        setTaskPopUpState({...taskPopUpState, viewDeleteTask: false})
    }
    function handleCancel() {
        setTaskID(null);
        setTaskPopUpState({...taskPopUpState, viewDeleteTask: false})
    }
    return <>
            <div className='Background'></div>
            <div className="PopUp DeleteTask Container--col">
                <h2 className="">Are you sure you want to delete this task?</h2>
                <p className="PopUp--DeleteTask__Description">{description}</p>
                <div className="PopUp__Buttons Container--row">
                    <button onClick={handleDelete} className="PopUp__Button">DELETE</button>
                    <div onClick={handleCancel} className="PopUp__Button">CANCEL</div>
                </div>
            </div>
    </> 
}