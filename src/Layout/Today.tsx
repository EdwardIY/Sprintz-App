import * as Icon from 'react-bootstrap-icons';

interface Task_Intputs {
  selectedItemState:any
  setSelectedItemState: Function
  setTasksToday:Function
  tasksToday: (any)[],
  taskPopUpState: any
  setTaskPopUpState: Function
  groupPopUpState:any
  setGroupPopUpState: Function
  full: boolean,
  setFull: Function
}


export default function Tasks({selectedItemState,setSelectedItemState,tasksToday,setTasksToday,taskPopUpState,setTaskPopUpState,groupPopUpState,setGroupPopUpState, full, setFull }: Task_Intputs) {
  
  
  function handleMountCreateTask() {
    setTaskPopUpState({...taskPopUpState, viewCreateTask:true});
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
    let info = { ...taskPopUpState }
    info.selectedItem = task
    info.viewEditTask = true
    info.list = tasksToday
    info.updateList = setTasksToday
  
    setTaskPopUpState({...info});
  }
  function handleMountCompleted(type: string, task: any) {
    if (type === 'group' || type === 'task') {
      setSelectedItemState({
        selectedItem: task,
        viewCompleted: true,
        viewDelete: false,
        selectedCategoryList: tasksToday,
        updateSelectedCategory: setTasksToday
      })
    }
  }

  function handleMountCreateGroup() {
    setGroupPopUpState({...groupPopUpState, viewCreateGroup: true})
  }
  
    return (
      <div style={{ justifyContent: tasksToday.length ? 'start' : 'center', alignItems: tasksToday.length ? 'start' : 'center' }} className="Container--row Main__Tasks">
        
        {!tasksToday.length && <div className="Main__Tasks__AddContainer Container--row">
                             <span onClick={()=>  handleMountCreateTask()} className="Main__Tasks__AddOption Main__Tasks__Add--task">Create Task <br /> <Icon.PlusCircleFill/> </span>
                             <span onClick={()=>  handleMountCreateGroup()} className="Main__Tasks__AddOption Main__Tasks__Add--group">Create Group <br /> <Icon.PlusCircleFill/> </span>
                             <span className="Main__Tasks__AddOption  Main__Tasks__Add--sprint">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
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