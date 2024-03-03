import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import React from 'react';
 
interface AuthData {
  user : {
    email: string;
    role : number;
  },
  token: string;
 // Define your user type here
 
}
 
interface AuthContextType {
  auth: AuthData;
  setAuth: React.Dispatch<React.SetStateAction<AuthData>>;
  logout: () => void;
}
 
 
 
const AuthContext = createContext<AuthContextType | undefined>(undefined);

 
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const user  = JSON.parse(localStorage.getItem("user")!)
  const [auth, setAuth] = useState<AuthData>({
    user : {
      email : '',
      role : 0
    },
     token: user?.token || '',
    // Initialize with token from local storage
  });
 
  const logout = () => {
    // Clear user session without removing details from local storage
    console.log(auth)
    setAuth({ user: {
      email : '',
      role : 0,
     
    },
   token: ''  });
    localStorage.removeItem('user');
    
  };
 
  useEffect(() => {
    const user  = JSON.parse(localStorage.getItem("user")!)
    const token  =  user.token
    if (token) {
      setAuth((prevAuth) => ({ ...prevAuth, token }));
    }
  }, []);
 
  return (
    <AuthContext.Provider value={{ auth,  setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
 
export { useAuth, AuthProvider };