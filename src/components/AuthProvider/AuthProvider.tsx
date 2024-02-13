import React, { useState, ReactNode } from 'react';
import { getUserFromToken, handleToken } from '../../util/tokenHelper';
import { UserType } from '../../types/user-type';

export type AuthContextProps = {
  user: UserType | null;
  login: (user: { username: string; password: string }) => void;
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
  const [user, setUser] = useState<UserType | null>(() => {
    return getUserFromToken();
  });

  const login = async (userData: { username: string; password: string }) => {
    await handleToken(userData);
    const profile = getUserFromToken();
    setUser(profile);
  };

  const logout = () => {
    // TODO: Logout Auth Logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
