import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from './Home';
import Scores from './Scores';
import Profile from './Profile';

const ProtectedRoute = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
    return <>Redirecting to login...</>;
  }

  return <Outlet />;
};

const App = () => {
  const { isLoading } = useAuth0();

  return (
    !isLoading && (
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/scores">Scores</Link></li>
              {isAuthenticated ? <li><Link to="/profile">Profile</Link></li> : <li><Link to="/signin">Sign In</Link></li>}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<Scores />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
};

export default App;
