import * as Icon from 'react-bootstrap-icons';

interface Task_Intputs {
  tasksToday: (any)[],
  setTaskID:Function
  taskPopUpState: any
  setTaskPopUpState:Function
  full: boolean,
  setFull: Function
}


export default function Tasks({ tasksToday,setTaskID,taskPopUpState,setTaskPopUpState, full, setFull }: Task_Intputs) {
  

  function handleMountDelete(id: number) {
    setTaskID(id);
    setTaskPopUpState({...taskPopUpState, viewDeleteTask:true});
  }
  function handleMountEdit(id: number) {
    setTaskID(id);
    setTaskPopUpState({...taskPopUpState, viewEditTask:true});
  }
  function handleMountCreate() {
    setTaskPopUpState({...taskPopUpState, viewCreateTask:true});
  }
  function handleMountCompleted(id: number) {
    setTaskID(id);
    setTaskPopUpState({...taskPopUpState, viewCompletedTask:true});
  }
  
    return (
      <div style={{ justifyContent: tasksToday.length ? 'start' : 'center', alignItems: tasksToday.length ? 'start' : 'center' }} className="Container--row Main__Tasks">
        
        {!tasksToday.length && <div className="Main__Tasks__AddContainer Container--row">
                             <span onClick={()=>  handleMountCreate()} className="Main__Tasks__AddOption Main__Tasks__Add--task">Create Task <br /> <Icon.PlusCircleFill/> </span>
                             <span className="Main__Tasks__AddOption Main__Tasks__Add--group">Create Group <br /> <Icon.PlusCircleFill/> </span>
                             <span className="Main__Tasks__AddOption  Main__Tasks__Add--sprint">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
                        </div>}
        {tasksToday.length > 0 && <Icon.ChevronLeft onClick={() => setFull(!full)} style={{ opacity: full ? '1' : '0', pointerEvents: full ? 'initial' : 'none' }} className='Main__Options__Close--toggle' />}
        {tasksToday.length > 0 && tasksToday.map((task:any) => {
                            return <div key={task.id} className={`Task Container--col ${task.category ? 'Task--' + task.category.type : 'Task--reg' } `}>
                                      <span className="TaskCategory">{task.category ? 'From ' + task.category.type  + ' "' + task.category.name + '"' : ''  }</span>
                                      <span className="TaskDescription">{task.description}</span>
                                      <div className="Container--col TaskInfo">
                                        <span className="TaskControls Container--row">
                                          <Icon.Pencil onClick={()=> handleMountEdit(task.id)} />
                                          <Icon.Check2 onClick={()=> handleMountCompleted(task.id)}/>
                                          <Icon.XLg onClick={()=> handleMountDelete(task.id)} />
                                        </span>
                                        <span className='TaskTime'> Due: {task.due.dateString}</span>
                                    </div>
                                  </div>
                          })}
      </div>
    )
  }