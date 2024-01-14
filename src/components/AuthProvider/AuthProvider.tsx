import React, { useState, ReactNode } from 'react';
import { handleToken } from '../../util/tokenHelper';
import { getProfile } from '../../services/userService';
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
  const [user, setUser] = useState<UserType | null>(null);

  const login = async (user: { username: string; password: string }) => {
    await handleToken(user);
    const { data } = await getProfile();
    setUser(data);
    console.log(data, 'login successfull!');
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
