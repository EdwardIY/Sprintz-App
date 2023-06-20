import { useRef } from "react"

interface EditTask__Inputs {
    createDueDateObject: Function
    validateDate: Function
    taskPopUpState:any
    setTaskPopUpState: Function

}

export default function EditTask({taskPopUpState,setTaskPopUpState,createDueDateObject,validateDate}:EditTask__Inputs) {
    let  descriptionValue = useRef<HTMLTextAreaElement | any>(null);
    let dueDateValue = useRef<HTMLInputElement | null>(null);

    
    function handleEdit(e: any) {
        e.preventDefault()

        if (taskPopUpState.date) { 
            if (descriptionValue.current && dueDateValue.current) {    
                    if (validateDate(dueDateValue.current.value)) {
                        let dueObject = createDueDateObject(dueDateValue.current.value);
                        taskPopUpState.updateList(taskPopUpState.list.map((task:any) => {
                            if (task.id === taskPopUpState.selectedItem.id && descriptionValue.current !== null) {
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
        else {
            if (descriptionValue.current) {
    
                        taskPopUpState.updateList(taskPopUpState.list.map((task:any) => {
                            if (task.id === taskPopUpState.selectedItem.id && descriptionValue.current !== null) {
                                task.description = descriptionValue.current.value
                            }
                            return task
                        }))
                        handleClose()
            }
        }
    }
    function handleClose() {   
        setTaskPopUpState({
            selectedItem:null,
            setSelectedItem:null,
            viewCreateTask: false,
            viewEditTask: false,
            list: null,
            updateList: null,
            date: true
        })
        if (descriptionValue.current)
            descriptionValue.current.value = '';
        if(dueDateValue.current)
          dueDateValue.current.value = ''
    }

    return <form onSubmit={handleEdit} style={{
            opacity:  taskPopUpState.viewEditTask ? '1' : '0', pointerEvents:  taskPopUpState.viewEditTask ? 'initial' : 'none'}} className="PopUp Container--col">
                <h2 className="">Edit Task</h2>
                <textarea ref={descriptionValue} defaultValue={taskPopUpState.selectedItem ? taskPopUpState.selectedItem.description : ''} required placeholder="Description" className="PopUp__TextArea"></textarea>
                {taskPopUpState.date && <div className="PopUp__DueDate Container--row">
                <span className="PopUp__DateTitle">Add Due Date:</span>
                <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
                </div>}
                <div className="PopUp__Buttons Container--row">
                    <button className="PopUp__Button">EDIT</button>
                    <div onClick={handleClose} className="PopUp__Button">CANCEL</div>
                </div>
        </form>
}