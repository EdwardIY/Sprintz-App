import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Navbar from './comps/Navbar';
import Agenda from './comps/Agenda';
import Time from './comps/Time';


export default function App() {
  return (
    <div className="App">
      <Welcome />
      <Navbar />

      <div className="Container--row Header">
          <Agenda/>
          <Time />
      </div>

        <div className="Container--row Main">
          <Tasks/>
          < Options/>
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




function Tasks() {
  
  return (
    <div className="Container--row Main__Tasks">
      {/* <div className="Main__Tasks__AddContainer Container--row">
        <span className="Main__Tasks__AddOption Main__Tasks__Add--task">Create Task <br /> <Icon.PlusCircleFill/> </span>
        <span className="Main__Tasks__AddOption Main__Tasks__Add--group">Create Group <br /> <Icon.PlusCircleFill/> </span>
        <span className="Main__Tasks__AddOption  Main__Tasks__Add--sprint">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
      </div> */}

      <div className="Task Task--group Container--col">
        <span className="TaskCategory">From Group 2</span>
        <span className="TaskDescription"> Workout at 10am</span>
        <span className="TaskControls Container--row">
          <Icon.Pencil />
          <Icon.Check2 />
          <Icon.XLg />
        </span>
      </div>
      <div className="Task Task--group Container--col">
        <span className="TaskCategory">From Group 4</span>
        <span className="TaskDescription"> Clean the garden at 6pm</span>
        <span className="TaskControls Container--row">
          <Icon.Pencil />
          <Icon.Check2 />
          <Icon.XLg />
        </span>
      </div>
      <div className="Task Task--sprint Container--col">
        <span className="TaskCategory">From Sprint 2</span>
        <span className="TaskDescription"> Complete Brochure</span>
        <span className="TaskControls Container--row">
          <Icon.Pencil />
          <Icon.Check2 />
          <Icon.XLg />
        </span>
      </div>
    </div>
  )
}

function Options() {
  
  return (
    <div className="Container--col Main__Options">
      <div className="Main__Options__Option Container--col">
        <h2 className="Options__Option__Title">Create Task</h2>
          <span className="Options__Option__Description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione beatae at natus odio consequatur nemo?</span>
      </div>
      <div className="Main__Options__Option Container--col">
        <h2 className="Options__Option__Title">Create Group</h2>
          <span className="Options__Option__Description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione beatae at natus odio consequatur nemo?</span>
      </div>
      <div className="Main__Options__Option Container--col">
        <h2 className="Options__Option__Title">Create Sprint</h2>
          <span className="Options__Option__Description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione beatae at natus odio consequatur nemo?</span>
      </div>
    </div>
  )
}

function Sprints() {
  
  return (
    <div className="Container--row Sprints"></div>
  )
}