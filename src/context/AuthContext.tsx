import React  ,{ createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface User {
  username: string;
  email: string;
  role: number;
  token: string;
  id:string
}

interface AuthData {
  user: User;
}

interface AuthContextType {
  auth: AuthData;
  setAuth: React.Dispatch<React.SetStateAction<AuthData>>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthData>({
    user: {
      username: '',
      email: '',
      role: 0,
      token: '',
      id:""
    }
  });

  const logout = () => {
    // Clear user session without removing details from local storage
    setAuth({
      user: {
        username: '',
        email: '',
        role: 0,
        token: '',
        id:""
      }
    });
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user: User = JSON.parse(userData);
      setAuth({ user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
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
