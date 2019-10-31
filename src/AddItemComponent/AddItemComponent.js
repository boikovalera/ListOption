import React, { Component } from 'react'

export default function AddItemComponent(props) {
    
    /*onChange = (e) => {
        props.onChangeDialogOption(this.props.note.id,
            {
                [e.target.name]: e.target.value
            }
        );
    }*/

    return (
        <div style={{position: 'absolute', top: props.dialogItem.y, left: props.dialogItem.x, border: '1px solid grey'}}>            
            <div className='dialog-color'>
                <span
                    /*style={moveBtnStyle}
                     onMouseDown={this.startDrag} */
                >o</span>                                 
                <input
                    type="color"
                    name="title"                    
                    value={props.dialogItem.textColor}
                    onChange={props.onChangeDialogOption} />
                {/* <button type="button" onClick={props.onDelete.bind(null, props.dialogItem)}>
                    <span>&times;</span>
                </button> */}
            </div>
            <div className='dialog-descr'>
                <textarea
                    type="text"
                    name="descr"
                    rows="6"
                    placeholder="Description"
                    value={props.dialogItem.descr}
                    onChange={props.onChangeDialogOption} />
            </div>
            <div className='dialog-button'>
                <button>Save</button> 
                <button>Cancel</button> 
            </div>
        </div>
    )    
}