import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export const TodoApp = () => {

    return (
        <div>
            <ResponsiveDrawer></ResponsiveDrawer>
            <Button
                variant="contained"
                color="primary"
                className="submit">
                <Link style={{color:"white"}} to="/myTasks" > Ver mis tareas</Link>
            </Button> 
            <br></br>  
            <br></br>
            <Button
                variant="contained"
                color="primary"
                className="submit">
                <Link style={{color:"white"}} to="/newTask" >Añadir una nueva tarea</Link>
            </Button>     
        </div>
    )
}
export default TodoApp;


