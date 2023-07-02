import { useRef,useState,useEffect} from "react"


interface UpdateGroup__Inputs {
    setTasksToday:Function
    tasksToday: (any)[],
    groupPopUpState:any
    setGroupPopUpState: Function

    setSelectedItemState: Function
}

export default function UpdateGroup({setSelectedItemState,setTasksToday,tasksToday,groupPopUpState, setGroupPopUpState}: UpdateGroup__Inputs) {
    const [tasks, setTasks] = useState<any>(null)
    // const [message, setMessage] = useState<null | string>(null)

    useEffect(() => {
        if (tasks) {
            if (tasks.length == 0) {
                handleSubmit()
                setTimeout(() => {
                    alert(`Group "${groupPopUpState.selectedItem.category.title}" has been completed!`)
                 },1) 
                // setMessage('Group Completed')
                // setTimeout(() => {
                //     setMessage(null)
                // },2000)
            }
        }
    }, [tasks])
    useEffect(() => {
        if(groupPopUpState.selectedItem)
            setTasks(groupPopUpState.selectedItem.list)
    },[groupPopUpState])


    function handleSubmit() {
        // viewCreateItem: false,
        // viewEditItem: false,
        // viewUpdateItem:true,
        // selectedItem:group,
        // list: groups,
        // updateList: setGroups,
        //     date: false
        
        if (tasks.length == 0) // Remove group if there are no more task in it
        groupPopUpState.updateList(groupPopUpState.list.filter((item:any) => item.id !== groupPopUpState.selectedItem.id))
        else {
            groupPopUpState.updateList(groupPopUpState.list.map((task:any) => {
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
            updateList: null,
            date: true
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
    return <>
        <div  className='Background'></div>
            <div className="PopUp Container--col">
                <h2> Update Group "{groupPopUpState.selectedItem?.category.title}"</h2>
                <ul className="TaskList--group__List">
                    {tasks ? !tasks.length && <span className="TaskList--group__List__Message Container--col">Group Completed</span> : '' }
                    {tasks && (tasks.map((task:any) => {
                        return <li key={task.id} className="TaskList--group__List__Item ">Task: "{task.description}"
                            <div onClick={() => handleCompletedTask(task)} className="PopUp__Button">done</div>
                        </li>
                    })) }
                </ul>
                <div className="PopUp__Buttons Container--row">
                    <div onClick={handleSubmit} className="PopUp__Button">DONE</div> 
                    <div onClick={handleDone} className="PopUp__Button">CANCEL</div>
                </div>
    </div>
    </> 
}