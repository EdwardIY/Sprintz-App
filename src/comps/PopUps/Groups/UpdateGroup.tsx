import { useRef,useState,useEffect} from "react"


interface CreateGroup__Inputs {
    setTasksToday:Function
    tasksToday: (any)[],
    taskPopUpState:any
    setTaskPopUpState: Function
    groupPopUpState:any
    setGroupPopUpState: Function
    createDueDateObject: Function
    validateDate: Function
    selectedItemState: any
    setSelectedItemState: Function
}

export default function UpdateGroup({selectedItemState,setSelectedItemState,setTasksToday,tasksToday,taskPopUpState,setTaskPopUpState,groupPopUpState, setGroupPopUpState,createDueDateObject,validateDate}: CreateGroup__Inputs) {
    const titleValue = useRef()
    const dueDateValue = useRef()
    const [tasks, setTasks] = useState<any>(null)
    const [message, setMessage] = useState<null | string>(null)
    console.log(tasks)

    useEffect(() => {
        if (tasks) {
            if (tasks.length == 0) {
                setMessage('Group Completed')
                setTimeout(() => {
                    setMessage(null)
                    handleSubmit()
                },2000)
            }
        }
    }, [tasks])
    useEffect(() => {
        if(groupPopUpState.selectedItem)
            setTasks(groupPopUpState.selectedItem.list)
    },[groupPopUpState])


    function handleSubmit() {
        if (tasks.length == 0) 
            setTasksToday(tasksToday.filter((task) => task.id !== groupPopUpState.selectedItem.id))
        else {
            setTasksToday(tasksToday.map((task) => {
                if (task.id === groupPopUpState.selectedItem.id) 
                    task.list = tasks
                return task
            }))
        }

        handleDone()
    }
    function handleDone() {
        setGroupPopUpState({
            viewCreateItem: false,
            viewUpdateItem: false,
            viewEditItem: false,
            selectedItem:null,
            setSelectedItem:null,
            list: null,
            updateList:null
        })
        setTasks(null)
    }
    const handleCompletedTask = (task:any) => {
        setSelectedItemState({
            selectedItem: task,
            viewCompleted: true,
            viewDelete: false,
            selectedCategoryList: tasks,
            updateSelectedCategory: setTasks
        })
    }
    return <div style={{ opacity:  groupPopUpState.viewUpdateItem ? '1' : '0', pointerEvents:  groupPopUpState.viewUpdateItem ? 'initial' : 'none'}} className="PopUp Container--col">
        <h2>Title:{groupPopUpState.selectedItem?.category.title}</h2>
        <ul className="TaskList--group__List">
                    {message && <span className="TaskList--group__List__Message Container--col">{message}</span>}
                    {tasks && (tasks.map((task:any) => {
                        return <li key={task.id} className="TaskList--group__List__Item "> {task.description}
                            <div onClick={() => handleCompletedTask(task)} className="PopUp__Button">done</div>
                        </li>
                    })) }
        </ul>
        <div className="PopUp__Buttons Container--row">
                    <div onClick={handleSubmit} className="PopUp__Button">DONE</div> 
                    <div onClick={handleDone} className="PopUp__Button">CANCEL</div>
            </div>
    </div>
}