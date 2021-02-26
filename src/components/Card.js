import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import ResponsiveDrawer from './ResponsiveDrawer';

export const Card = () => {

    const [description, setdescription] = useState("");
    const [responsible, setresponsible] = useState("");
    const [status, setstatus] = useState("Ready");
    const [dueDate, setdueDate] = useState(new Date());

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!description.length || !responsible.length || !status.length || !dueDate)
            return;

        const newItem = {
            description: description.length,
            status: status,
            responsible: responsible,
            dueDate: dueDate
        };


        setdescription('');
        setresponsible('');
        setstatus('');
    }

    const handleDescriptionChange = (e) => {
        setdescription(e.target.value);
    }

    const handleStatusChange = (e) => {
        setstatus(e.target.value);
    }

    const handleResposibleChange = (e) => {
        setresponsible(e.target.value);
    }

    const handleDateChange = (date) => {
        setdueDate(date);
    }

    return (    
        <div className="Card">
            <ResponsiveDrawer></ResponsiveDrawer>
            <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <Typography variant="h2">New Task</Typography>
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="text">Description:</InputLabel>
                    <Input id="description" name="description" autoFocus onChange={handleDescriptionChange} />
                </FormControl>
                <br></br>
                <br></br>
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="number">Responsible:</InputLabel>
                    <Input id="responsible" name="responsible" autoFocus onChange={handleResposibleChange} />
                </FormControl>
                <br></br>
                <br></br>
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="age-native-simple">Status:</InputLabel>
                    <Select
                        native
                        value={status}
                        onChange={handleStatusChange}>
                        <option value="Ready">Ready</option>
                        <option value="In progress">In progress</option>
                        <option value="Done">Done</option>
                    </Select>
                </FormControl>
                <br></br>
                <br></br>
                <br></br>
                <DatePicker
                    id="due-date"
                    selected={dueDate}
                    placeholderText="Due date"
                    onChange={(dueDate) => handleDateChange(dueDate)}>
                </DatePicker>
                <br></br>
                <br></br>
                <br></br>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit">
                    Crear
                    </Button>
            </form>
            <br></br>
            <br></br>
            </div>
        </div>
    )
}

