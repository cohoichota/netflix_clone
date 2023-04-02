import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './Login.css';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const { isFetching, dispatch } = useContext(AuthContext);

   const submitHandler = (event) => {
      event.preventDefault();
      login({ email, password }, dispatch);
   };

   return (
      <div className="login">
         <form className="loginForm">
            <input
               type="email"
               placeholder="email"
               className="loginInput"
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               type="password"
               placeholder="password"
               className="loginInput"
               onChange={(e) => setPassword(e.target.value)}
            />
            <button
               className="loginButton"
               onClick={submitHandler}
               disabled={isFetching}
            >
               Login
            </button>
         </form>
      </div>
   );
};

export default Login;
