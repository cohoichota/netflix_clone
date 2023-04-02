import { ArrowBackOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import classes from './Watch.module.scss';

const Watch = () => {
   const location = useLocation();
   const movie = location.state;

   return (
      <div className={classes.watch}>
         <Link to="/">
            <div className={classes.back}>
               <ArrowBackOutlined />
               Home
            </div>
         </Link>

         <video
            className={classes.video}
            autoPlay
            progress="true"
            controls
            src={movie.video}
         />
      </div>
   );
};

export default Watch;
