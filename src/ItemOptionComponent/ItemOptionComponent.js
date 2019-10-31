import React from 'react'
import './ItemOptionComponent.css';

export default function ItemOptionComponent(props) {
    const color = props.itemOption.textColor;
    const backgraundColor = props.backgraundColor;
    
    return (        
        <li className="li-item" style={{backgroundColor: backgraundColor}}>
           <input type="checkbox"/> 
           <span style={{color: color}}>{props.itemOption.title}</span>           
           <button onClick={props.onDelete}>Delete</button>
        </li>
    )    
}