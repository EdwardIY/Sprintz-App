import * as Icon from 'react-bootstrap-icons';


interface Options_Intputs {
  full: boolean
  setFull: Function
  taskPopUpState: any
  setTaskPopUpState: Function
}


export default function Options({full,setFull,taskPopUpState,setTaskPopUpState}:Options_Intputs) {
    return (
      <div   style = {{ marginRight: full ? '-600px' : 'initial'}} className="Container--col Main__Options">
        <Icon.ChevronRight onClick={()=> setFull(!full)} className='Main__Options__Close--toggle' />
        <div onClick={() => setTaskPopUpState({ ...taskPopUpState, viewCreateTask: true })} className="Main__Options__Option Container--col">
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