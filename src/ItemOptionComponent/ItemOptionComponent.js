import React from 'react'
import PropTypes from '../propTypes';
import './ItemOptionComponent.css';

export default function ItemOptionComponent(props) {
    const color = props.itemOption.textColor;
    const backgraundColor = props.backgraundColor;
    
    return (        
        <li className="li-item" style={{backgroundColor: backgraundColor}}>
           <input type="checkbox"/> 
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