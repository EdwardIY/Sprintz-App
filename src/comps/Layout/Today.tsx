import * as Icon from 'react-bootstrap-icons';

interface Task_Intputs {
  tasksToday: (any)[],
  setTaskID:Function
  taskPopUpState: any
  setTaskPopUpState: Function
  groupPopUpState:any
  setGroupPopUpState: Function
  full: boolean,
  setFull: Function
}


export default function Tasks({ tasksToday,setTaskID,taskPopUpState,setTaskPopUpState,groupPopUpState,setGroupPopUpState, full, setFull }: Task_Intputs) {
  
  
  function handleMountCreateTask() {
    setTaskPopUpState({...taskPopUpState, viewCreateTask:true});
  }
  function handleMountDeleteTask(id: number) {
    setTaskID(id);
    setTaskPopUpState({...taskPopUpState, viewDeleteTask:true});
  }
  function handleMountEditTask(id: number) {
    setTaskID(id);
    setTaskPopUpState({...taskPopUpState, viewEditTask:true});
  }
  function handleMountCompletedTask(id: number) {
    setTaskID(id);
    setTaskPopUpState({...taskPopUpState, viewCompletedTask:true});
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
                                      <span className="TaskDescription">{task.description}</span>
                                      <div className="Container--col TaskInfo">
                                        <span className="TaskControls Container--row">
                                          <Icon.Pencil onClick={()=> handleMountEditTask(task.id)} />
                                          <Icon.Check2 onClick={()=> handleMountCompletedTask(task.id)}/>
                                          <Icon.XLg onClick={()=> handleMountDeleteTask(task.id)} />
                                        </span>
                                        <span className='TaskTime'> Due: {task.due.dateString}</span>
                                    </div>
                                  </div>
                          })}
      </div>
    )
  }