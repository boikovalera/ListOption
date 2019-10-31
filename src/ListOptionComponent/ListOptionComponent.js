import React from 'react'
import ItemOptionComponent from '../ItemOptionComponent/ItemOptionComponent'
import './ListOptionComponent.css';

export default function ListOptionComponent(props) {
    
    return (
        <ul>
            {
                props.listOption.map(item => (
                    <ItemOptionComponent                    
                        key={item.id} 
                        itemOption={item} 
                        backgraundColor={props.backgraundColor}
                        onSelect={props.onSelect}
                        onDelete={props.onDelete}
                    />
                ))
            }
        </ul>
    )    
}