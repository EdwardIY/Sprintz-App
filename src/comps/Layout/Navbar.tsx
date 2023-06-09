import * as Icon from 'react-bootstrap-icons';
import { useState} from 'react';
import { ProgressCircle } from '../Util/ProgressCircle';
import Time from './Time';
import {DateCollection} from '../../Pages/Home'

interface NavBar__Inputs {
  taskPopUpState:any
  setTaskPopUpState: Function
  groupPopUpState:any
  setGroupPopUpState: Function
  sprintPopUpState:any
  setSprintPopUpState: Function
}
export default function Navbar({
  setTaskPopUpState,
  taskPopUpState,
  groupPopUpState,
  setGroupPopUpState,
  sprintPopUpState,
  setSprintPopUpState
}: NavBar__Inputs) {

    const [active, setActive] = useState<boolean>(false);
  

  console.log(DateCollection)

    return (
      <>
        <div style={{display: active ? 'block' : 'none'}} className="Background"></div>
        <Icon.List className='Navbar__OpenNav'  onClick={()=> setActive(!active)}/>
        <ul style={{right: active ? '0px' : '-255px' }} className="NavBar">
          <Icon.XLg  className='Navbar__CloseNav'  onClick={()=> setActive(!active)}/>
          {/* <li className="Navbar__Item"><Time/></li> */}
          <ProgressCircle
            type={'root'}
            value={10}
            size={100}
            root_color='#e3e3e3'
            progress_color='black'
            value_color='#121212'
            note='Sprintz Rating'
            fontSize={24}
          />  
        <li onClick={()=>  setTaskPopUpState({...taskPopUpState, viewCreateItem: true})} className="Navbar__Item Navbar__AddTask ">
          <Icon.CardText/>
          <span>Create Task</span>
        </li>
  
        <li onClick={()=> setGroupPopUpState({...groupPopUpState, viewCreateItem: true})} className="Navbar__Item Navbar__AddGroup ">
          <Icon.CardChecklist />
          <span>Create Group</span>
        </li>
  
        <li onClick={()=> setSprintPopUpState({...sprintPopUpState, viewCreateItem: true})} className="Navbar__Item Navbar__AddSprint">
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
          <Time DateCollection={DateCollection}/>
        </ul>

        </>

    )
  }