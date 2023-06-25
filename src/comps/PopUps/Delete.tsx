interface DeleteTask__Inputs {
    selectedItemState:any
    setSelectedItemState:Function 
}


export default function DeleteTask({ setSelectedItemState,selectedItemState}: DeleteTask__Inputs) {
    // const description = tasksToday.map((task) => task.id == taskID && task.description)
        let title,description
        if(selectedItemState.selectedItem){
            if (selectedItemState.selectedItem.category) {
                title = 'Delete Group?'
                description = `Are you sure you want to delete this group? "${selectedItemState.selectedItem.category.title}"`
            }
            else {
                title = 'Delete Task?'
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
            viewDelete: false,
            selectedCategoryList: null,
            updateSelectedCategory:null
        })
    }
    function handleCancel() {
        setSelectedItemState({
            ...selectedItemState,
            selectedItem: null,
            viewDelete: false,
            selectedCategoryList: null,
            updateSelectedCategory:null
        })
    }
    return <>
            <div style={{opacity: selectedItemState.viewDelete ? '1' : '0', pointerEvents: selectedItemState.viewDelete ? 'initial' : 'none'}} className="PopUp DeleteTask Container--col">
                <h2 className="">{title}</h2>
                <p className="PopUp--DeleteTask__Description">{description}</p>
                <div className="PopUp__Buttons Container--row">
                    <button onClick={handleConfirm} className="PopUp__Button">Confirm</button>
                    <div onClick={handleCancel} className="PopUp__Button">CANCEL</div>
                </div>
            </div>
    </>
}