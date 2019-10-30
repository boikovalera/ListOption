import React, { useState } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ListOptionComponent from './ListOptionComponent/ListOptionComponent';
import ListItemComponent from './ListItemComponent/ListItemComponent';

function App() {
  
    const [listOption, setListOption] = useState([]) 
    const [backgraundColor, setBackgraundColor] = useState('light')

    function getEmptyData() {
        return {
            descr: '',
            textColor: 'black',
            typeBackgraundColor: 'light',
            isDone: false
        }
    }

    function onChangeOptionType() {

    } 

    function onAddListItems() {
        const newListItemOption = getEmptyData() 

        setListOption([...listOption, newListItemOption])
    }

    return (
        <div className="container-fluid">            
            <div className="row app-list">
                <HeaderComponent
                    backgraundColor={backgraundColor}
                    onChangeOptionType={onChangeOptionType}
                    onAddListItems={onAddListItems}/>
            </div>
            <div className="row app-list">
                <ListOptionComponent/>
            </div>
            <div className="row app-list">
                <ListItemComponent/>
            </div>
        </div>
    );
}

export default App;