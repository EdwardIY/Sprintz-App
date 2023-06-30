import { useRef,useState,useEffect} from "react"


interface UpdateSprint__Inputs {
    setSprints:Function
    sprints: (any)[],
    sprintPopUpState:any
    setSprintPopUpState: Function
    setGroupPopUpState: Function

    // setSelectedItemState: Function
}

export default function UpdateSprint({setSprints,sprints,sprintPopUpState, setSprintPopUpState, setGroupPopUpState}: UpdateSprint__Inputs) {
    const [groups, setGroups] = useState<any>(null)
    // const [message, setMessage] = useState<null | string>(null)

    useEffect(() => { // Handle Sprint Completion
        if (groups) {
            if (groups.length == 0) {
                handleSubmit()
                setTimeout(() => {
                    alert(`Sprint "${sprintPopUpState.selectedItem.category.title}" has been completed!`)
                }, 1)
                 // setMessage('Sprint Completed')
                // setTimeout(() => {
                //     setMessage(null)
                // },5000)
            }
        }
    }, [groups])
    useEffect(() => { // Set groups to selected Sprints list
        if(sprintPopUpState.selectedItem)
            setGroups(sprintPopUpState.selectedItem.list)
    },[sprintPopUpState])


    function handleSubmit() {
        let totalTasks_BeforeUpdate = sprintPopUpState.selectedItem.totalTasks;
        let totalTasks_AfterUpdate = groups.length ? groups.reduce((a: any, b: any) => a + b.list.length, 0) : 0
        
        if (totalTasks_BeforeUpdate != totalTasks_AfterUpdate) { // Only if there was a change(task completed) will we do work
            setSprints(sprints.map((sprint) => {
                if (sprint.id === sprintPopUpState.selectedItem.id) {
                    sprint.list = groups
                    // sprint.progress = Math.ceil((sprint.totalTasks - groups.reduce((a:any,b:any)=> a + b.list.length,0)) / sprint.totalTasks * 100)
                    sprint.progress = [sprintPopUpState.selectedItem.progress[1],Math.ceil((sprint.totalTasks - groups.reduce((a:any,b:any)=> a + b.list.length,0)) / sprint.totalTasks * 100)]
                }
                return sprint
            }))
            if (groups.length == 0) { // Remove sprint if there are no more groups
                setSprints(sprints.filter((group) => group.id !== sprintPopUpState.selectedItem.id))

            }

        
        }
        handleDone()
    }
    function handleDone() {
        setSprintPopUpState({
            viewCreateItem: false,
            viewUpdateItem: false,
            viewEditItem: false,
            selectedItem:null,
            setSelectedItem:null,
            list: null,
            updateList:null
        })
        setGroups(null)
    }
    const handleUpdateGroup = (group: any) => {
        setGroupPopUpState({
            viewCreateItem: false,
            viewEditItem: false,
            viewUpdateItem:true,
            selectedItem:group,
            list: groups,
            updateList: setGroups,
            date:false
        })
        // setSelectedItemState({
        //     selectedItem: task,
        //     viewCompleted: true,
        //     viewDelete: false,
        //     selectedCategoryList: groups,
        //     updateSelectedCategory: setGroups
        // })
    }
    return <>
            <div className="PopUp Container--col">
                <h2> Update Sprint "{sprintPopUpState.selectedItem?.category.title}"</h2>
                <ul className="TaskList--group__List">
                {groups ? !groups.length && <span className="TaskList--group__List__Message Container--col">Sprint Completed</span> : '' }
                    {groups && (groups.map((group:any) => {
                        return <li key={group.id} className="TaskList--group__List__Item ">Group: "{group.category.title}"
                            <div onClick={() => handleUpdateGroup(group)} className="PopUp__Button">Update</div>
                        </li>
                    })) }
                </ul>
                <div className="PopUp__Buttons Container--row">
                    <div onClick={handleSubmit} className="PopUp__Button">Done</div> 
                    <div onClick={handleSubmit} className="PopUp__Button">CLOSE</div>
                </div>
    </div>
    </> 
}