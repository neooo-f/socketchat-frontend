import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const ProtectedRoute: React.FC = (): ReactElement => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate replace to="/login" />;
};
