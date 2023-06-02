import React from 'react';
import {useState} from 'react'
import Navbar from './comps/Navbar';
import Agenda from './comps/Agenda';
import Time from './comps/Time';
import Sprints  from './comps/Sprints';
import Options  from './comps/Options';
import Tasks from './comps/Tasks';
import CreateTask from './comps/PopUps/CreateTask';
import DeleteTask from './comps/PopUps/DeleteTask';


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
  const [tasks, setTasks] = useState([])
  const [viewCreateTask,setViewCreateTask] = useState(false)
  const [viewCreateGroup,setViewCreateGroup] = useState(false)
  const [viewCreateSprint,setViewCreateSprint] = useState(false)
  const [viewConfirm, setViewConfirm] = useState(false)
  const [viewDeleteTask, setViewDeleteTask] = useState(true)

  return (
    <div className="App">
      {/* PopUps */}
      <DeleteTask taskID={taskID} setTaskID={setTaskID} tasks={tasks} setTasks={setTasks} viewDeleteTask={viewDeleteTask} setViewDeleteTask={setViewDeleteTask} />
      <CreateTask viewCreateTask={viewCreateTask} setViewCreateTask={setViewCreateTask} tasks={tasks} setTasks={setTasks} DateCollection={DateCollection} />
      <Welcome />

      {/* Layout */}
      <Navbar setViewCreateTask={setViewCreateTask } />

      <div className="Container--row Header">
          <Agenda/>
          <Time DateCollection={DateCollection} />
      </div>

        <div className="Container--row Main">
        <Tasks tasks={tasks} setTasks={setTasks} setTaskID={setTaskID} setViewDeleteTask={setViewDeleteTask} setViewCreateTask={setViewCreateTask} full={full } setFull={setFull} />
        < Options setViewCreateTask={setViewCreateTask} full={full } setFull={setFull}/>
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








