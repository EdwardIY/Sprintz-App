import * as Icon from 'react-bootstrap-icons';

interface Task_Intputs {
  tasks: (any)[],
  setTasks: Function
  full: boolean,
  setFull: Function
}

// {tasks.map((task) => {
//   return <div className={`Task Container--col ${task.category ? 'Task--' + task.category.type : '' } `}>
//             <span className="TaskCategory">{task.category ? 'From ' + task.category.type  + ' '  + task.category.name : ''  }</span>
//             <span className="TaskDescription">{task.category.description}</span>
//             <div className="Container--col TaskInfo">
//               <span className="TaskControls Container--row">
//                 <Icon.Pencil />
//                 <Icon.Check2 />
//                 <Icon.XLg />
//               </span>
//               <span className='TaskTime'> Due on: {task.category.due.dateString}</span>
//           </div>
//         </div>
// })}

export default function Tasks({tasks,setTasks,full,setFull}:Task_Intputs) {
  
    return (
      <div style={{ justifyContent: tasks.length ? 'start' : 'center', alignItems: tasks.length ? 'start' : 'center' }} className="Container--row Main__Tasks">
        
        {!tasks.length && <div className="Main__Tasks__AddContainer Container--row">
                             <span className="Main__Tasks__AddOption Main__Tasks__Add--task">Create Task <br /> <Icon.PlusCircleFill/> </span>
                             <span className="Main__Tasks__AddOption Main__Tasks__Add--group">Create Group <br /> <Icon.PlusCircleFill/> </span>
                             <span className="Main__Tasks__AddOption  Main__Tasks__Add--sprint">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
                        </div>}
        {tasks.length && <Icon.ChevronLeft onClick={() => setFull(!full)} style={{ opacity: full ? '1' : '0', pointerEvents: full ? 'initial' : 'none' }} className='Main__Options__Close--toggle' />}
        {tasks.length && tasks.map((task) => {
                            return <div key={task.id} className={`Task Container--col ${task.category ? 'Task--' + task.category.type : 'Task--reg' } `}>
                                      <span className="TaskCategory">{task.category ? 'From ' + task.category.type  + ' "' + task.category.name + '"' : ''  }</span>
                                      <span className="TaskDescription">{task.description}</span>
                                      <div className="Container--col TaskInfo">
                                        <span className="TaskControls Container--row">
                                          <Icon.Pencil />
                                          <Icon.Check2 />
                                          <Icon.XLg />
                                        </span>
                                        <span className='TaskTime'> Due on: {task.due.dateString}</span>
                                    </div>
                                  </div>
                          })}
      </div>
    )
  }