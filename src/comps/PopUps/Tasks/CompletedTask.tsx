interface CompletedTask__Inputs {
    taskID: Number | null
    setTaskID: Function
    tasksToday: (any)[]
    setTasksToday: Function
    taskPopUpState: any
    setTaskPopUpState: Function
}

export default  function ConpletedTask({ taskID, setTaskID, tasksToday, setTasksToday,taskPopUpState,setTaskPopUpState }: CompletedTask__Inputs) {
    const description = tasksToday.map((task) => task.id == taskID && task.description)
    
    function handleYes() {
        setTasksToday(tasksToday.filter((task) => task.id != taskID))
        setTaskID(null)
        setTaskPopUpState({...taskPopUpState,viewCompletedTask: false})
    }
    function handleNo() {
        setTaskID(null);
        setTaskPopUpState({...taskPopUpState,viewCompletedTask: false})
    }
    return <div style={{
        opacity: taskPopUpState.viewCompletedTask ? '1' : '0', pointerEvents: taskPopUpState.viewCompletedTask ? 'initial' : 'none'}} className="PopUp CompletedTask Container--col">
                <h2 className="">Task Completed?</h2>
                <p className="PopUp--CompletedTask__Description">{description}</p>
                <div className="PopUp__Buttons Container--row">
                    <button onClick={handleYes} className="PopUp__Button">Yes</button>
                    <div onClick={handleNo} className="PopUp__Button">No</div>
                </div>
            </div>
}