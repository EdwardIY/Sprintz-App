import {useRef} from 'react'

interface CreateTask_Inputs {
    setTaskID: Function
    tasksToday:(any)[]
    setTasksToday: Function
    taskPopUpState: any,
    setTaskPopUpState: Function
    createDueDateObject: Function
    validateDate: Function
    DateCollection:any
}
// setTaskID={setTaskID}
// tasksToday={tasksToday}
// setTasksTodayToday={setTasksTodayToday}
// taskPopUpState={taskPopUpState}
// setTaskPopUpState={setTaskPopUpState}
// createDueDateObject={createDueDateObject}
// DateCollection={DateCollection} /> 

interface Task_Interface {
    id: number
    description: string
    category?: {
      type: string
      title: string
    }
    due: {
      date: string
      dateString: string
    }
  
  }
export default function CreateTask({ taskPopUpState, setTaskPopUpState,tasksToday, setTasksToday,setTaskID, createDueDateObject,validateDate,DateCollection }: CreateTask_Inputs) {
    const descriptionValue = useRef<HTMLTextAreaElement>(null);
    const dueDateValue = useRef<HTMLInputElement>(null);
    
    function handleAdd(e:any) {
      e.preventDefault();
      if (descriptionValue.current && dueDateValue.current) {
        console.log(dueDateValue.current.value)
        console.log( new Date(dueDateValue.current.value))
        console.log(  new Date())

        if (validateDate(dueDateValue.current.value)) {
          let task: Task_Interface = {
            id: NaN,
            description: '',
            due: {
              date: '',
              dateString:''
            }
      }
         let dueObject = createDueDateObject(dueDateValue.current.value)

        task.id = Math.round(Math.random() * 10000);
        task.description = descriptionValue.current.value;
        task.due.date = dueObject.dateDraft;
        task.due.dateString = dueObject.dateStringDraft;

        setTasksToday([...tasksToday,task])
        setTaskPopUpState({...taskPopUpState, viewCreateTask: false})
    }
         }
        else {}

        
        }
         
    function handleCancel() {
        console.log('canceled')
        setTaskPopUpState({...taskPopUpState, viewCreateTask: false})
        setTaskID(null)
      }
    return <form onSubmit={handleAdd} style={{
        opacity: taskPopUpState.viewCreateTask ? '1' : '0', pointerEvents: taskPopUpState.viewCreateTask ? 'initial' : 'none'}} className="PopUp CreateTask Container--col">
        <h2 className="">Create Task</h2>
        <textarea ref={descriptionValue} required placeholder="Description" className="PopUp__TextArea"></textarea>
        <div className="PopUp__DueDate Container--row">
        <span className="PopUp__DateTitle">Add Due Date:</span>
        <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
        </div>
        <div className="PopUp__Buttons Container--row">
        <button className="PopUp__Button">ADD</button>
        <div onClick={()=> handleCancel()} className="PopUp__Button">CANCEL</div>
        </div>

    </form>
}
