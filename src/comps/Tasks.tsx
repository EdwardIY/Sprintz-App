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
          <span className="TaskCategory">From Group <span>'Health'</span></span>
          <span className="TaskDescription"> Workout at 10am</span>

          <div className="Container--col TaskInfo">
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
            </span>
            <span className='TaskTime'> Due in 2day(s) an 12hr(s)</span>
          </div>

        </div>
        <div className="Task Task--group Container--col">
          <span className="TaskCategory">From Group <span>'Yard Work'</span></span>
          <span className="TaskDescription"> Clean the garden</span>

          <div className="Container--col TaskInfo">
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
            </span>
            <span className='TaskTime'> Due in 1day(s)</span>
          </div>

        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint <span>'Learn Algorithms'</span></span>
          <span className="TaskDescription">Finish DPS Youtube video</span>

          <div className="Container--col TaskInfo">
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
            </span>
            <span className='TaskTime'> Due in 12hr(s)</span>
          </div>

        </div>
        <div className="Task Task--sprint Container--col">
          <span className="TaskCategory">From Sprint <span>'Learn Algorithms'</span></span>
          <span className="TaskDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga praesentium fugit sed est incidunt id recusandae aspernatur assumenda nulla eos consectetur, dolor quibusdam dolores, quo earum laborum eligendi fugiat voluptatem!</span>

          <div className="Container--col TaskInfo">
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
            </span>
            <span className='TaskTime'> Due in 12hr(s)</span>
          </div>

        </div>

        <div className="Task Task--group Container--col">
          <span className="TaskCategory">From Group <span>'Yard Work'</span></span>
          <span className="TaskDescription"> Clean the garden</span>

          <div className="Container--col TaskInfo">
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
            </span>
            <span className='TaskTime'> Due in 1day(s)</span>
          </div>

        </div>        <div className="Task Task--group Container--col">
          <span className="TaskCategory">From Group <span>'Yard Work'</span></span>
          <span className="TaskDescription"> Clean the garden</span>

          <div className="Container--col TaskInfo">
          <span className="TaskControls Container--row">
            <Icon.Pencil />
            <Icon.Check2 />
            <Icon.XLg />
            </span>
            <span className='TaskTime'> Due in 1day(s)</span>
          </div>

        </div>
        
      </div>
    )
  }