import * as Icon from 'react-bootstrap-icons';
import { useState, useRef } from 'react';
import { ProgressCircle } from './ProgressCircle';

export default function Navbar() {
    const [active, setActive] = useState<boolean>(false);
  const [x, setX] = useState(10);
  



    return (
        <>
            <Icon.List className='Navbar__OpenNav'  onClick={()=> setActive(!active)}/>
         <ul style={{right: active ? '0px' : '-255px' }} className="NavBar">
            <Icon.XLg  className='Navbar__CloseNav'  onClick={()=> setActive(!active)}/>
            
        {/* <li className="Navbar__Item"><Time/></li> */}
          <ProgressCircle
            value={x}
            size={100}
            root_color='#e3e3e3'
            progress_color='#a2a8d3'
            value_color='white'
            note='Completion Rate'
            fontSize={25}
          />  
        <li className="Navbar__Item Navbar__AddTask ">
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
      </ul>
        </>

    )
  }