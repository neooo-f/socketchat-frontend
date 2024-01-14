import { useContext } from 'react';
import {
  AuthContext,
  AuthContextProps,
} from '../components/AuthProvider/AuthProvider';

// TODO: maybe not needed anymore, just use useContext(AuthContext)
export const useAuth = (): AuthContextProps => {
  return useContext(AuthContext);
};
