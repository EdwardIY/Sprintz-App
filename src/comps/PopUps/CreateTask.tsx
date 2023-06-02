import {useRef} from 'react'

interface CreateTask_Inputs {
    viewCreateTask: Boolean,
    setViewCreateTask: Function
    tasks:(any)[]
    setTasks: Function
    DateCollection:any
}

interface Task_Interface {
    id: number
    description: string
    category?: {
      type: string
      title: string
    }
    due: {
      date: string
      dateString: string
    }
  
  }
export default function CreateTask({ viewCreateTask, setViewCreateTask,tasks, setTasks,DateCollection }: CreateTask_Inputs) {
    const descriptionValue = useRef<HTMLTextAreaElement>(null);
    const dueDateValue = useRef<HTMLInputElement>(null);
    
    function handleAdd(e:any) {
        e.preventDefault();
        if (descriptionValue.current && dueDateValue.current) {
            let task: Task_Interface = {
                id: NaN,
                description: '',
                due: {
                  date: '',
                  dateString:''
                }
                
            }

            let dateDraft:string[] | number[]  | string = dueDateValue.current.value.split('-');
            [dateDraft[0], dateDraft[2]] = [dateDraft[2], dateDraft[0]];
            [dateDraft[0], dateDraft[1]] = [dateDraft[1], dateDraft[0]];
            dateDraft = dateDraft.map((x)=> +x)
            dateDraft = dateDraft.join('/');
            let dateStringDraft = `${DateCollection.months[+(dateDraft.split('/')[0]) - 1]} ${dateDraft.split('/')[1]}, ${dateDraft.split('/')[2]}`;

            task.id = Math.round(Math.random() * 10000);
            task.description = descriptionValue.current.value;
            task.due.date = dateDraft;
            task.due.dateString = dateStringDraft
            setTasks([...tasks,task])
            setViewCreateTask(false)
        }
        



        }
        

    
    function handleCancel() {
        setViewCreateTask(false)
    }
    return <form onSubmit={handleAdd} style={{
        opacity: viewCreateTask ? '1' : '0', pointerEvents: viewCreateTask ? 'initial' : 'none'}} className="PopUp CreateTask Container--col">
        <h2 className="PopUp--CreateTask__Title">Create Task</h2>
        <textarea ref={descriptionValue} required placeholder="Description" className="PopUp--CreateTask__Description"></textarea>
        <div className="PopUp--CreateTask__DueDate Container--row">
        <span className="PopUp--CreateTask__DateTitle">Add Due Date:</span>
        <input ref={dueDateValue} required className="PopUp--CreateTask__DateInput" type="date" />
        </div>
        <div className="PopUp--CreateTask__Buttons Container--row">
        <button className="PopUp--CreateTask__Button">ADD</button>
        <div onClick={handleCancel} className="PopUp--CreateTask__Button">CANCEL</div>
        </div>

    </form>
}
