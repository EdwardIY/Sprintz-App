import * as Icon from 'react-bootstrap-icons';
import { useState, useRef } from 'react';
import { ProgressCircle } from './ProgressCircle';

interface NavBar__Inputs {
  taskPopUpState:any
  setTaskPopUpState:Function
}
export default function Navbar({ setTaskPopUpState, taskPopUpState}:NavBar__Inputs) {
    const [active, setActive] = useState<boolean>(false);
  



    return (
        <>
            <Icon.List className='Navbar__OpenNav'  onClick={()=> setActive(!active)}/>
         <ul style={{right: active ? '0px' : '-255px' }} className="NavBar">
            <Icon.XLg  className='Navbar__CloseNav'  onClick={()=> setActive(!active)}/>
            
        {/* <li className="Navbar__Item"><Time/></li> */}
          <ProgressCircle
            value={10}
            size={100}
            root_color='#e3e3e3'
            progress_color='black'
            value_color='#121212'
            note='Sprintz Rating'
            fontSize={24}
          />  
        <li onClick={()=>  setTaskPopUpState({...taskPopUpState, viewCreateTask: true})} className="Navbar__Item Navbar__AddTask ">
          <Icon.CardText/>
          <span>Create Task</span>
        </li>
  
        <li className="Navbar__Item Navbar__AddGroup ">
          <Icon.CardChecklist />
          <span>Create Group</span>
        </li>
  
        <li className="Navbar__Item Navbar__AddSprint">
          <Icon.Lightning />
          <span>Create Sprint</span>
        </li>
        <li className="Navbar__Item Navbar__Profile">
          <Icon.PersonCircle />
          <span>Profile</span>
        </li>
        <li className="Navbar__Item Navbar__Profile">
          <Icon.Gear />
          <span>Settings</span>
        </li>
      </ul>
        </>

    )
  }