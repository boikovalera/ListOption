import React, { useState } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ListOptionComponent from './ListOptionComponent/ListOptionComponent';
import AddListItemComponent from './AddListItemComponent/AddListItemComponent';

export default function App() {
  
    const [listOption, setListOption] = useState(getListData())    
    const [backgraundColor, setBackgraundColor] = useState('lightgrey')
    const [listDialogOption, setListDialogOption] = useState([])    
    const [listColor, setListColor] = useState(getListColor())    
    
    
    function onChangeOptionType(changeEvent) {
        console.log("changeEvent", changeEvent.target.value)
        setBackgraundColor(changeEvent.target.value)
    }
    
    function onAddListItems() {
        const newListItemOption = getEmptyData() 
        console.log("newListItemOption", newListItemOption)
        //setListOption([...listOption, newListItemOption])
        setListDialogOption([...listDialogOption, newListItemOption])
    }

    function onSelect(item) {
        console.log("item", item);
    }

    function onDelete(item) {
        console.log("item", item)
        setListOption(listOption.filter((el) => el.id !== item.id));
    }

    function onChangeDialogOption(id, updateData) {        
        let dialogOption = listDialogOption.find(el => el.id === id)
        dialogOption = {
            ...dialogOption,
            ...updateData
        }
        setListDialogOption(listDialogOption.map(el => el.id === dialogOption.id ? dialogOption : el))
    }

    function onSaveDialogOption(dialogItem) {
        console.log("onSaveDialogOption", dialogItem)                 
        setListOption([...listOption, dialogItem]);        
        setListDialogOption(listDialogOption.filter((el) => el.id !== dialogItem.id));
    } 
    
    function onCancelDialogOption(dialogItem) {
        console.log("onCancelDialogOption", dialogItem) 
        setListDialogOption(listDialogOption.filter((el) => el.id !== dialogItem.id));
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
                <ListOptionComponent                    
                    listOption={listOption}
                    backgraundColor={backgraundColor}
                    onSelect={onSelect}
                    onDelete={onDelete}
                />
            </div>
            <div className="row app-list">
                <AddListItemComponent
                    listDialogOption={listDialogOption}
                    listColor={listColor}
                    onChangeDialogOption={onChangeDialogOption}
                    onSaveDialogOption={onSaveDialogOption}
                    onCancelDialogOption={onCancelDialogOption}
                />
            </div>
        </div>
    );
}

function getListColor() {
    return [
        { value: "black", label: "Черный" },
        { value: "gray", label: "Серый" },
        { value: "white", label: "Белый" },
        { value: "red", label: "Красный" },
        { value: "green", label: "Зеленый" },
        { value: "yellow", label: "Жёлтый"},
        { value: "blue", label: "Синий" }        
    ]
}

function getEmptyData() {
    return {
        id: Date.now(),
        title: '',
        textColor: 'black',
        typeBackgraundColor: 'light',
        isDone: false,
        x: 100,
        y: 100
    }
}

function getListData() {
    return [
        {
            id: 1,
            title: 'title1',
            textColor: 'green',
            typeBackgraundColor: 'light',
            isDone: false
        },
        {
            id: 2,
            title: 'title2',
            textColor: 'blue',
            typeBackgraundColor: 'light',
            isDone: false
        },
        {
            id: 3,
            title: 'title3',
            textColor: 'red',
            typeBackgraundColor: 'light',
            isDone: false
        }
    ]
}