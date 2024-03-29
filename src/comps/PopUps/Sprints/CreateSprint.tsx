import { useState, useRef} from 'react';
import CreateGroup from '../Groups/CreateGroup';
import Title from '../Title';



interface CreateSprint_Inputs {
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


export default function CreateSprint({ sprints,setSprints,sprintPopUpState, setSprintPopUpState, taskPopUpState, setTaskPopUpState, groupPopUpState, setGroupPopUpState,createDueDateObject,validateDate }: CreateSprint_Inputs) {
    const [groups, setGroups] = useState<any[]>([]);
    const dueDateValue = useRef<HTMLInputElement>(null)
    const [listDone, setListDone] = useState(false)
    const [message,setMessage] = useState('Empty Sprint')


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
    const handleRemoveGroup = (group: any) => {
        setGroups(groups.filter((sprintGroup)=> sprintGroup.id != group.id))
    }
    const sprintCompleted = (e:any) => {
        e.preventDefault()
        if (groups.length > 1) {
            setListDone(true)
         }
        else {
            setMessage('Sprint must contain at least 2 groups')

            if (!groups.length) setTimeout(() => setMessage('Empty Group'), 3000);
            else setTimeout(() => setMessage(''), 3000);
        }
    }
    const handleDone = (titleValue:string) => {

        if (dueDateValue.current) {
            if (validateDate(dueDateValue.current.value)) {
                const dueObject = createDueDateObject(dueDateValue.current.value)
                let sprint: Sprint = {
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
                    totalTasks: groups.reduce((a, b) => a + b.list.length, 0),
                    progress: [0,0]
                }
                console.log('Sprints updated')
                setSprints([...sprints, sprint])
                setSprintPopUpState({ ...sprintPopUpState, viewCreateItem: false })
                setListDone(false)
                setGroups([])
                dueDateValue.current.value = ''
             }
            else{}

        }
    }
    const handleCancel = () => {
        setGroups([])
        setSprintPopUpState({...sprintPopUpState,viewCreateItem: false})
    }
    const handleCancelTitle = () => {
        setListDone(false)
    }
    
    return <>
        <div className='Background'></div>
        <section className="PopUp">
            <h1 style={{alignSelf: 'center',marginBottom:'.5em'}} className="PopUp__Title">Create Sprint</h1>
            <div className="AddTaskContainer--group CreateSprint  Container--row">
                <CreateGroup
                    taskPopUpState={taskPopUpState}
                    setTaskPopUpState={setTaskPopUpState}
                    confirm={handleAddGroup}
                    type='layout'
                />
                <form onSubmit={sprintCompleted} className="TaskList--group  Container--col">
                    <ul className="TaskList--group__List ">
                        {message && <span className="TaskList--group__List__Message Container--col">{message}</span>}
                        {groups.length > 0 && (groups.map((group:any) => {
                            return <li key={Math.random() * Math.random()} className='TaskList--group__List__Item'>
                                {group.category.title + ` (Contains ${group.list.length} tasks)`} 
                                <span onClick={()=> handleEditGroup(group)} className="PopUp__Button">edit</span>
                                <span onClick={()=> handleRemoveGroup(group)} className="PopUp__Button">remove</span>
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
            {listDone && <Title length={40} type={'popup'} title={'Add Title'} confirm={handleDone} cancel={handleCancelTitle} />}
        
                {/* <div className="PopUp__Search">
                    <div className="SearchBarContainer">
                        <input type="text" />
                    </div>
                    <div className="Search__Output"></div>
                </div> */}
    </section>
    </> 
}