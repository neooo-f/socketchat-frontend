import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

export const ProtectedRoute: React.FC = (): ReactElement => {
  // TODO: replace!!!!! to protect routes!!!!
  // const { user } = useAuth();

  // return user ? <Outlet /> : <Navigate replace to="/login" />;
  return <Outlet />;
};
