import React from 'react';
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
  const [tasksToday, setTasksToday] = useState([])
  const [taskPopUpState, setTaskPopUpState] = useState({
    selectedItem:null,
    setSelectedItem:null,
    viewCreateTask: false,
    viewEditTask: false,
    list: null,
    updateList: null,
    date:true
  })
  const [groupPopUpState, setGroupPopUpState] = useState({
    viewCreateGroup: false,
    viewEditGroup: false,
    selectedItem:null,
    setSelectedItem:null,
    list: null,
    updateList:null
  })
  const [selectedItemState, setSelectedItemState] = useState<any>({
    selectedItem: null,
    viewCompleted: false,
    viewDelete: false,
    selectedCategoryList: null,
    updateSelectedCategory:null
  });
  // const [updateSelectedCategory,setUpdateSelectedCategory] = useState<null|Function>(null)
  // const [itemPopUpState, setItemPopUpState] = useState({
  //   viewCompleted: false,
  //   viewDelete: false
  // })

  return (
    <div className="App">
      {/* PopUps */}
      <CreateTask
       selectedItemState={selectedItemState}
       setSelectedItemState={setSelectedItemState}
        tasksToday={tasksToday}
        setTasksToday={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        createDueDateObject={createDueDateObject}
        DateCollection={DateCollection}
        validateDate={validateDate} /> 
      
      {/* <EditTask
        selectedItemState={selectedItemState}
        setSelectedItemState={setSelectedItemState}
        tasksToday={tasksToday}
        setTasksToday={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        createDueDateObject={createDueDateObject}
        validateDate={validateDate} />  */}
      
 
        
      
      
      <CreateGroup
        tasksToday={tasksToday}
        setTasksToday={setTasksToday}
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        groupPopUpState={groupPopUpState}
        setGroupPopUpState={setGroupPopUpState}
        createDueDateObject={createDueDateObject}
        validateDate={validateDate} />
      


      <EditTask
        taskPopUpState={taskPopUpState}
        setTaskPopUpState={setTaskPopUpState}
        createDueDateObject={createDueDateObject}
        validateDate={validateDate} /> 
      



      <Delete
        selectedItemState={selectedItemState}
        setSelectedItemState={setSelectedItemState}
      />
      
      <Completed
       selectedItemState={selectedItemState}
        setSelectedItemState={setSelectedItemState}
      />
      
      
      
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
          selectedItemState={selectedItemState}
          setSelectedItemState={setSelectedItemState}
          setTasksToday={setTasksToday}
          taskPopUpState={taskPopUpState}
          setTaskPopUpState={setTaskPopUpState}
          // groupkPopUpState={groupPopUpState}
          // setGroupPopUpState={setGroupPopUpState}
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
  return new Date(string) >= new Date()
}








