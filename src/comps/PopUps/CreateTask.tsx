interface CreateTask_Inputs {
    viewCreateTask: Boolean,
    setViewCreateTask: Function
}


export default function CreateTask({ viewCreateTask, setViewCreateTask }: CreateTask_Inputs) {
    
    function handleAdd() {
        
    }
    function handleCancel() {
        setViewCreateTask(false)
    }
    return <form onSubmit={handleAdd} style={{
        opacity: viewCreateTask ? '1' : '0', pointerEvents: viewCreateTask ? 'initial' : 'none'}} className="PopUp CreateTask Container--col">
        <h2 className="PopUp--CreateTask__Title">Create Task</h2>
        <textarea required placeholder="Description" className="PopUp--CreateTask__Description"></textarea>
        <div className="PopUp--CreateTask__DueDate Container--row">
        <span className="PopUp--CreateTask__DateTitle">Add Due Date:</span>
        <input required className="PopUp--CreateTask__DateInput" type="date" />
        </div>
        <div className="PopUp--CreateTask__Buttons Container--row">
        <button className="PopUp--CreateTask__Button">ADD</button>
        <div onClick={handleCancel} className="PopUp--CreateTask__Button">CANCEL</div>
        </div>

    </form>
}