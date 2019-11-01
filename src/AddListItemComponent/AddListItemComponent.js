import React from 'react'
import PropTypes from '../propTypes';
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

AddListItemComponent.propTypes = {
    listDialogOption: PropTypes.listDialogOption.isRequired,
    listColor: PropTypes.listColor.isRequired,    
    onChangeDialogOption: PropTypes.func.isRequired, 
    onSaveDialogOption: PropTypes.func.isRequired,
    onCancelDialogOption: PropTypes.func.isRequired
}                    