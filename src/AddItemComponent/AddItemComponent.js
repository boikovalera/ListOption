import React, { useState } from 'react'
import PropTypes from '../propTypes';
import Select from 'react-select'
import './AddItemComponent.css'

export default function AddItemComponent(props) {
    
    const [selectColor, setSelectColor] = useState(props.listColor[0])    

    function onChangeColor(e) {
        const selectedColor = props.listColor.find((el) => el === e)
        setSelectColor(selectedColor)
        props.onChangeDialogOption(props.dialogItem.id,
            {
                textColor: selectedColor.value
            }
        );
    }

    function onChangeTextArea(e) {        
        props.onChangeDialogOption(props.dialogItem.id,
            {
                [e.target.name]: e.target.value
            }
        );
    }
    
    return (
        <div style={{position: 'absolute', top: props.dialogItem.y, left: props.dialogItem.x, border: '1px solid grey'}}>        
            <div className='dialog-color'>
                <span>o</span>                
                <Select className="select-color"
                    name="textColor"                    
                    options = {props.listColor}                     
                    value={selectColor}
                    onChange={onChangeColor}                    
                />
            </div>
            <div className='dialog-descr'>
                <textarea
                    type="text"
                    name="title"
                    rows="6"
                    placeholder="Description"
                    value={props.dialogItem.title}
                    onChange={onChangeTextArea} />
            </div>
            <div className='dialog-button'>
                <button onClick={props.onSaveDialogOption.bind(null, props.dialogItem)}>Save</button> 
                <button onClick={props.onCancelDialogOption.bind(null, props.dialogItem)}>Cancel</button> 
            </div>
        </div>
    )    
}

AddItemComponent.propTypes = {
    dialogItem: PropTypes.object,
    listColor: PropTypes.listColor.isRequired,    
    onChangeDialogOption: PropTypes.func.isRequired,
    onSaveDialogOption: PropTypes.func.isRequired,
    onCancelDialogOption: PropTypes.func.isRequired
}