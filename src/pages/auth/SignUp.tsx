import React, { ChangeEvent, useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material'
import Avatar from "@mui/material/Avatar"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import {  useNavigate } from "react-router-dom"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import Link from '@mui/material/Link';
import imagesignup from '../../images/2290.jpg'

export const SignUp = () => {

    let navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({ firstname: '', lastname: '', email: '', username: '', password: '' });
      

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!userDetails.firstname || !userDetails.lastname || !userDetails.email || !userDetails.username || !userDetails.password) {
            toast.error('All fields are required');
            return;
        }
        try {
            // console.log(userDetails);
            const response = await axios.post('http://localhost:5000/api/auth/signup', userDetails);
            console.log(response);
            if (response.status === 200) {
               
                navigate('/login')
            }
        }
        catch (error:any) {
            console.error(error);
            if (error.response && error.response.status === 409) {
              toast.error(error.response.data.message); // Show toast message if username already exists
            } 
          }
    }
    return (

        <Grid container className="h-screen">
            <Grid item xs={12} sm={8} md={6}>
                <Container component="main" maxWidth="sm">
                    <Box
                        className="mt-16 flex flex-col items-center shadow-sm shadow-gray-600  rounded-md  px-4 py-6"
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>

                        <Box component="form" className=' mt-3'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                    
                                        value={userDetails.firstname}
                                        onChange={(e) => setUserDetails({ ...userDetails, firstname: e.target.value })}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        value={userDetails.lastname}
                                        onChange={(e) => setUserDetails({ ...userDetails, lastname: e.target.value })}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        value={userDetails.username}
                                        onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        value={userDetails.email}
                                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        value={userDetails.password}
                                        onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                <Grid item>
                <Link to="/login" >
                                   Already have an account? Sign in

                </Link>
              </Grid>      
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Container>
            </Grid>
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: `url(${imagesignup})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',

                }}
            >
            </Grid>
            <Toaster />
        </Grid>
    )
}
