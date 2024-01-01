import './App.css';
import { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Login } from './pages/Login/Login';

export const App: React.FC = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<div>Home</div>} />
        </Route>

        <Route path="/chats" element={<ProtectedRoute />}>
          <Route path="/chats" element={<div>Chats</div>} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
