import { useState, useRef } from "react"

interface AddTitle_Inputs {
    type: string
    confirm: Function
    cancel: Function
}

export default function AddTitle({type, confirm, cancel}:AddTitle_Inputs ) {
    const title = useRef<HTMLInputElement>(null)

    function handleDone() {
        if (title.current) {
            if (title.current.value) {
                confirm(title.current.value)
                title.current.value = ''
                handleCancel()
                }
            }
    }
    function handleCancel() {
        cancel()
        if (title.current)
        title.current.value = ''
    }


    return <form onSubmit={handleDone} style={{display:'flex',opacity: '1'}} className={`${type == 'popup' ? 'PopUp' : ''} CreateTitle Container--col` }>
    <h2>Add Title</h2>
    <input className="CreateTitle__Input" ref={title} type="text" />
    <div className="PopUp__Buttons Container--row">
        <button className="PopUp__Button">DONE</button> 
        <div onClick={handleCancel} className="PopUp__Button">CANCEL</div>
    </div>
</form>
}