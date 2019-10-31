import React, { useState } from 'react'
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
        
    const deleteBtnStyle = {
        cursor: 'pointer',
        float: 'right',
        fontWeight: 'bold',
        backgroundColor: 'grey'
    }

    const moveBtnStyle = {
        ...deleteBtnStyle,
        float: 'left',
        cursor: 'move'
    }

    const colorStyles = {
        width: '100%',
        color: 'red'
    }

/*     function startDrag(e) {        
        prevPosition = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener("mousemove", this.drag);
        document.addEventListener("mouseup", this.stopDrag)
    }

    function stopDrag (e) {        
        document.removeEventListener("mousemove", this.drag);
        document.removeEventListener("mouseup", this.stopDrag)
    }
    
    function drag(e) {
        const { x, y } = props.dialogItem;        
        props.onChange(props.dialogItem.id, {
            x: x + (e.clientX - this.prevPosition.x),
            y: y + (e.clientY - this.prevPosition.y)
        });
        prevPosition = {
            x: e.clientX, 
            y: e.clientY
        }
    } */


    return (
        <div style={{position: 'absolute', top: props.dialogItem.y, left: props.dialogItem.x, border: '1px solid grey'}}>
            <div className='dialog-color'>
                <span
                    style={moveBtnStyle}
                    /* onMouseDown={startDrag()}   */
                >o</span>                
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