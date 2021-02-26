import React, { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import ResponsiveDrawer from './ResponsiveDrawer';

export const EditProfile = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name.length || !email.length || !password.length  || !confirmPass.length )
            return;

        const newUser= {
            name: name,
            email: email,
            password: password,
            confirmPass: confirmPass
        };


        setName('');
        setEmail('');
        setPassword('');
        setConfirmPass('');
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPass(e.target.value);
    }

    return (    
        <div className="Edit">
            <ResponsiveDrawer></ResponsiveDrawer>
            <form onSubmit={handleSubmit} className="todo-form">
                <Typography variant="h2">Edit your profile</Typography>
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="text">Full name:</InputLabel>
                    <Input id="name" name="name" autoFocus onChange={handleNameChange} />
                </FormControl>
                <br></br>
                <br></br>
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="number">Email:</InputLabel>
                    <Input id="email" name="email" autoFocus onChange={handleEmailChange} />
                </FormControl>
                <br></br>
                <br></br>
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="number">Password:</InputLabel>
                    <Input id="password" name="password" autoFocus onChange={handlePasswordChange} />
                </FormControl>
                <br></br>
                <br></br>
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="number">Confirm Password:</InputLabel>
                    <Input id="confirmPass" name="confirmPass" autoFocus onChange={handleConfirmPasswordChange} />
                </FormControl>
                <br></br>
                <br></br>
                <br></br>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="submit">
                    Actualizar
                    </Button>
            </form>
            <br></br>
            <br></br>
        </div>
    )
}