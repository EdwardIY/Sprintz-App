import { ProgressCircle } from '../comps/Util/ProgressCircle';
import * as Icon from 'react-bootstrap-icons';

interface Sprints_Inputs {
    sprints:any
    setSprints: Function
    sprintPopUpState:any
    setSprintPopUpState: Function
}


export default function Sprints({sprints,setSprints,sprintPopUpState,setSprintPopUpState}:Sprints_Inputs) {


console.log(sprints)
    const handleMountCreateSprint = () => {
        setSprintPopUpState({...sprintPopUpState, viewCreateItem: true})
      }
      const handleMountDelete = (sprint: any) => {}
      const handleMountEdit = (sprint: any) => {}
      const handleMountCompleted = (sprint: any) => {}
  
    return (
        <div className="Container--row Sprints">
            {!sprints.length ?
                <div className="EmptyCategory__AddContainer EmptyCategory__AddContainer--Sprint Container--row">                               
                     <span onClick={handleMountCreateSprint} className="EmptyCategory__AddOption  ">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
                </div>
                :
                sprints.map((sprint:any) => {
                    return <div className="Sprints__Sprint Container--col">
                            <h2 className="Sprints__Sprint__Title">{sprint.title}</h2>
                            <ProgressCircle
                                value={sprint.progress}
                                size={100}
                                root_color='#e3e3e3'
                                progress_color='#545B77'
                                value_color='#121212'
                                note={`Work Remaining: ${sprint.list.reduce((a:any,b:any)=> a + b.list.length,0)} tasks ( ${100 - sprint.progress}%)`}
                                fontSize={24}
                            />
                        <span className="Sprints__Sprint__TimeRemaining"> Due: {sprint.due.dateString}</span>
                        </div>
                })
                 }
            
            {/* <div className="Sprints__Sprint Container--col">
                <h2 className="Sprints__Sprint__Title">Medium LeetCode Problems</h2>
                <ProgressCircle
                    value={30}
                    size={100}
                    root_color='#e3e3e3'
                    progress_color='#545B77'
                    value_color='#121212'
                    note='Work Remining'
                    fontSize={24}
                />
                <span className="Sprints__Sprint__TimeRemaining">3 day(s) left</span>
            </div>
            <div className="Sprints__Sprint Container--col">
                <h2 className="Sprints__Sprint__Title">Learn Algorithms</h2>
                <ProgressCircle
                    value={20}
                    size={100}
                    root_color='#e3e3e3'
                    progress_color='#545B77'
                    value_color='#121212'
                    note='Work Remining'
                    fontSize={24}
                />
                <span className="Sprints__Sprint__TimeRemaining">3 day(s) left</span>
            </div>
            <div className="Sprints__Sprint Container--col">
                <h2 className="Sprints__Sprint__Title">Create Sprints App</h2>
                <ProgressCircle
                    value={60}
                    size={100}
                    root_color='#e3e3e3'
                    progress_color='#545B77'
                    value_color='#121212'
                    note='Work Remining'
                    fontSize={24}
                />
                <span className="Sprints__Sprint__TimeRemaining">3 day(s) left</span>
            </div> */}
      </div>
    )
  }