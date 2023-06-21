import {useRef} from 'react'

interface CreateTask_Inputs {
  selectedItemState:any
  setSelectedItemState: Function
  tasksToday: (any)[]
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
export default function CreateTask({ taskPopUpState, setTaskPopUpState,tasksToday, setTasksToday,setSelectedItemState,selectedItemState, createDueDateObject,validateDate,DateCollection }: CreateTask_Inputs) {
    const descriptionValue = useRef<HTMLTextAreaElement>(null);
    const dueDateValue = useRef<HTMLInputElement>(null);
    
    function handleAdd(e:any) {
      e.preventDefault();
      if (descriptionValue.current && dueDateValue.current) {
        // console.log(dueDateValue.current.value)
        // console.log( new Date(dueDateValue.current.value))
        // console.log(  new Date())

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
          setTaskPopUpState({ ...taskPopUpState, viewCreateItem: false })
          descriptionValue.current.value = '';
          dueDateValue.current.value = ''
    }
         }
        else {}

        
        }
         
    function handleCancel() {
      setTaskPopUpState({...taskPopUpState, viewCreateItem: false})
      setSelectedItemState({
        ...selectedItemState,
          selectedItem: null,
          viewDelete: false,
          selectedCategoryList: null,
          updateSelectedCategory:null
      })
      if (descriptionValue.current)
        descriptionValue.current.value = '';
      if(dueDateValue.current)
          dueDateValue.current.value = ''
    }
    return <form onSubmit={handleAdd} style={{
        opacity: taskPopUpState.viewCreateItem ? '1' : '0', pointerEvents: taskPopUpState.viewCreateItem ? 'initial' : 'none'}} className="PopUp CreateTask Container--col">
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
