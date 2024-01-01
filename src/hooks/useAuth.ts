import { useContext } from 'react';
import {
  AuthContext,
  AuthContextProps,
} from '../components/AuthProvider/AuthProvider';

export const useAuth = (): AuthContextProps => {
  return useContext(AuthContext);
};
