import { useState,useRef } from "react"
import * as Icon from 'react-bootstrap-icons';
import Title from "../Title";
import CreateTask from "../Tasks/CreateTask";
interface CreateGroup__Inputs {
    type:string
    // For popup
    setTasksToday?:Function
    tasksToday?: (any)[],
    taskPopUpState?:any
    setTaskPopUpState?: Function
    groupPopUpState?:any
    setGroupPopUpState?: Function
    setHistory?: Function
    history?:(any)[]
    createDueDateObject?:Function
    validateDate?: Function

      // For layout
      confirm?: Function
      cancel?: Function

}
interface Group_Interface {
    id: string
    category: {
        type: string
        title: string
      }
    list: any[]
    due?: {
        date: string
        dateString: string
    }
    
}


export default function CreateGroup({
    setTasksToday,
    tasksToday,
    taskPopUpState,
    setTaskPopUpState,
    groupPopUpState,
    setGroupPopUpState,
    setHistory,
    history,
    createDueDateObject,
    validateDate,
    confirm,
    type }: CreateGroup__Inputs) {
    
    const [tasks, setTasks] = useState<{ id: string, description: string, category:any  }[]>([])
    const dueDateValue = useRef<HTMLInputElement>(null)
    const [message, setMessage] = useState<null | string>('Empty Group')
    const [listDone,setListDone] = useState(false)

    function handleAddTask(TaskDescription: string) {
        console.log(TaskDescription)
            const id = (Math.random()*10000).toString()
        setTasks([...tasks, {
            id: id,
            description: TaskDescription,
            category: {
                type: 'task',
                title:null
            }
        }])
            setMessage(null)
        
    }
    function handleRemoveTask(id:string) {
        setTasks(tasks.filter((task:any)=> task.id !== id))
    }
    function handleCompletedGroup(e:any) {
        e.preventDefault();

 
        if (tasks.length > 1) { 
            setListDone(true)           
        }
        else {
            setMessage('Group must contain at least 2 tasks');

            if (!tasks.length) setTimeout(() => setMessage('Empty Group'), 3000);
            else setTimeout(() => setMessage(null), 3000);
        }
        
    }
    function handleCancelGroup() {
        if (groupPopUpState && setGroupPopUpState) 
            setGroupPopUpState({ ...groupPopUpState, viewCreateItem: false, })
        
        setTasks([])
    }
    function handleCancelTitle() {
        setListDone(false);
        
    }
    function handleEditTask(task: any) {
        let info = { ...taskPopUpState }
        info.selectedItem = task
        info.viewEditItem = true
        info.list = tasks
        info.updateList = setTasks
        info.date = false
        if(setTaskPopUpState)
            setTaskPopUpState({...info})
    }
    function handleDone(titleValue: string) {
        
        // Decide wether this is a layout or PopUp
        if (type == 'popup' && tasksToday && setTasksToday && groupPopUpState && setGroupPopUpState && validateDate && createDueDateObject) { 
            if (dueDateValue.current) { // this also canceled out the root creategroup comp 'popup' when view is made true for sprint
                if (validateDate(dueDateValue.current.value)) {
                    const dueObject = createDueDateObject(dueDateValue.current.value)
                    const newGroup: Group_Interface =  {
                        id: (Math.random() * 10000).toString(),
                        category: {
                            type: 'group',
                            title: titleValue
                         },
                            list: tasks,
                            due: {
                                date: dueObject.dateDraft,
                                dateString: dueObject.dateStringDraft
                            }
                    }
                        setTasksToday([...tasksToday, newGroup])
                    
                        
                        setListDone(false);
                        setGroupPopUpState({ ...groupPopUpState, viewCreateItem: false, })
                    
                        dueDateValue.current.value = ''
                        setTasks([])
    
    
                }
                else {
                    console.log(new Error('The entered date did not pass the test'))
                }
    
            }
         }
        else if (type == 'layout' && confirm) {
            const newGroup: Group_Interface =  {
                id: (Math.random() * 10000).toString(),
                category: {
                    type: 'group',
                    title: titleValue
                 },
                    list: tasks,
            }
            confirm(newGroup)
            setListDone(false);
            setTasks([])
        }

    }

    return <>
    {type == 'popup' && <div className='Background'></div>}
        <div style={{ display: type == 'popup' ?  !listDone ? 'flex' : 'none' : type == 'layout'  ? 'flex' : '',gap: '1em' }} className={`${type == 'popup' ? 'PopUp' : ''} CreateGroup Container--col`}>
            {type == 'popup' && <h2 style={{alignSelf: 'center',marginBottom:'.5em'}} className="PopUp__Title">Create Group</h2> }
            <div className="AddTaskContainer--group  Container--row">
                <CreateTask
                    confirm={handleAddTask}
                     type={'layout'} />    
            <form onSubmit={handleCompletedGroup} className="TaskList--group  Container--col">
                {/* <input required placeholder="ENTER TITLE" className="TaskList--group__Title" type="text" /> */}
                {/* <h2 style={{alignSelf: 'center',marginBottom:'.5em'}} className="PopUp__Title">Create Group</h2> */}
                <ul className="TaskList--group__List">
                    {message && <span className="TaskList--group__List__Message Container--col">{message}</span>}
                    {tasks.length > 0 && (tasks.map((task) => {
                        return <li key={task.id} className="TaskList--group__List__Item "> {task.description}
                            <div onClick={() => handleEditTask(task)} className="PopUp__Button">edit</div>
                            <div onClick={() => handleRemoveTask(task.id)} className="PopUp__Button">remove</div>
                        </li>
                    })) }
                    </ul>
                    { validateDate != undefined && <div className="PopUp__DueDate Container--row">
                        <span className="PopUp__DateTitle">Add Due Date:</span>
                        <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
                        </div> }
                <div className="PopUp__Buttons Container--row">
                    <button className="PopUp__Button">ADD</button> 
                    {type == 'popup' ? <div onClick={handleCancelGroup} className="PopUp__Button">CANCEL</div> : ''  }
                </div>
        </form>

        </div>
        
                {/* <div className="PopUp__Search">
                    <div className="SearchBarContainer">
                        <input type="text" />
                    </div>
                    <div className="Search__Output"></div>
                </div> */}
        </div>
        {listDone && <Title length={50} type={'popup'} title={'Add Title'} confirm={handleDone} cancel={handleCancelTitle} /> }

    </> 
}