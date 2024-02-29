import React , {useState , useEffect} from 'react'
import { Box } from '@mui/material'
import Avatar from "@mui/material/Avatar"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import imagelogin from '../../images/2290.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {auth , setAuth} = useAuth();
  

  const handleClick = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || email.trim() === '') {
      toast.error('Please fill  all the required fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const role = response.data.user.role
      const token = response.data.token

    
      if (response.status === 200) {
        window.localStorage.setItem(
          'user',
          JSON.stringify({
          role , token
          }),
          );

          
          setAuth({
            user: {
              email,
              role
            },
            token
          })

      
        if(response.data.user.role === 1){
          navigate('/admin')
        }  
        if(response.data.user.role === 0){
          navigate('/user')
        }  
        
      }

      console.log(response);
    } 
    catch (error) {
      console.log(error);
      if (error.response && error.response.status === 500) {
        toast.error(error.response.data.message);
      }}
  };
  
  return (
    <Grid container className="h-screen">

      <Grid item xs={12} sm={8} md={6}>
        <Container component="main" maxWidth="sm">
          <Box
            className="mt-32 flex flex-col items-center shadow-sm shadow-gray-600  rounded-md  px-4 py-6"
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" className=' mt-3'>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  

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
                    onChange={(e) => setPassword(e.target.value)}
                   
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
              >
                Login
              </Button>
              <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/signup" >
                  {"Don't have an account? Sign Up"}
                </Link>
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
          backgroundImage: `url(${imagelogin})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
         

        }}
      >
      </Grid>
<Toaster/>
    </Grid>

  );
}

export default Login