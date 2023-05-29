import { ProgressCircle } from "./ProgressCircle";


export default function Sprints() {
  
    return (
        <div className="Container--row Sprints">
            <div className="Sprints__Sprint Container--col">
                <h2 className="Sprints__Sprint__Title">Medium LeetCode Problems</h2>
                <ProgressCircle
                    value={30}
                    size={100}
                    root_color='#e3e3e3'
                    progress_color='#a2a8d3'
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
                    progress_color='#a2a8d3'
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
                    progress_color='#a2a8d3'
                    value_color='#121212'
                    note='Work Remining'
                    fontSize={24}
                />
                <span className="Sprints__Sprint__TimeRemaining">3 day(s) left</span>
            </div>
      </div>
    )
  }