import { useState, useRef, useEffect } from "react"
import Title from "../Title";
import * as Icon from 'react-bootstrap-icons';
interface EditGroup__Inputs {
    setTasksToday:Function
    tasksToday: (any)[],
    taskPopUpState:any
    setTaskPopUpState: Function
    groupPopUpState:any
    setGroupPopUpState: Function
    createDueDateObject?:Function
    validateDate?: Function

}
interface Group_Interface {
    id: string
    category?: {
        type: string
        title: string
      }
    list: any[]
    due?: {
        date: string
        dateString: string
    }
    
}


export default function EditGroup({setTasksToday,tasksToday,taskPopUpState,setTaskPopUpState,groupPopUpState, setGroupPopUpState,createDueDateObject,validateDate}: EditGroup__Inputs) {
    const [tasks, setTasks] = useState<{ id: string, description: string }[]>([])
    const dueDateValue = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null)
    const [message, setMessage] = useState<null | string>(null)
    const [listDone, setListDone] = useState(false)
    
    useEffect(() => {
        if(groupPopUpState.selectedItem)
            setTasks(groupPopUpState.selectedItem.list)
    },[groupPopUpState])

    function handleAddTask(e:any) {
        e.preventDefault()
        if (description.current) {
            const id = (Math.random()*10000).toString()
            setTasks([...tasks,{id,description:description.current.value}])
            description.current.value = ''
            setMessage(null)
        }
    }
    function handleRemoveTask(id: string) {
        if (tasks.length == 1) {
            setMessage('Group cannot be empty, complete the group instead')
            setTimeout(() => {
                setMessage(null)
            },2000)
        }
        else setTasks(tasks.filter((task:any)=> task.id !== id))
    }
    function handleCompletedGroup(e:any) {
        e.preventDefault();
        if (tasks.length >= 1) { 
            setListDone(true)
        }
        
    }
    function handleCancelGroup() {
        setGroupPopUpState({ ...groupPopUpState, viewEditItem: false, })
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
        setTaskPopUpState({...info})
    }

    function handleDone(titleValue: string) {
    
        if (groupPopUpState.date && validateDate && createDueDateObject) { // If there is a due date with this group
            if (dueDateValue.current) {
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
                        groupPopUpState.updateList(groupPopUpState.list.map((task:any) => {
                            if (task.id === groupPopUpState.selectedItem.id) 
                                return newGroup
                            return task
                        }))
                        setListDone(false);
                        setGroupPopUpState({ ...groupPopUpState, viewEditItem: false, })
                        dueDateValue.current.value = ''
                        setTasks([])
        
        
                    }
                    else {}
        
                }
            
        }
        

        else { // If there is not a due date with this group
            console.log('Editing a group in a sprint')
                    const newGroup: Group_Interface =  {
                        id: (Math.random() * 10000).toString(),
                        category: {
                            type: 'group',
                            title: titleValue
                         },
                            list: tasks,
            }
                    groupPopUpState.updateList(groupPopUpState.list.map((task:any) => {
                        if (task.id === groupPopUpState.selectedItem.id) 
                            return newGroup
                        return task
                    }))
                    // setTasksToday(tasksToday.map((task) => {
                    //     if (task.id === groupPopUpState.selectedItem.id) 
                    //         return newGroup
                    //     return task
                    // }))
                    setListDone(false);
                    setGroupPopUpState({ ...groupPopUpState, viewEditItem: false, })
                    setTasks([])    
        }

    }


    return <>
        <div className='Background'></div>
        <div style={{ display: !listDone ? 'flex' : 'none', opacity: groupPopUpState.viewEditItem ? '1' : '0', pointerEvents: groupPopUpState.viewEditItem ? 'initial' : 'none' }} className="PopUp EditGroup Container--col">
            <h1 style={{alignSelf: 'center',marginBottom:'.5em'}} className="PopUp__Title">Edit Group</h1>
            <div className="AddTaskContainer--group  Container--row">
            <form onSubmit={handleAddTask} className="AddTask--group">
                <div className="AddTaskContainer--group__Add Container--col">
                    <textarea ref={description}  required placeholder="Description" className="PopUp__TextArea"></textarea>
                    <div className="PopUp__Buttons Container--row">
                        <button className="PopUp__Button">ADD</button>
                    </div>
                </div>
            </form>
            
            <form onSubmit={handleCompletedGroup} className="TaskList--group  Container--col">
                {/* <input required placeholder="ENTER TITLE" className="TaskList--group__Title" type="text" /> */}
                <ul className="TaskList--group__List">
                    {message && <span className="TaskList--group__List__Message Container--col">{message}</span>}
                    {tasks.length > 0 && (tasks.map((task) => {
                        return <li key={task.id} className="TaskList--group__List__Item "> {task.description}
                            <div onClick={() => handleEditTask(task)} className="PopUp__Button">edit</div>
                            <div onClick={() => handleRemoveTask(task.id)} className="PopUp__Button">remove</div>
                        </li>
                    })) }
                </ul>
                { groupPopUpState.date && <div className="PopUp__DueDate Container--row">
                    <span className="PopUp__DateTitle">Add Due Date:</span>
                    <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
                    </div> }
                <div className="PopUp__Buttons Container--row">
                    <button className="PopUp__Button">DONE</button> 
                    <div onClick={handleCancelGroup} className="PopUp__Button">CANCEL</div>
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
        {listDone && <Title
            length={50}
            type={'popup'}
            defaultValue={groupPopUpState ? groupPopUpState.selectedItem?.category.title : ''}
            title={'Edit Title'}
            confirm={handleDone}
            cancel={handleCancelTitle} />}
    </> 
}