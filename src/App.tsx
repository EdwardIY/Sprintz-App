import React from 'react';
import {useState} from 'react'
import Navbar from './comps/Navbar';
import Agenda from './comps/Agenda';
import Time from './comps/Time';
import Sprints  from './comps/Sprints';
import Options  from './comps/Options';
import Tasks from './comps/Tasks';
import CreateTask from './comps/PopUps/Tasks/CreateTask';
import DeleteTask from './comps/PopUps/Tasks/DeleteTask';
import EditTask from './comps/PopUps/Tasks/EditTask';
import CompletedTask from './comps/PopUps/Tasks/CompletedTask';
import CreateGroup from './comps/PopUps/Groups/CreateGroup';


const DateCollection = {
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
],
months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
 }

export default function App() {
  const [full, setFull] = useState(false);
  const [taskID, setTaskID] = useState(null);
  const [tasksToday, setTasksToday] = useState([])
  const [taskPopUpState, setTaskPopUpState] = useState({
    viewCreateTask: false,
    viewDeleteTask: false,
    viewEditTask: false,
    viewCompletedTask: false
  })
  const [groupPopUpState, setGroupPopUpState] = useState({
    viewCreateGroup: false,
    viewDeleteGroup: false,
    viewEditGroup: false,
    viewCompletedGroup: false
  })
  const [viewCreateGroup,setViewCreateGroup] = useState(false)
  const [viewCreateSprint,setViewCreateSprint] = useState(false)
  const [viewConfirm, setViewConfirm] = useState(false)


  return (
    <div className="App">
      {/* PopUps */}
      <CreateTask
        setTaskID={setTaskID}
        tasksToday={tasksToday}
        setTasksToday={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        createDueDateObject={createDueDateObject}
        DateCollection={DateCollection}
        validateDate={validateDate} /> 
      
      <EditTask
        taskID={taskID}
        setTaskID={setTaskID}
        tasksToday={tasksToday}
        setTasksToday={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        createDueDateObject={createDueDateObject}
        validateDate={validateDate} /> 
        
      
      <DeleteTask
        taskID={taskID}
        setTaskID={setTaskID}
        tasksToday={tasksToday}
        setTasksToday={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState} />
      
      <CompletedTask
        taskID={taskID}
        setTaskID={setTaskID}
        tasksToday={tasksToday}
        setTasksToday={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState} />
      
      <CreateGroup
        groupPopUpState={groupPopUpState}
        setGroupPopUpState={setGroupPopUpState} />
      
      
      
      <Welcome />

      {/* Layout */}
      <Navbar
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        groupPopUpState={groupPopUpState}
        setGroupPopUpState={setGroupPopUpState}/>

      <div className="Container--row Header">
        <Agenda/>
        <Time
          DateCollection={DateCollection} />
      </div>

        <div className="Container--row Main">
        <Tasks
          tasksToday={tasksToday}
          setTaskID={setTaskID}
          taskPopUpState={taskPopUpState}
          setTaskPopUpState={setTaskPopUpState}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}
          full={full}
          setFull={setFull} />

        < Options
          taskPopUpState={taskPopUpState }
          setTaskPopUpState={setTaskPopUpState}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}
          full={full}
          setFull={setFull} />
        </div>

      <Sprints />
    </div>
  );
}


function Welcome() {
  
  return (
    <div className="Container--col Header__Welcome">
     
    </div>
  )
}

function createDueDateObject(dueDateValue:any) {
  let dateDraft:any = dueDateValue.split('-');
  [dateDraft[0], dateDraft[2]] = [dateDraft[2], dateDraft[0]];
  [dateDraft[0], dateDraft[1]] = [dateDraft[1], dateDraft[0]];
  dateDraft = dateDraft.map((x:any)=> +x)
  dateDraft = dateDraft.join('/');
  let dateStringDraft = `${DateCollection.months[+(dateDraft.split('/')[0]) - 1]} ${dateDraft.split('/')[1]}, ${dateDraft.split('/')[2]}`;

  return {dateDraft,dateStringDraft}
}
function validateDate(dueDateValue: any) {
  let string = dueDateValue.split('-').map((num:string,i:number) => {
    if (i == 2)
      return +num + 1;
    return +num
  }).join('-')
  console.log(string)
  console.log(new Date(string))
  console.log(new Date())
  return new Date(string) >= new Date()
}








