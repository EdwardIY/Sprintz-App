import { useState, useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons';


interface ProgressCircle_Inputs {
    type:string
    value: number | number[],
    size: number,
    root_color: string,
    progress_color: string,
    value_color: string,
    fontSize: number,
    selected?:number
    sprint?: any
    note?: any
    controls?:any
}
export function ProgressCircle({type,sprint,selected,controls,value,size, root_color,progress_color,value_color,fontSize,note}:ProgressCircle_Inputs) {


console.log(typeof value == 'object' ? value[1] : value)
    

console.log(value)

    return (
        <div className="ProgressCircle Container--col">


            <div
                style={{
                    background: `conic-gradient(${progress_color} ${typeof value == 'object' ? value[1] : value}%, ${root_color} 0deg)`,
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
                    {typeof value == 'object' ? value[1] : value}%
                </div>
            </div>
            <span style={{ fontSize: '16px' }}>{note && note}</span>
        </div>
    )
}