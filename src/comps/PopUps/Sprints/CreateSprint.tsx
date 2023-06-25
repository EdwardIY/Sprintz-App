import { useState, useRef, useEffect } from 'react';
import CreateGroup from '../Groups/CreateGroup';



interface CreateSprint_Inputs {
    sprintPopUpState: any
    setSprintPopUpState: Function
    taskPopUpState:any
    setTaskPopUpState: Function
    groupPopUpState:any
    setGroupPopUpState: Function
}






export default function CreateSprint({sprintPopUpState,setSprintPopUpState,taskPopUpState,setTaskPopUpState,groupPopUpState,setGroupPopUpState}:CreateSprint_Inputs) {
    const [groups, setGroups] = useState<any[]>([]);
    const [message_A, setMessage_A] = useState();
    const [message_B, setMessage_B] = useState();

    const addTask = () => {
        
    }
    const editTask = () => {}
    const removeTask = () => {}
    const addGroup = (group:any) => {
        setGroups([...groups,group])
    }
    const editGroup = (group:any) => {
        let info =  { ...groupPopUpState }
        info.selectedItem = group
        info.viewEditItem = true
        info.list =  groups
        info.updateList = setGroups
        info.date = false
        setGroupPopUpState({...info})
    }
    const removeGroup = (group: any) => {
        setGroups(groups.filter((sprintGroup)=> sprintGroup.id != group.id))
     }
    const done = () => {}
    const cancel = () => {
        setGroups([])
        setSprintPopUpState({...sprintPopUpState,viewCreateItem: false})
    }
    
    return <>
        <section className="PopUp">
            <h1 style={{alignSelf: 'center',marginBottom:'.5em'}} className="PopUp__Title">Create Sprint Group</h1>
            <div className="AddTaskContainer--group  Container--row">
                <CreateGroup
                     taskPopUpState={taskPopUpState}
                    setTaskPopUpState={setTaskPopUpState}
                    confirm={addGroup}
                    type='layout'
                />
                <form onSubmit={console.log} className="TaskList--group  Container--col">
                <h2 className="PopUp__Title">Sprint</h2>
                    {/* <input required placeholder="ENTER TITLE" className="TaskList--group__Title" type="text" /> */}
                    <ul className="TaskList--group__List ">
                        {/* {message && <span className="TaskList--group__List__Message Container--col">{message}</span>} */}
                        {groups.length > 0 && (groups.map((group:any) => {
                            return <li className='TaskList--group__List__Item'>
                                {group.category.title + ` (Contains ${group.list.length} tasks)`} 
                                <span onClick={()=> editGroup(group)} className="PopUp__Button">edit</span>
                                <span onClick={()=> removeGroup(group)} className="PopUp__Button">remove</span>
                            </li>
                        })) }
                    </ul>
                    <div className="PopUp__DueDate Container--row">
                        <span className="PopUp__DateTitle">Add Due Date:</span>
                        <input ref={console.log} required className="PopUp__DateInput" type="date" />
                    </div>
                    <div className="PopUp__Buttons Container--row">
                        <button className="PopUp__Button">DONE</button> 
                        <div onClick={cancel} className="PopUp__Button">CANCEL</div>
                    </div>
                </form>
        </div>
        
                {/* <div className="PopUp__Search">
                    <div className="SearchBarContainer">
                        <input type="text" />
                    </div>
                    <div className="Search__Output"></div>
                </div> */}
    </section>
    </> 
}