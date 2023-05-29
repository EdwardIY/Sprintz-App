import {useState,useEffect} from 'react'

interface ProgressCircle_Inputs {
    value: number,
    size: number,
    root_color: string,
    progress_color: string,
    value_color: string,
    fontSize: number,
    note?: string

}
export function ProgressCircle({value,size, root_color,progress_color,value_color,fontSize,note}:ProgressCircle_Inputs) {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {

        for (let i = progressValue; i <= value; i++){
            setTimeout(() => {
                setProgressValue(i)
            },i * 10)
        }
    }, [value])

    



    return (
        <div className="ProgressCircle Container--row">
            <div
                style={{
                    background: `conic-gradient(${progress_color} ${progressValue}%, ${root_color} 0deg)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    boxShadow: 'inset 1px 0px 16px 3px rgba(0,0,0,0.27)',
                    transition: '1s'

                }} className="ProgressCircle__Parent Container--row">
                <div style={{
                    width: `${size - 25}px`,
                    height: `${size - 25}px`,
                    borderRadius: '50%',
                    background: `${value_color}`,
                    fontSize: `${fontSize}px`,
                    fontWeight: 'bold'
                }} className="ProgressCircle__Value Container--col">
                    {progressValue}
                    <span style={{fontSize:'9px'}}>{note && note}</span>
                </div>
            </div>
        </div>
    )
}