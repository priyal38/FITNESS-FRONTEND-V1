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
  const [auth, setAuth] = useState<AuthData>({
    user : {
      email : '',
      role : 0
    },
     token: localStorage.getItem('user') || '',
    // Initialize with token from local s       torage
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
    // Check if token exists in local storage on app initialization
    const token = localStorage.getItem('user');
    if (token) {
      setAuth((prevAuth) => ({ ...prevAuth,  token}));
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