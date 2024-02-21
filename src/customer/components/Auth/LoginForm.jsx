import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '../../../Redux/Auth/Action';

const LoginForm = () => {
    const nagivate = useNavigate();
    const dispatch = useDispatch();

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get("email"),
            password: data.get("password"),
        }
        dispatch(login(userData))
        console.log("userData ",userData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}><TextField required id='email' name='email' label='Email' fullWidth autoComplete='given-name' /></Grid>
                    <Grid item xs={12}><TextField required id='password' name='password' label='Password' fullWidth autoComplete='given-name' /></Grid>
                    <Grid item xs={12}><Button className="bg-[#9155FD] w-full"  type="submit"  variant="contained" size="large" sx={{padding:".8rem 0",bgcolor:'#9155FD'}}>Login</Button></Grid>
                </Grid>
            </form>
            <div className="flex justify-center flex-col items-center">
                <div className="py-3 flex items-center ">
                    <p className="m-0 p-0">if you don't have an account ?</p>
                    <Button onClick={() => nagivate("/register")} className="ml-5" size="small">
                        Register
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm