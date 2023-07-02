import { useState, useRef, useEffect } from 'react';
import CreateGroup from '../Groups/CreateGroup';
import Title from '../Title';



interface EditSprint_Inputs {
    sprints:any
    setSprints: Function
    sprintPopUpState: any
    setSprintPopUpState: Function
    taskPopUpState:any
    setTaskPopUpState: Function
    groupPopUpState:any
    setGroupPopUpState: Function
    createDueDateObject:Function
    validateDate: Function
}



interface Sprint {
    id: string
    list: any[]
    category: {
        type: 'sprint'
        title: string
    }
    due: {
        date: string
        dateString: string
    }
    totalTasks:number
    progress: number[]
}


export default function EditSprint({ sprints,setSprints,sprintPopUpState, setSprintPopUpState, taskPopUpState, setTaskPopUpState, groupPopUpState, setGroupPopUpState,createDueDateObject,validateDate }: EditSprint_Inputs) {
    const [groups, setGroups] = useState<any[]>([]);
    const dueDateValue = useRef<HTMLInputElement>(null)
    const [listDone, setListDone] = useState(false)
    const [message,setMessage] = useState('')


    useEffect(() => {
        if(sprintPopUpState.selectedItem)
            setGroups(sprintPopUpState.selectedItem.list)
    },[sprintPopUpState])
    // Progress is always going to be set to 0 on creation this logic needs to be in edit/update
    // useEffect(() => { // update progress on task completion / removal

    //     if(groups.length && numberOfTasks)
    //     setProgress(
    //        ( numberOfTasks - groups.reduce((a, b) => a.list.length + b.list.length, 0)) / numberOfTasks * 100
    //     )

    // },[groups,numberOfTasks])


    const handleAddGroup = (group:any) => {
        setGroups([...groups, group])
        setMessage('')
    }
    const handleEditGroup = (group:any) => {
        let info =  { ...groupPopUpState }
        info.selectedItem = group
        info.viewEditItem = true
        info.list =  groups
        info.updateList = setGroups
        info.date = false
        setGroupPopUpState({...info})
    }
    const handleRemoveGroup = (id: string) => {
        if (groups.length == 1) {
            setMessage('Sprint cannot be empty, complete the sprint instead')
            setTimeout(() => {
                setMessage('')
            },2000)
        }
        else setGroups(groups.filter((group: any) => group.id !== id))
        
    }
    const sprintCompleted = (e:any) => {
        e.preventDefault()
        if (groups.length >= 1) {
            setListDone(true)
         }
        else {
            setMessage('Sprint must contain at least 2 groups')

            if (!groups.length) setTimeout(() => setMessage('Empty Group'), 3000);
            else setTimeout(() => setMessage(''), 3000);
        }
    }
    const handleDone = (titleValue:string) => {
        // groups.forEach((group) => { // Set initial number of tasks within this sprint
        //     setNumberOfTasks(numberOfTasks + group.list.length )
        // })

        if (dueDateValue.current) {
            if (validateDate(dueDateValue.current.value)) {
                const dueObject = createDueDateObject(dueDateValue.current.value)
                const oldAmountOfTasks = sprintPopUpState.selectedItem.list.reduce((a:any,b:any)=> a + b.list.length,0)
                const newAmountOfTasks = groups.reduce((a: any, b: any) => a + b.list.length, 0)
                const numberOfTotalTasks = calculateTaskTotal(sprintPopUpState.selectedItem.totalTasks,newAmountOfTasks,oldAmountOfTasks)
                let newSprint: Sprint = {
                    id: (Math.random()*10000).toString(),
                    list: groups,
                    category: {
                        type: 'sprint',
                        title: titleValue
                    },
                    due: {
                        date: dueObject.dateDraft,
                        dateString: dueObject.dateStringDraft
                    },
                    totalTasks: numberOfTotalTasks ,
                    // progress: Math.ceil((numberOfTotalTasks - newAmountOfTasks) / numberOfTotalTasks   * 100)
                    progress: [sprintPopUpState.selectedItem.progress[1],Math.ceil((numberOfTotalTasks - newAmountOfTasks) / numberOfTotalTasks   * 100)]

                }
                console.log(newSprint.progress)
                sprintPopUpState.updateList(sprintPopUpState.list.map((sprint:Sprint) => {
                    if (sprint.id == sprintPopUpState.selectedItem.id)
                        return newSprint
                    return sprint
                }))
                setSprintPopUpState({ ...sprintPopUpState, viewEditItem: false })
                setListDone(false)
                setGroups([])
                dueDateValue.current.value = ''
             }
            else{}

        }
    }
    const handleCancel = () => {
        setGroups([])
        setSprintPopUpState({...sprintPopUpState,viewEditItem: false})
    }
    const handleCancelTitle = () => {
        setListDone(false)
    }
    
    return <>
    <div className='Background'></div>
        <section className="PopUp">
            <h1 style={{alignSelf: 'center',marginBottom:'.5em'}} className="PopUp__Title">Edit Sprint </h1>
            <div className="AddTaskContainer--group  Container--row">
                <CreateGroup
                    taskPopUpState={taskPopUpState}
                    setTaskPopUpState={setTaskPopUpState}
                    confirm={handleAddGroup}
                    type='layout'
                />
                <form onSubmit={sprintCompleted} className="TaskList--group  Container--col">
                <h2 className="PopUp__Title">Sprint</h2>
                    {/* <input required placeholder="ENTER TITLE" className="TaskList--group__Title" type="text" /> */}
                    <ul className="TaskList--group__List ">
                        {message && <span className="TaskList--group__List__Message Container--col">{message}</span>}
                        {groups.length > 0 && (groups.map((group:any) => {
                            return <li key={Math.random() * Math.random()} className='TaskList--group__List__Item'>
                                {group.category.title + ` (Contains ${group.list.length} tasks)`} 
                                <span onClick={()=> handleEditGroup(group)} className="PopUp__Button">edit</span>
                                <span onClick={()=> handleRemoveGroup(group.id)} className="PopUp__Button">remove</span>
                            </li>
                        })) }
                    </ul>
                    <div className="PopUp__DueDate Container--row">
                        <span className="PopUp__DateTitle">Add Due Date:</span>
                        <input ref={dueDateValue} required className="PopUp__DateInput" type="date" />
                    </div>
                    <div className="PopUp__Buttons Container--row">
                        <button className="PopUp__Button">DONE</button> 
                        <div onClick={handleCancel} className="PopUp__Button">CANCEL</div>
                    </div>
                </form>
            </div>
            {listDone && <Title defaultValue={sprintPopUpState.selectedItem.category.title} type={'popup'} title={'Add Title'} confirm={handleDone} cancel={handleCancelTitle} />}
        
                {/* <div className="PopUp__Search">
                    <div className="SearchBarContainer">
                        <input type="text" />
                    </div>
                    <div className="Search__Output"></div>
                </div> */}
    </section>
    </> 
}


function calculateTaskTotal(total:number, newTaskTotal:number, oldTaskTotal:number) {
    if (oldTaskTotal > newTaskTotal)
        return total - (oldTaskTotal - newTaskTotal)
    else if (oldTaskTotal < newTaskTotal)
        return total + (newTaskTotal - oldTaskTotal)
    else return total

}