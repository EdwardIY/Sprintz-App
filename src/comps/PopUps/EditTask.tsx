import { useRef } from "react"

interface EditTask__Inputs {
    taskID: number | null
    setTaskID: Function
    tasksToday: (any)[]
    setTasksToday: Function 
    taskPopUpState: any
    setTaskPopUpState: Function
    createDueDateObject: Function
    validateDate: Function
}

export default function EditTask({tasksToday,setTasksToday,taskID, taskPopUpState,setTaskPopUpState,setTaskID,createDueDateObject,validateDate}:EditTask__Inputs) {
    const descriptionValue = useRef<HTMLTextAreaElement>(null);
    const dueDateValue = useRef<HTMLInputElement>(null);

    
    function handleEdit(e:any) {
        e.preventDefault();
        if (descriptionValue.current && dueDateValue.current) {
            if (validateDate(dueDateValue.current.value)) {
                let dueObject = createDueDateObject(dueDateValue.current.value);
                setTasksToday(tasksToday.map((task) => {
                    if (task.id === taskID && descriptionValue.current !== null) {
                        task.description = descriptionValue.current.value
                        task.due.date = dueObject.dateDraft;
                        task.due.dateString = dueObject.dateStringDraft;
                    }
                    return task
                }))
                handleClose()
             }
            else {}
        }
    }
    function handleClose() {
        setTaskPopUpState({...taskPopUpState, viewEditTask: false,})
        setTaskID(null)
    }

    return <form onSubmit={handleEdit} style={{
            opacity:  taskPopUpState.viewEditTask ? '1' : '0', pointerEvents:  taskPopUpState.viewEditTask ? 'initial' : 'none'}} className="PopUp Container--col">
                <h2 className="">Edit Task</h2>
                <textarea ref={descriptionValue} required placeholder="Description" className="PopUp__TextArea"></textarea>
                <div className="PopUp__DueDate Container--row">
                <span className="PopUp__DateTitle">Add Due Date:</span>
                <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
                </div>
                <div className="PopUp__Buttons Container--row">
                    <button className="PopUp__Button">EDIT</button>
                    <div onClick={handleClose} className="PopUp__Button">CANCEL</div>
                </div>
        </form>
}