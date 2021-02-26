import React, { useState } from 'react';
import OutlinedCard from './OutlinedCard';
import moment from 'moment';
import ResponsiveDrawer from './ResponsiveDrawer';
import { Button } from '@material-ui/core';
import { Filter } from './Filter';

const CardList = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const[filters,setFilters] = useState({
        dueDate:null,
        status:"",
        responsible:""
    });

    const handleFilters = (filters) => {
        setFilters(filters);
    };

    let list = [{
        "description": "a description text ",
        "responsible": {
            "name": "Daniela Ruiz",
            "email": "daniela@gmail"
        },
        "status": "Ready",
        "dueDate": moment()
    }, {
        "description": "some description text ",
        "responsible": {
            "name": "Daniela Ruiz",
            "email": "daniela@gmail"
        },
        "status": "In progress",
        "dueDate": moment()
    }, {
        "description": "other description text ",
        "responsible": {
            "name": "Daniela Ruiz",
            "email": "daniela@gmail"
        },
        "status": "Done",
        "dueDate": moment()
    }]

    if(filters.status !== ""){
        list = list.filter(item => item.status === filters.status);
    }
    if(filters.responsible !== ""){
        list = list.filter(item => item.responsible.name === filters.responsible);
    }

    return (
        <div>    
            <ResponsiveDrawer></ResponsiveDrawer>
            {list.map((element, i) => (<OutlinedCard description={element.description} 
            responsible={element.responsible} status={element.status} dueDate={element.dueDate}/>))}
            <br></br>
            <br></br>
            <Button
                onClick={handleOpenModal}
                variant="contained"
                color="primary">
                Filtro
            </Button>
            <Filter open={openModal} closeAction={handleCloseModal} filter={handleFilters}/>
        </div>
    )
}

export default CardList;
