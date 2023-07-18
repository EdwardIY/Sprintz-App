interface CompletedTask__Inputs {
    selectedItemState:any
    setSelectedItemState: Function 
    setCompleted:Function
}


export default function Completed({
    setSelectedItemState,
    selectedItemState,
    setCompleted}: CompletedTask__Inputs) {    
    
    let title = 'Task Completed?'
    let description = selectedItemState.selectedItem.description
    
    
    function handleConfirm() {
        setCompleted((prev: number) => prev + 1)
        
        let newList = selectedItemState.selectedCategoryList.filter((item:any) => {
            return item.id !== selectedItemState.selectedItem.id
        })
        selectedItemState.updateSelectedCategory(newList)
        setSelectedItemState({
            ...selectedItemState,
            selectedItem: null,
            viewCompleted: false,
            selectedCategoryList: null,
            updateSelectedCategory:null
        })
    }
    function handleCancel() {
        setSelectedItemState({
            ...selectedItemState,
            selectedItem: null,
            viewCompleted: false,
            selectedCategoryList: null,
            updateSelectedCategory:null
        })
    }
    return <>
    <div className='Background'></div>
        <div className="PopUp DeleteTask Container--col">
            <h2 className="">{title}</h2>
            <p className="PopUp--DeleteTask__Description">{description}</p>
            <div className="PopUp__Buttons Container--row">
                <button onClick={handleConfirm} className="PopUp__Button">Confirm</button>
                <div onClick={handleCancel} className="PopUp__Button">CANCEL</div>
            </div>
        </div>
    </> 
}