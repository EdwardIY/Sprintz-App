import { useState,useRef } from "react"
import * as Icon from 'react-bootstrap-icons';
interface CreateGroup__Inputs {
    tasksToday:(any)[]
    setTasksToday:Function
    groupPopUpState:any
    setGroupPopUpState: Function
    createDueDateObject:Function
    validateDate: Function
}


export default function CreateGroup({tasksToday,setTasksToday,groupPopUpState, setGroupPopUpState,createDueDateObject,validateDate}: CreateGroup__Inputs) {
    const title = useRef<HTMLInputElement>(null)
    const [tasks, setTasks] = useState<{ id: string, value: string }[]>([])
    const dueDateValue = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null)
    const [message, setMessage] = useState<null | string>('Empty Group')
    const [listDone,setListDone] = useState(false)

    function handleAddTask(e:any) {
        e.preventDefault()
        if (description.current) {
            const id = (Math.random()*10000).toString()
            setTasks([...tasks,{id,value:description.current.value}])
            description.current.value = ''
            setMessage(null)
        }
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
        setGroupPopUpState({ ...groupPopUpState, viewCreateGroup: false, })
        setTasks([])
    }
    function handleCancelTitle() {
        setListDone(false);
        if (title.current)
        title.current.value = ''
        
    }

    function handleDone(e:any) {
        e.preventDefault()
        if (title.current && dueDateValue.current) {
            console.log(title.current.value)
            if (validateDate(dueDateValue.current.value)) {
                const dueObject = createDueDateObject(dueDateValue.current.value)

                tasks.forEach((task) => {
                    console.log(task)
                    const newTask = {
                        id: task.id,
                        description: task.value,
                        category: {
                            type: 'group',
                            title: title.current ? title.current.value : ''
                        },
                        due: {
                            date: dueObject.dateDraft,
                            dateString: dueObject.dateStringDraft
                        }
                    }
                    setTasksToday([...tasksToday,newTask])
                })
            }
            else {}

        }
    }

    return <>
    <div style={{ display: !listDone ? 'flex' : 'none', opacity: groupPopUpState.viewCreateGroup ? '1' : '0', pointerEvents: groupPopUpState.viewCreateGroup ? 'initial' : 'none' }} className="PopUp Container--col">
        <div className="AddTaskContainer--group  Container--row">
        <form onSubmit={handleAddTask} className="AddTask--group">
            <div className="AddTaskContainer--group__Add Container--col">
                        <h2 className="PopUp__Title">Add Task</h2>
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
                        return <li key={task.id} className="TaskList--group__List__Item ">{task.value} <div onClick={()=> handleRemoveTask(task.id)} className="PopUp__Button">remove</div></li>
                    })) }
                </ul>
                <div className="PopUp__DueDate Container--row">
                        <span className="PopUp__DateTitle">Add Due Date:</span>
                        <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
                </div>
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
        <form onSubmit={handleDone} style={{display: listDone ? 'flex' : 'none'}} className="PopUp CreateTitle Container--col">
            <h2>Add Title</h2>
            <input className="CreateTitle__Input" ref={title} type="text" />
            <div className="PopUp__Buttons Container--row">
                    <button className="PopUp__Button">DONE</button> 
                    <div onClick={handleCancelTitle} className="PopUp__Button">CANCEL</div>
            </div>
        </form>
    </> 
}