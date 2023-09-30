import { useState } from 'react';
import { ProgressCircle } from '../Util/ProgressCircle';
import * as Icon from 'react-bootstrap-icons';

interface Sprints_Inputs {
    sprints:any
    setSprints: Function
    sprintPopUpState:any
    setSprintPopUpState: Function
    setSelectedItemState: Function
    setMissed:Function

}


export default function Sprints({
    sprints,
    setSprints,
    sprintPopUpState,
    setSprintPopUpState,
    setSelectedItemState,
    setMissed
}: Sprints_Inputs) {

    const [selected, setSelected] = useState(Infinity);
    const [viewOptions, setViewOptions] = useState(null);
    const [full,setFull] = useState(true)

    // When Sprints is empty
    const handleMountCreateSprint = () => {
        setSprintPopUpState({...sprintPopUpState, viewCreateItem: true})
    }
    // When there Sprints is populated
    const handleSelected = (sprint: any) => {
        setViewOptions(sprint.id)
        setSelected(sprint.id)
    }
    const handleMountDelete = (sprint: any) => {
        setViewOptions(null)
        setSelected(sprint.id)
        setSelectedItemState({
            selectedItem: sprint,
            viewCompleted: false,
            viewDelete: true,
            selectedCategoryList: sprints,
            updateSelectedCategory:setSprints
        })
      }
    const handleMountEdit = (sprint: any) => {
        setViewOptions(null)
        setSelected(sprint.id)
        setSprintPopUpState({
            viewCreateItem: false,
            viewEditItem: true,
            viewUpdateItem:false,
            selectedItem:sprint,
            list: sprints,
            updateList: setSprints
        })
      }
    const handleMountUpdate = (sprint: any) => {
        setViewOptions(null)
        setSelected(sprint.id)
        setSprintPopUpState({
            viewCreateItem: false,
            viewEditItem: false,
            viewUpdateItem:true,
            selectedItem:sprint,
            list: sprints,
            updateList: setSprints
        })
    }
    
    const handleMissed = (sprint: any) => {
        let missedSprintTasks = 0;
        sprint.list.forEach((group: any) => missedSprintTasks+= group.list.length)
        console.log(missedSprintTasks)

        setMissed((missed: number) => missed + missedSprintTasks)
        setSprints(sprints.filter((item:any) => item.id != sprint.id))
    
    }
  
    return (
        <div  className="Container--row Sprints">
            {!sprints.length ?
                <div className="EmptyCategory__AddContainer EmptyCategory__AddContainer--Sprint Container--row">                               
                     <span onClick={handleMountCreateSprint} className="EmptyCategory__AddOption  ">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
                </div>
                :
                sprints.map((sprint:any) => {
                    return <div key={Math.random() * Math.random()} className="Sprints__Sprint Container--col">
                        <h2 className="Sprints__Sprint__Title">{sprint.category.title}</h2>
                        <div key={Math.random() * Math.random()} onClick={()=> handleSelected(sprint)}>
                        <ProgressCircle
                                type={'sprint'}
                                sprint={sprint}
                                selected={selected}
                                value={sprint.progress}
                                size={90}
                                root_color='#e3e3e3'
                                progress_color='#545B77'
                                value_color='#121212'
                                fontSize={24}
                            />
                        </div>              
                        <span className="Sprints__Sprint__TimeRemaining">Work Remaining: {sprint.list.reduce((a:any,b:any)=> a + b.list.length,0)} </span>
                        <span className="Sprints__Sprint__TimeRemaining"> Due: {sprint.due.dateString}</span>
                        <span className="Sprints__Sprint__TimeRemaining"> Total Number Of Tasks: {sprint.totalTasks}</span>
                        {viewOptions === sprint.id && <div className='SprintOptions Container--col'>
                            <Icon.XLg className='SprintOptions_Close' onClick={()=> setViewOptions(null)} />
                            <span onClick={()=>handleMountEdit(sprint)} className='SprintOptions_Option Container--row'>Edit <Icon.Pencil onClick={()=> true } /> </span>
                            <span onClick={()=>handleMountUpdate(sprint)} className='SprintOptions_Option Container--row'>Update <Icon.Check2 onClick={()=> true }/> </span>
                            <span onClick={()=>handleMountDelete(sprint)} className='SprintOptions_Option Container--row'>Delete <Icon.XLg /></span>
                        </div>}
                        { new Date(new Date().toLocaleDateString()) > new Date(sprint.due.date) && <div className="Sprint_Msg Container--col">
                                <span className='Sprint_Msg_Note'>Sprint Missed</span>
                                <span onClick={ () =>  handleMissed(sprint)} className='Sprint_Msg_Remove sprint'>Remove</span>
                        </div> }
                    </div>
                })
                 }
      </div>
    )
  }