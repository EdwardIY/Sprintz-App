import React, { useEffect } from 'react';
import {useState} from 'react'
import Navbar from './Layout/Navbar';
import Agenda from './Layout/Agenda';
import Time from './Layout/Time';
import Sprints  from './Layout/Sprints';
import Options  from './Layout/Options';
import Today from './Layout/Today';
import CreateTask from './comps/PopUps/Tasks/CreateTask';
import Delete from './comps/PopUps/Delete';
import Completed from './comps/PopUps/Completed';
import EditTask from './comps/PopUps/Tasks/EditTask';
import CreateGroup from './comps/PopUps/Groups/CreateGroup';
import UpdateGroup from './comps/PopUps/Groups/UpdateGroup';
import EditGroup from './comps/PopUps/Groups/EditGroup';
import CreateSprint from './comps/PopUps/Sprints/CreateSprint';


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
  const [background,setBackground] = useState(0)
  const [tasksToday, setTasksToday] = useState([])
  const [taskPopUpState, setTaskPopUpState] = useState({
    selectedItem:null,
    setSelectedItem:null,
    viewCreateItem: false,
    viewEditItem: false,
    list: null,
    updateList: null,
    date:true
  })
  const [groupPopUpState, setGroupPopUpState] = useState({
    viewCreateItem: false,
    viewEditItem: false,
    viewUpdateItem:false,
    selectedItem:null,
    setSelectedItem:null,
    list: null,
    updateList: null,
    date:true
  })
  const [sprintPopUpState, setSprintPopUpState] = useState({
    viewCreateItem: false,
    viewEditItem: false,
    viewUpdateItem:false,
    selectedItem:null,
    setSelectedItem:null,
    list: null,
    updateList:null
  })
  const [selectedItemState, setSelectedItemState] = useState({
    selectedItem: null,
    viewCompleted: false,
    viewDelete: false,
    selectedCategoryList: null,
    updateSelectedCategory:null
  });



  useEffect(() =>{
    const PopUps = [
      taskPopUpState.viewCreateItem,
      taskPopUpState.viewEditItem,
      groupPopUpState.viewCreateItem,
      groupPopUpState.viewEditItem,
      groupPopUpState.viewUpdateItem,
      sprintPopUpState.viewCreateItem,
      sprintPopUpState.viewEditItem,
      sprintPopUpState.viewUpdateItem,
      selectedItemState.viewCompleted,
      selectedItemState.viewDelete
    ]

    for (let state of PopUps) {
        if(state) return setBackground(1)
    }
    setBackground(0)
    
  },[taskPopUpState,groupPopUpState,sprintPopUpState,selectedItemState])

  return (
    <div className="App">

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
        <Today
          tasksToday={tasksToday}
          setTasksToday={setTasksToday}
          setSelectedItemState={setSelectedItemState}
          taskPopUpState={taskPopUpState}
          setTaskPopUpState={setTaskPopUpState}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}
          sprintPopUpState={sprintPopUpState}
          setSprintPopUpState={setSprintPopUpState}
          full={full}
          setFull={setFull}
          />

        <Options
          taskPopUpState={taskPopUpState }
          setTaskPopUpState={setTaskPopUpState}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}
          full={full}
          setFull={setFull} />
      </div>
      


      <Sprints />




        {/* PopUps */}
        {sprintPopUpState.viewCreateItem && 
        <CreateSprint
        sprintPopUpState={sprintPopUpState}
        setSprintPopUpState={setSprintPopUpState}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        groupPopUpState={groupPopUpState}
        setGroupPopUpState={setGroupPopUpState}
        />
      }
      
      
 
      {taskPopUpState.viewCreateItem &&
        <CreateTask
        selectedItemState={selectedItemState}
        setSelectedItemState={setSelectedItemState}
        tasks={tasksToday}
        setTasks={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        createDueDateObject={createDueDateObject}
        validateDate={validateDate}
        type={'popup'} />}


      
      {groupPopUpState.viewCreateItem &&
        <CreateGroup
          tasksToday={tasksToday}
          setTasksToday={setTasksToday}
          taskPopUpState={taskPopUpState}
          setTaskPopUpState={setTaskPopUpState}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}
          createDueDateObject={createDueDateObject}
          validateDate={validateDate}
          type='popup'/>}
       
      {groupPopUpState.updateList && 
        <UpdateGroup
          setSelectedItemState={setSelectedItemState}
          tasksToday={tasksToday}
          setTasksToday={setTasksToday}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState} />}
      
      {groupPopUpState.viewEditItem && 
        <EditGroup
          tasksToday={tasksToday}
          setTasksToday={setTasksToday}
          taskPopUpState={taskPopUpState}
          setTaskPopUpState={setTaskPopUpState}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}
          createDueDateObject={createDueDateObject}
          validateDate={validateDate} />}
      
      {taskPopUpState.viewEditItem &&
        <EditTask
          taskPopUpState={taskPopUpState}
          setTaskPopUpState={setTaskPopUpState}
          createDueDateObject={createDueDateObject}
          validateDate={validateDate} />}
      
      {selectedItemState.viewDelete &&
        <Delete
          selectedItemState={selectedItemState}
          setSelectedItemState={setSelectedItemState} />}
      
      {selectedItemState.viewCompleted &&
        <Completed
          selectedItemState={selectedItemState}
          setSelectedItemState={setSelectedItemState} /> }

<div style={{ opacity: background}}  className="Background"></div>

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
  return new Date(string) >= new Date()
}








