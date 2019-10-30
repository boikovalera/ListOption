import React, { Component } from 'react'
import propTypes from 'prop-types'
import './HeaderComponent.css';

export default class HeaderComponent extends Component {



    render() {
        return (
            <div className="row header">
                <div className="col-3 radio">
                    <ul>
                        <li>
                            <input type="radio" 
                                   name="light"
                                   checked={backgraundColor==='light'}
                                   onChange={onChangeOptionType}/> light
                        </li>
                        <li>
                            <input type="radio" 
                                   name="dark"
                                   checked={this.backgraundColor==='dark'}
                                   onChange={onChangeOptionType}/> dark
                        </li>
                    </ul>
                </div>
                <div className="col-7 title">
                    <h1>List options</h1>
                </div>
                <div className="col-2 btn-add">
                    <button onClick={this.props.onAddListItems}>Add</button>
                </div>
            </div>
        )
    }
}

HeaderComponent.propTypes = {
    onChangeOptionType: propTypes.func.isRequired,
    onAddListItems: propTypes.func.isRequired
}