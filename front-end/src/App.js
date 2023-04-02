import Home from './pages/home/Home';
import './app.scss';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

const App = () => {
   const { user } = useContext(AuthContext);
   return (
      <Routes>
         <Route
            path="/"
            element={!user ? <Navigate to="/register" /> : <Home />}
         />
         <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
         />
         <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
         />
         <Route
            path="/movies"
            element={!user ? <Navigate to="/login" /> : <Home type="movies" />}
         />
         <Route
            path="/series"
            element={!user ? <Navigate to="/login" /> : <Home type="series" />}
         />
         <Route
            path="/watch"
            element={!user ? <Navigate to="/login" /> : <Watch />}
         />
      </Routes>
   );
};

export default App;
