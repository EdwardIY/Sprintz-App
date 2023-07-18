import * as Icon from 'react-bootstrap-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressCircle } from '../Util/ProgressCircle';
import Time from './Time';
import { DateCollection } from '../../Pages/Home'
import { signOutUser,auth } from '../../firebase';

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
  const navigate = useNavigate()

  
  
  const signOut = () => {
    signOutUser(auth)
      .then(() => {
        console.log('User has been signed out')
        navigate('/')
    })
    .catch((err)=> console.log(err))
  }
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
        <li className="Navbar__Item Navbar">
          <Icon.PersonCircle />
          <span>Profile</span>
        </li>
        <li className="Navbar__Item Navbar">
          <Icon.Gear />
          <span>Settings</span>
          </li>
        <li onClick={signOut} className="Navbar__Item Navbar">
          <Icon.BoxArrowLeft />
          <span>Sign Out</span>
          </li>
          <Time DateCollection={DateCollection}/>
        </ul>

        </>

    )
  }