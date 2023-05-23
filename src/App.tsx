import React from 'react';


export default function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="Container--row Header">
          <Welcome />
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


function Navbar() {
  
  return (
    <div className="Container--col NavBar">
      <span>ICON</span>
      <span>ICON</span>
      <span>ICON</span>
      <span>ICON</span>
      <span>ICON</span>
      <span>ICON</span>
    </div>
  )
}

function Welcome() {
  
  return (
    <div className="Container--col Header__Welcome">
      <h1>Helo Weemfed</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem hic odio eligendi sunt corrupti? Repellendus unde quisquam tempore sequi!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem hic odio eligendi sunt corrupti? Repellendus unde quisquam tempore sequi!</p>
    </div>
  )
}
function Time() {
  
  return (
    <div className="Container--col Header__Time">
     
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
      <h2>Create TASK</h2>
      <h2>Create Group</h2>
      <h2>Create Sprint</h2>
    </div>
  )
}

function Sprints() {
  
  return (
    <div className="Container--row Sprints"></div>
  )
}