import React from 'react';
import {useState} from 'react'
import Navbar from './comps/Navbar';
import Agenda from './comps/Agenda';
import Time from './comps/Time';
import Sprints  from './comps/Sprints';
import Options  from './comps/Options';
import Tasks from './comps/Tasks';
import CreateTask from './comps/PopUps/CreateTask';


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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Workout at 10am',
      category: {
        type: 'group',
        name: 'Health'
      },
      due: {
        date: "2023-06-02",
        dateString: "June 1, 2023"
      }
    },
    {
      id: 2,
      description: 'Clean at 10am',
      category: {
        type: 'sprint',
        name: 'Hygeine'
      },
      due: {
        date: "2023-10-02",
        dateString: "June 10, 2023"
      }
    },
  ])
  const [viewCreateTask,setViewCreateTask] = useState(false)
  const [viewCreateGroup,setViewCreateGroup] = useState(false)
  const [viewCreateSprint,setViewCreateSprint] = useState(false)
  const [viewConfirm,setViewConfirm] = useState(false)

  return (
    <div className="App">
      {/* PopUps */}
      <CreateTask viewCreateTask={viewCreateTask} setViewCreateTask={setViewCreateTask} tasks={tasks} setTasks={setTasks} DateCollection={DateCollection} />
      <Welcome />

      {/* Layout */}
      <Navbar setViewCreateTask={setViewCreateTask } />

      <div className="Container--row Header">
          <Agenda/>
          <Time DateCollection={DateCollection} />
      </div>

        <div className="Container--row Main">
        <Tasks tasks={tasks} setTasks={setTasks} full={full } setFull={setFull} />
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








