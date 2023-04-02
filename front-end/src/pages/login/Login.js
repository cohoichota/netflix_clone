import { useContext, useState } from 'react';
import { login } from '../../authContext/apiCalls';
import { AuthContext } from '../../authContext/AuthContext';
import classes from './Login.module.scss';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const { dispatch } = useContext(AuthContext);

   const handleLogin = async (e) => {
      e.preventDefault();
      login({ email, password }, dispatch);
      
   };
   return (
      <div className={classes.login}>
         <div className={classes.top}>
            <div className={classes.wrapper}>
               <img
                  className={classes.logo}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                  alt=""
               />
            </div>
         </div>
         <div className={classes.container}>
            <form>
               <h1>Sign In</h1>
               <input
                  type="email"
                  placeholder="Email or phone number"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button className={classes.loginButton} onClick={handleLogin}>
                  Sign In
               </button>
               <span>
                  New to Netflix? <b>Sign up now.</b>
               </span>
               <small>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <b>Learn more</b>.
               </small>
            </form>
         </div>
      </div>
   );
};

export default Login;
