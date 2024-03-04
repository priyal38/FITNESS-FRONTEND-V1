import axios from 'axios';
import{ useAuth }from '../context/AuthContext';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('http://localhost:5000/api/auth/refresh', {
            withCredentials: true
        });
const {token} = response.data
const userString = localStorage.getItem('user');
if (userString) {
  const user = JSON.parse(userString);
  user.token = token;
  localStorage.setItem('user', JSON.stringify(user));
}
              await setAuth((prevAuth) => ({ ...prevAuth, token: token }));
    
        return response.data.token;
    }
    return refresh;
};

export default useRefreshToken;