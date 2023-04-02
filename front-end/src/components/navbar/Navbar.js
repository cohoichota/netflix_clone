import classes from './Navbar.module.scss';
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {
   const { dispatch } = useContext(AuthContext);

   const [isScrolled, setIsScrolled] = useState(false);

   window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
   };

   const logoutHandler = (e) => {
      e.preventDefault();
      dispatch(logout());
   };

   return (
      <div
         className={
            isScrolled
               ? `${classes.navbar} ${classes.scrolled}`
               : classes.navbar
         }
      >
         <div className={classes.container}>
            <div className={classes.left}>
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                  alt=""
               />
               <Link to="/" className={classes.link}>
                  <span>Homepage</span>
               </Link>
               <Link to="/series" className={classes.link}>
                  <span className={classes.navbarMainLinks}>Series</span>
               </Link>
               <Link to="/movies" className={classes.link}>
                  <span className={classes.navbarMainLinks}>Movies</span>
               </Link>
               <span>New and Popular</span>
               <span>My List</span>
            </div>
            <div className={classes.right}>
               <Search className={classes.icon} />
               <span>KID</span>
               <Notifications className={classes.icon} />
               <img
                  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
               />
               <div className={classes.profile}>
                  <ArrowDropDown className={classes.icon} />
                  <div className={classes.options}>
                     <span>Settings</span>
                     <span onClick={logoutHandler}>Logout</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
