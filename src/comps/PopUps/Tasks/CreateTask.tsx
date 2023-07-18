import { useRef } from 'react'
// import { doc } from "firebase/firestore"; 

// import { db,writeToDatabase } from '../../../firebase'

interface CreateTask_Inputs {
  type:string

  // For popup
    selectedItemState?:any
    setSelectedItemState?: Function
    tasks?: (any)[]
    setTasks?: Function
    taskPopUpState?: any,
    setTaskPopUpState?: Function
    setHistory?: Function
    history?:(any)[]
    createDueDateObject?: Function
    validateDate?: Function
  
  // For layout
    confirm?: Function
    cancel?: Function
}



interface Task_Interface {
    id: number
    description: string
    category: {
      type: string
      title: string | null
    }
    due?: {
      date: string
      dateString: string
    } 
  
  }
export default function CreateTask({
  taskPopUpState,
  setTaskPopUpState,
  tasks,
  setTasks,
  setSelectedItemState,
  selectedItemState,
  createDueDateObject,
  setHistory,
  history,
  validateDate,
  type,
  confirm }: CreateTask_Inputs) {
  
  const descriptionValue = useRef<HTMLTextAreaElement>(null);
  const dueDateValue = useRef<HTMLInputElement>(null);
  

    // Decide wether this is a layout or PopUp
    function handleSubmit(e:any) {
      e.preventDefault()
      
      if (type == 'popup' && tasks && setTasks && taskPopUpState && setTaskPopUpState && createDueDateObject)
        return handleAdd(tasks, setTasks, taskPopUpState, setTaskPopUpState,createDueDateObject, validateDate)
      
      if (type == 'layout' && confirm) {
        // Only check description becayse as a layout comp we dont have date input
        if (descriptionValue.current)
          confirm(descriptionValue.current.value)
      }
      }
  
    
  // For PopUp
  function handleAdd(tasks:any,setTasks:Function,taskPopUpState:any,setTaskPopUpState:Function,createDueDateObject?:Function,validateDate?:Function) {
      if (validateDate && createDueDateObject) { // Checking if this task has a date input
        // We have both a date input and description input
        if (descriptionValue.current && dueDateValue.current) {  
            let dueObject = createDueDateObject(dueDateValue.current.value)
            if (validateDate(dueDateValue.current.value)) {
              let task: Task_Interface = {
                id: Math.round(Math.random() * 10000),
                description: descriptionValue.current.value,
                category: {
                  type: 'task',
                  title: null
                },
                due: {
                  date: dueObject.dateDraft,
                  dateString: dueObject.dateStringDraft
                }
              }
              // if (username && email && history) {
              //   writeToDatabase(doc(db, "Users", email), {
              //     username: username,
              //     todaysTasks: [...tasks,task],
              //     sprints: sprints,
              //     history: [...history,task],
              //     completed: completed,
              //     missed: missed,
              //   }).then(() => {
              //     console.log('task was successfully added to database')
              //     // setTasks([...tasks, task])
              //     // setTaskPopUpState({ ...taskPopUpState, viewCreateItem: false })
              //     // if (descriptionValue.current && dueDateValue.current) {
              //     //   descriptionValue.current.value = '';
              //     //   dueDateValue.current.value = ''
              //     // }
              //   })
              //   .catch((err) => {
              //     console.log(err)
              //   })
              // }
 
          
                setTasks([...tasks, task])
                if(history && setHistory)
                setHistory([...history,task])
                setTaskPopUpState({ ...taskPopUpState, viewCreateItem: false })
              
                descriptionValue.current.value = '';
                dueDateValue.current.value = ''
        }
            
          }

      }
      else {
        // We dont have a date input and only have a description input
        if (descriptionValue.current) {
          let task: Task_Interface = {
            id:  Math.round(Math.random() * 10000),
            description: descriptionValue.current.value,
            category: {
              type: 'task',
              title: null
            }
      }
      if(tasks && setTasks)
            setTasks([...tasks, task])
          
      if(history && setHistory)
            setHistory([...history,task])
          
        if(taskPopUpState && setTaskPopUpState)
            setTaskPopUpState({ ...taskPopUpState, viewCreateItem: false })
          
          descriptionValue.current.value = '';
          }
        }
  }  
  function handleCancel() {
    if (selectedItemState && setSelectedItemState) {
      if(taskPopUpState && setTaskPopUpState)
        setTaskPopUpState({ ...taskPopUpState, viewCreateItem: false })
      
      setSelectedItemState({
        ...selectedItemState,
          selectedItem: null,
          viewDelete: false,
          selectedCategoryList: null,
          updateSelectedCategory:null
      })
      }

      if (descriptionValue.current)
        descriptionValue.current.value = '';
      if(dueDateValue.current)
          dueDateValue.current.value = ''
  }
  

  return <>
    {type == 'popup' && <div className='Background'></div>}
    <form onSubmit={handleSubmit} className={`${type == 'popup' ? 'PopUp' : 'layout'} CreateTask Container--col` }>
      {type == 'popup' && <h2 className="">Create Task</h2>  }
      <textarea ref={descriptionValue} required placeholder="Description" className="PopUp__TextArea"></textarea>
      { validateDate != undefined && <div className="PopUp__DueDate Container--row">
        <span className="PopUp__DateTitle">Add Due Date:</span>
        <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
      </div> }
      <div className="PopUp__Buttons Container--row">
        <button className="PopUp__Button">ADD</button>
        { type == 'popup' ? <div onClick={()=> handleCancel()} className="PopUp__Button">CANCEL</div> : ''  }
      </div>

    </form>
  </>
}

function writeToDatase() {
  
}
