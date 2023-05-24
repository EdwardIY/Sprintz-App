import * as Icon from 'react-bootstrap-icons';
import { useState,useRef } from 'react';

export default function Navbar() {
    const [active, setActive] = useState<boolean>(false);



    return (
        <>
            <Icon.List className='Navbar__OpenNav'  onClick={()=> setActive(!active)}/>
         <ul style={{left: active ? '0px' : '-255px' }} className="NavBar">
            <Icon.XLg  className='Navbar__CloseNav'  onClick={()=> setActive(!active)}/>
            
        {/* <li className="Navbar__Item"><Time/></li> */}
        <li className="Navbar__Item Navbar__Score ">
          12%
        </li>
  
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