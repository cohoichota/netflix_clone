import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Register.module.scss';

const Register = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [username, setUsername] = useState('');

   const emailRef = useRef();
   const passwordRef = useRef();
   const usernameRef = useRef();

   const navigate = useNavigate();

   const startHandle = () => {
      setEmail(emailRef.current.value);
      setUsername(usernameRef.current.value);
   };

   const finishHandle = async (e) => {
      e.preventDefault();
      setPassword(passwordRef.current.value);
      try {
         await axios.post('/auth/register', { email, username, password });
         navigate('/login');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className={classes.register}>
         <div className={classes.top}>
            <div className={classes.wrapper}>
               <img
                  className={classes.logo}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                  alt=""
               />
               <button className={classes.loginButton}>Sign In</button>
            </div>
         </div>
         <div className={classes.container}>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
               Ready to watch? Enter your email to create or restart your
               membership.
            </p>
            {!email ? (
               <div className={classes.input}>
                  <input
                     type="email"
                     placeholder="email address"
                     ref={emailRef}
                  />
                  <input
                     type="username"
                     placeholder="user name"
                     ref={usernameRef}
                  />
                  <button
                     className={classes.registerButton}
                     onClick={startHandle}
                  >
                     Get Started
                  </button>
               </div>
            ) : (
               <form className={classes.input}>
                  <input
                     type="password"
                     placeholder="password"
                     ref={passwordRef}
                  />
                  <button
                     className={classes.registerButton}
                     onClick={finishHandle}
                  >
                     Start
                  </button>
               </form>
            )}
         </div>
      </div>
   );
};

export default Register;
