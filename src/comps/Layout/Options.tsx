import * as Icon from 'react-bootstrap-icons';


interface Options_Intputs {
  showSidebar: boolean,
  setShowSidebar: Function
  taskPopUpState: any
  setTaskPopUpState: Function
  groupPopUpState:any
  setGroupPopUpState: Function
  sprintPopUpState:any
  setSprintPopUpState: Function
}


export default function Options({showSidebar, setShowSidebar,taskPopUpState,setTaskPopUpState,groupPopUpState,setGroupPopUpState,sprintPopUpState,setSprintPopUpState}:Options_Intputs) {
    return (
      <div style = {{ marginRight: showSidebar ? '-600px' : 'initial'}} className="Container--col Main__Options">
        <Icon.ChevronRight onClick={()=> setShowSidebar(!showSidebar)}  className='Main__Options__Close--toggle' />
        <div onClick={() => setTaskPopUpState({ ...taskPopUpState, viewCreateItem: true })} className="Main__Options__Option Container--col">
          <h2 className="Options__Option__Title">Create Task</h2>
          <span className="Options__Option__Description">A task set to be due at a specified date(short term)</span>
        </div>
        <div onClick={() => setGroupPopUpState({...groupPopUpState, viewCreateItem: true})} className="Main__Options__Option Container--col">
          <h2 className="Options__Option__Title">Create Group</h2>
          <span className="Options__Option__Description">A set of two or more tasks set to be due at a specified date(short-medium term)</span>
        </div>
        <div onClick={() => setSprintPopUpState({...sprintPopUpState, viewCreateItem: true})} className="Main__Options__Option Container--col">
          <h2 className="Options__Option__Title">Create Sprint</h2>
          <span className="Options__Option__Description">A set of two or more groups set to be due at a specified date(long-term)</span>
        </div>
      </div>
    )
  }