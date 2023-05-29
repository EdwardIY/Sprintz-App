import React from 'react';
import Navbar from './comps/Navbar';
import Agenda from './comps/Agenda';
import Time from './comps/Time';
import Sprints  from './comps/Sprints';
import  Options  from './comps/Options';
import Tasks from './comps/Tasks';


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








