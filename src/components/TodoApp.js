import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import CardList from './CardList';
import moment from 'moment';

export const TodoApp = () => {

    const lista = [{
        "description": "some description text ",
        "responsible": {
            "name": "Santiago Carrillo",
            "email": "sancarbar@gmail"
        },
        "status": "ready",
        "dueDate": moment()
    },{
        "description": "other description text ",
        "responsible": {
            "name": "Daniela Ruiz",
            "email": "daniela@gmail"
        },
        "status": "ready",
        "dueDate": moment()
    }]

    return (
        <div>
            <ResponsiveDrawer></ResponsiveDrawer>
            <CardList lista={lista}></CardList>
        </div>
    )
}

export default TodoApp;


