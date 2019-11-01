import React from 'react'
import propTypes from 'prop-types'
import './HeaderComponent.css';

export default function HeaderComponent(props) {
  
    return (
        <div className="row header">
            <div className="col-4 radio">
                <ul>
                    <li>
                        <input type="radio" 
                            value="lightgrey"
                            checked={props.backgraundColor==='lightgrey'}
                            onChange={props.onChangeOptionType}
                        /> lightgrey
                    </li>
                    <li>
                        <input type="radio" 
                            value="darkgray"
                            checked={props.backgraundColor==='darkgray'}
                            onChange={props.onChangeOptionType}
                        /> darkgray
                    </li>
                </ul>
            </div>
            <div className="col-6 title">
                <h1>List options</h1>
            </div>
            <div className="col-2 btn-add">
                <button onClick={props.onAddListItems}>Add</button>
            </div>
        </div>
    )
}

HeaderComponent.propTypes = {
    backgraundColor: propTypes.string.isRequired,
    onChangeOptionType: propTypes.func.isRequired,
    onAddListItems: propTypes.func.isRequired
}