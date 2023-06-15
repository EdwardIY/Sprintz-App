import { useState,useRef } from "react"

interface CreateGroup__Inputs {
    groupPopUpState:any
    setGroupPopUpState: Function
}


export default function CreateGroup({ groupPopUpState, setGroupPopUpState }: CreateGroup__Inputs) {
    const [tasks,setTasks] = useState<string[]>([])
    const description = useRef<HTMLTextAreaElement>(null)

    function handleAdd(e:any) {
        e.preventDefault()
        if (description.current) {
            setTasks([...tasks,description.current.value])
            description.current.value = ''
        }
    }
    function handleCancel() {
        setGroupPopUpState({...groupPopUpState, viewCreateGroup: false,})
    }
    return <div style={{ opacity: groupPopUpState.viewCreateGroup ? '1' : '0', pointerEvents: groupPopUpState.viewCreateGroup ? 'initial' : 'none' }} className="PopUp Container--col">
        <div className="AddTaskContainer--group  Container--row">
        <form className="AddTask--group">
            <div className="AddTaskContainer--group__Add Container--col">
                        <h2 className="PopUp__Title">Add Task</h2>
                        <textarea ref={description}  required placeholder="Description" className="PopUp__TextArea"></textarea>
                    <div className="PopUp__Buttons Container--row">
                        <button onClick={handleAdd} className="PopUp__Button">ADD</button>

                    </div>
                </div>
            </form>
            
            <form className="TaskList--group  Container--col">
                {/* <input required placeholder="ENTER TITLE" className="TaskList--group__Title" type="text" /> */}
                <ul className="TaskList--group__List">
                    {tasks.length === 0 ? <span className="TaskList--group__List__Message">EMPTY GROUP</span> : (tasks.map((task) => <li>{task}</li>))}
                </ul>
                <div className="PopUp__DueDate Container--row">
                        <span className="PopUp__DateTitle">Add Due Date:</span>
                        <input required className="PopUp__DateInput" type="date" />
                </div>
                <div className="PopUp__Buttons Container--row">
                    <button className="PopUp__Button">DONE</button> 
                    <div onClick={handleCancel} className="PopUp__Button">CANCEL</div>
                </div>
        </form>

        </div>
        
                {/* <div className="PopUp__Search">
                    <div className="SearchBarContainer">
                        <input type="text" />
                    </div>
                    <div className="Search__Output"></div>
                </div> */}
    </div>
}