import React, { useState, ReactNode } from 'react';

type User = {
  username: string;
  password: string;
};

export type AuthContextProps = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

export const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  console.log('AuthProvider');

  const login = (userData: User) => {
    // Login Auth Logic
    setUser(userData);
  };

  const logout = () => {
    // Logout Auth Logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
