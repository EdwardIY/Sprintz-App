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
          <Options/>
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
      <div className="Task"></div>
      <div className="Task"></div>
      <div className="Task"></div>
      <div className="Task"></div>
    </div>
  )
}

function Options() {
  
  return (
    <div className="Container--col Main__Options">
      {/* <h2>Create TASK</h2>
      <h2>Create Group</h2>
      <h2>Create Sprint</h2> */}
    </div>
  )
}

function Sprints() {
  
  return (
    <div className="Container--row Sprints"></div>
  )
}