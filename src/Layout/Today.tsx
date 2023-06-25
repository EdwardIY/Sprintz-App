import * as Icon from 'react-bootstrap-icons';

interface Task_Intputs {
  setSelectedItemState: Function
  setTasksToday:Function
  tasksToday: (any)[],
  taskPopUpState: any
  setTaskPopUpState: Function
  groupPopUpState:any
  setGroupPopUpState: Function
  sprintPopUpState:any
  setSprintPopUpState: Function
  full: boolean,
  setFull: Function

}


export default function Tasks({setSelectedItemState,tasksToday,setTasksToday,taskPopUpState,setTaskPopUpState,groupPopUpState,setGroupPopUpState,sprintPopUpState,setSprintPopUpState, full, setFull}: Task_Intputs) {
  
  
  function handleMountCreateTask() {
    setTaskPopUpState({ ...taskPopUpState, viewCreateItem: true });
  }
  function handleMountCreateGroup() {
    setGroupPopUpState({ ...groupPopUpState, viewCreateItem: true })
  }
  function handleMountCreateSprint() {
    setSprintPopUpState({...sprintPopUpState, viewCreateItem: true})
  }
  function handleMountDelete(type: string, task: any) {
    if (type === 'group' || type === 'task') {
      setSelectedItemState({
        selectedItem: task,
        viewCompleted: false,
        viewDelete: true,
        selectedCategoryList: tasksToday,
        updateSelectedCategory: setTasksToday
      })
    }

  }
  function handleMountEdit(type: string, task: any) {
    if (type == 'task') {
      let info = { ...taskPopUpState }
      info.selectedItem = task
      info.viewEditItem = true
      info.list =  tasksToday
      info.updateList = setTasksToday
      return setTaskPopUpState({...info})
    }
    if (type == 'group') {
      let info =  { ...groupPopUpState }
      info.selectedItem = task
      info.viewEditItem = true
      info.list =  tasksToday
      info.updateList = setTasksToday
      setGroupPopUpState({...info})
    }
  
  }
  function handleMountCompleted(type: string, task: any) {
    if (type === 'task') {
      setSelectedItemState({
        selectedItem: task,
        viewCompleted: true,
        viewDelete: false,
        selectedCategoryList: tasksToday,
        updateSelectedCategory: setTasksToday
      })
      return;
    }
    if(type == 'group') {
      let info = { ...groupPopUpState }
      info.selectedItem = task
      info.viewUpdateItem = true
      info.list =  tasksToday
      info.updateList = setTasksToday
    
      setGroupPopUpState({...info}) ;
    }
  }


  
    return (
      <div style={{ justifyContent: tasksToday.length ? 'start' : 'center', alignItems: tasksToday.length ? 'start' : 'center' }} className="Container--row Main__Tasks">
        {!tasksToday.length && <div className="EmptyCategory__AddContainer Container--row">
                                <span onClick={handleMountCreateTask} className="EmptyCategory__AddOption ">Create Task <br /> <Icon.PlusCircleFill/> </span>
                                <span onClick={handleMountCreateGroup} className="EmptyCategory__AddOption ">Create Group <br /> <Icon.PlusCircleFill/> </span>
                                <span onClick={handleMountCreateSprint} className="EmptyCategory__AddOption  ">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
                              </div>}
        <Icon.ChevronLeft onClick={() => setFull(!full)} style={{ display: full ? 'initial' : 'none' }} className='Main__Options__Close--toggle' />
        {tasksToday.length > 0 && tasksToday.map((task:any) => {
                            return <div key={task.id} className={`Task Container--col ${task.category ? 'Task--' + task.category.type : 'Task--reg' } `}>
                                    <span className="TaskCategory">{task.category ? 'From ' + task.category.type  + ' "' + task.category.title + '"' : ''  }</span>
                                    <span className="TaskDescription">{ task.category ? `This ${task.category.type} contains ${task.list.length} tasks ` : task.description}</span>
                                    <div className="Container--col TaskInfo">
                                      <span className="TaskControls Container--row">
                                        <Icon.Pencil onClick={()=> handleMountEdit(task.category ? 'group': 'task',task)} />
                                        <Icon.Check2 onClick={()=> handleMountCompleted(task.category ? 'group': 'task',task)}/>
                                        <Icon.XLg onClick={()=> handleMountDelete(task.category ? 'group': 'task',task)} />
                                      </span>
                                      <span className='TaskTime'> Due: {task.due.dateString}</span>
                                    </div>
                                  </div>
                          })}
      </div>
    )
  }