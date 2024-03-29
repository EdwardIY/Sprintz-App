import { useRef } from "react"

interface AddTitle_Inputs {
    type: string
    title: string
    confirm: Function
    cancel: Function
    length: number
    defaultValue?: any

}

export default function Title({type,title,confirm, cancel,length,defaultValue}:AddTitle_Inputs ) {
    const titleValue = useRef<HTMLInputElement>(null)

    function handleDone(e:any) {
        e.preventDefault()
        if (titleValue.current) {
            if (titleValue.current.value) {
                if (titleValue.current.value.length <= length) confirm(titleValue.current.value)
                else return alert('Title must be under ' + (length + 1) + ' characters')

                titleValue.current.value = ''
                handleCancel()
                }
            }
    }
    function handleCancel() {
        cancel()
        if (titleValue.current)
        titleValue.current.value = ''
    }


    return <>
            <div  className='Background'></div>
            <form onSubmit={handleDone} style={{display:'flex',opacity: '1'}} className={`${type == 'popup' ? 'PopUp' : ''} CreateTitle Container--col` }>
                <h2>{ title }</h2>
                <input defaultValue={defaultValue } className="CreateTitle__Input" ref={titleValue} type="text" />
                <div className="PopUp__Buttons Container--row">
                <button className="PopUp__Button">DONE</button> 
                <div onClick={handleCancel} className="PopUp__Button">CANCEL</div>
                </div>
        
        </form>
    </> 
}