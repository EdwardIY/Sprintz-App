import { useState, useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons';


interface ProgressCircle_Inputs {
    type:string
    value: number,
    size: number,
    root_color: string,
    progress_color: string,
    value_color: string,
    fontSize: number,
    sprint?:any
    note?: any
    controls?:any
}
export function ProgressCircle({type,sprint,controls,value,size, root_color,progress_color,value_color,fontSize,note}:ProgressCircle_Inputs) {
    const [progressValue, setProgressValue] = useState(0);
    const [seeOptions,setSeeOptions] = useState(false)

    useEffect(() => { // Increment animation
        for (let i = progressValue; i <= value; i++){
            setTimeout(() => {
                setProgressValue(i)
            },i * 10)
        }
    }, [value])


    



    return (
        <div className="ProgressCircle Container--col">


            <div
                onClick={()=> setSeeOptions(true)}
                style={{
                    background: `conic-gradient(${progress_color} ${progressValue}%, ${root_color} 0deg)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    boxShadow: '0px 0px 10px 0px var(--colorB)',
                    transition: '.5s'
                }} className="ProgressCircle__Parent Container--row">
                <div style={{
                    width: `${size - 25}px`,
                    height: `${size - 25}px`,
                    borderRadius: '50%',
                    background: `${value_color}`,
                    fontSize: `${fontSize}px`,
                    fontWeight: '600',
                    boxShadow: '0px 0px 56px 0px #a2a8d3',
                    fontStyle:'italic'
                }} className="ProgressCircle__Value Container--col">
                    {progressValue}%
                </div>
            </div>
            <span style={{ fontSize: '16px' }}>{note && note}</span>
            {(seeOptions && type == 'sprint') &&  <div style={{opacity: seeOptions ? '1' : '0', pointerEvents: seeOptions ? 'initial' : 'none'}}  className='ProgressCircle_Message Container--col'>
                <Icon.XLg className='ProgressCircle_Message_Close' onClick={()=> setSeeOptions(false)} />
                <span className='ProgressCircle_Message_Option Container--row'>Edit <Icon.Pencil onClick={()=> true } /> </span>
                <span className='ProgressCircle_Message_Option Container--row'>Update <Icon.Check2 onClick={()=> true }/> </span>
                <span onClick={()=> controls.delete(sprint)} className='ProgressCircle_Message_Option Container--row'>Delete <Icon.XLg /></span>
            </div> }
        </div>
    )
}