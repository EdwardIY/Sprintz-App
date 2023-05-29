import * as Icon from 'react-bootstrap-icons';


export default function Tasks() {
  
    return (
      <div className="Container--row Main__Tasks">
        {/* <div className="Main__Tasks__AddContainer Container--row">
          <span className="Main__Tasks__AddOption Main__Tasks__Add--task">Create Task <br /> <Icon.PlusCircleFill/> </span>
          <span className="Main__Tasks__AddOption Main__Tasks__Add--group">Create Group <br /> <Icon.PlusCircleFill/> </span>
          <span className="Main__Tasks__AddOption  Main__Tasks__Add--sprint">Create Sprint <br /> <Icon.PlusCircleFill/> </span>
        </div> */}
  
        <div className="Task Task--group Container--col">
          <span className="TaskCategory">From Group 2</span>
          <span className="TaskDescription"> Workout at 10am</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--group Container--col">
          <span className="TaskCategory">From Group 4</span>
          <span className="TaskDescription"> Clean the garden at 6pm</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--group Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Learn AVL Trees and after review BST. Finished rough draft of spacex x clon by making the note dynamic. After that you can host it on your port with nelify. I really need to study flashcards</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint 2</span>
          <span className="TaskDescription"> Complete Brochure</span>
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
          </span>
        </div>
      </div>
    )
  }