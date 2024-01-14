import React, { ReactElement, useContext } from 'react';
import { Navigate, Outlet /* useNavigate */ } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import { AuthContext } from '../AuthProvider/AuthProvider';

export const ProtectedRoute: React.FC = (): ReactElement | null => {
  // const { user } = useAuth();
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  console.log('user from useauth in protectedroute: ', user);

  // if (!user) {
  //   navigate('/login');
  //   return null;
  // }

  // return <Outlet />;

  return user ? <Outlet /> : <Navigate replace to="/login" />;

  // only use for testing!
  // return <Outlet />;
};
