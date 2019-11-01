import React from 'react'
import PropTypes from '../propTypes';
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

ListOptionComponent.propTypes = {
    listOption: PropTypes.listOption.isRequired,
    backgraundColor: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired    
}