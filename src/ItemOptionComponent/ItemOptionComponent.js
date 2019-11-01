import React from 'react'
import PropTypes from '../propTypes';
import './ItemOptionComponent.css';

export default function ItemOptionComponent(props) {
    const color = props.itemOption.textColor;
    const backgraundColor = props.backgraundColor;

    function onChangeCheckBox(e) {        
        props.onSelect(props.itemOption,
            {
                [e.target.name]: e.target.value === 'false' ? 'true' : 'false'
            }
        );
    }

    return (        
        <li className="li-item" style={{backgroundColor: backgraundColor, border: props.itemOption.isDone === 'false' ? '1px solid black' : '1px solid red'}}>           
            <input 
                type="checkbox" 
                name="isDone"
                defaultChecked={props.itemOption.isDone === 'false' ? false : true}
                value={props.itemOption.isDone}                
                onChange={onChangeCheckBox} />                
           <span style={{color: color}}>{props.itemOption.title}</span>           
           <button onClick={props.onDelete.bind(null, props.itemOption)}>Delete</button>
        </li>
    )    
}

ItemOptionComponent.propTypes = {
    itemOption: PropTypes.itemOption.isRequired,
    backgraundColor: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}