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
                        listColor={props.listColor}                      
                        onChangeDialogOption={props.onChangeDialogOption}
                        onSaveDialogOption={props.onSaveDialogOption}
                        onCancelDialogOption={props.onCancelDialogOption}
                    />
                ))
            }                
        </div>
    )    
}