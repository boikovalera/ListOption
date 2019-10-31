import React from 'react'
import AddItemComponent from '../AddItemComponent/AddItemComponent'

export default function AddListItemComponent (props) {
    
    return (
        <div>
            {
                props.listDialogOption.map(dialogItem => (
                    <AddItemComponent
                        key={dialogItem.id} 
                        dialogItem={dialogItem}                         
                        onChangeDialogOption={props.onChangeDialogOption}
                        onSaveDialogOption={props.onSaveDialogOption}
                        onDeleteDialogOption={props.onDeleteDialogOption}
                    />
                ))
            }                
        </div>
    )    
}