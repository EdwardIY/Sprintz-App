interface CompletedTask__Inputs {
    selectedItemState:any
    setSelectedItemState:Function 
}


export default function Completed({ setSelectedItemState,selectedItemState}: CompletedTask__Inputs) {
        let title,description
    
        if(selectedItemState.selectedItem){
            if (selectedItemState.selectedItem.category.type == 'group') {
                title ='Group Completed?'
                description = `Have you completed this group? "${selectedItemState.selectedItem.category.title}"`
            }
            else if(selectedItemState.selectedItem.category.type == 'task') {
                title = 'Task Completed?'
                description = selectedItemState.selectedItem.description
            }

        }
    
    function handleConfirm() {
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