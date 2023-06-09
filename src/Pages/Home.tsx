import React, { useEffect } from 'react';
import '../styles/Home.css'
import {useState} from 'react'
import Navbar from '../comps/Layout/Navbar';
import Agenda from '../comps/Layout/Agenda';
import Time from '../comps/Layout/Time';
import Sprints  from '../comps/Layout/Sprints';
import Options  from '../comps/Layout/Options';
import Today from '../comps/Layout/Today';
import CreateTask from '../comps/PopUps/Tasks/CreateTask';
import Delete from '../comps/PopUps/Delete';
import Completed from '../comps/PopUps/Completed';
import EditTask from '../comps/PopUps/Tasks/EditTask';
import CreateGroup from '../comps/PopUps/Groups/CreateGroup';
import UpdateGroup from '../comps/PopUps/Groups/UpdateGroup';
import EditGroup from '../comps/PopUps/Groups/EditGroup';
import CreateSprint from '../comps/PopUps/Sprints/CreateSprint';
import EditSprint from '../comps/PopUps/Sprints/EditSprint';
import UpdateSprint from '../comps/PopUps/Sprints/UpdateSprint';


export const DateCollection = {
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

 export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSprints, setShowSprints] = useState(true);
  const [tasksToday, setTasksToday] = useState([])
  const [sprints,setSprints] = useState([])
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



  return (
    <div className="Home">

      <Welcome />

      {/* Layout */}
      <Navbar
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        groupPopUpState={groupPopUpState}
        setGroupPopUpState={setGroupPopUpState}
        sprintPopUpState={sprintPopUpState}
        setSprintPopUpState={setSprintPopUpState}/>

      <div className="Container--row Header">
        <Agenda/>
        <Time
          DateCollection={DateCollection} />
      </div>

        <div  className={`Container--row Main` + ` ${showSprints ? 'Main--shorten' : 'Main--expand'}`}>
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
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          showSprints={showSprints}
          setShowSprints={setShowSprints}
          />

        <Options
          taskPopUpState={taskPopUpState }
          setTaskPopUpState={setTaskPopUpState}
          groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}
          sprintPopUpState={sprintPopUpState}
          setSprintPopUpState={setSprintPopUpState}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
      />
      </div>


      <Sprints
          sprints={sprints}
          setSprints={setSprints}
          sprintPopUpState={sprintPopUpState}
          setSprintPopUpState={setSprintPopUpState}
          setSelectedItemState={setSelectedItemState}
          showSprints={showSprints}
          setShowSprints={setShowSprints}

      />




      {/* PopUps */}

        {sprintPopUpState.viewCreateItem && 
        <CreateSprint
        sprints={sprints}
        setSprints={setSprints}
        sprintPopUpState={sprintPopUpState}
        setSprintPopUpState={setSprintPopUpState}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        groupPopUpState={groupPopUpState}
        setGroupPopUpState={setGroupPopUpState}
        createDueDateObject={createDueDateObject}
        validateDate={validateDate}
        />
      }
        {sprintPopUpState.viewEditItem &&
          <EditSprint
            sprints={sprints}
            setSprints={setSprints}
            sprintPopUpState={sprintPopUpState}
            setSprintPopUpState={setSprintPopUpState}
            taskPopUpState={taskPopUpState}
            setTaskPopUpState={setTaskPopUpState}
            groupPopUpState={groupPopUpState}
            setGroupPopUpState={setGroupPopUpState}
            createDueDateObject={createDueDateObject}
            validateDate={validateDate}
        />}
        {sprintPopUpState.viewUpdateItem &&
          <UpdateSprint
          sprints={sprints}
          setSprints={setSprints}
          sprintPopUpState={sprintPopUpState}
          setSprintPopUpState={setSprintPopUpState}
          // groupPopUpState={groupPopUpState}
          setGroupPopUpState={setGroupPopUpState}

        />}
      
      
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
       
      
      {groupPopUpState.viewUpdateItem && 
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

    </div>
  )
  
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









