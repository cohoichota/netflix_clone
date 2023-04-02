import {
   Add,
   PlayArrow,
   ThumbDownOutlined,
   ThumbUpAltOutlined,
} from '@mui/icons-material';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './ListItem.module.scss';

const ListItem = ({ index, item }) => {
   const [isHovered, setIsHovered] = useState(false);
   const [movie, setMovie] = useState({});

   useEffect(() => {
      const getMovie = async () => {
         try {
            const res = await axios.get('/movies/find/' + item, {
               headers: {
                  token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWIzNWI0Zjc0Y2U2N2MxYjY2M2VjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTQ2MDAyNywiZXhwIjoxNjU1ODkyMDI3fQ.xQGeeLbn7tGEGd7CAZDXWj3WmCpreXGGxkuVcU6a_Ws',
               },
            });
            setMovie(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      getMovie();
   }, [item]);

   return (
      <Link to="/watch" state={movie}>
         <div
            className={classes.listItem}
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <img src={movie.img} alt="" />
            {isHovered && (
               <Fragment>
                  <video src={movie.trailer} autoPlay={true} loop />
                  <div className={classes.itemInfo}>
                     <div className={classes.icons}>
                        <PlayArrow className={classes.icon} />
                        <Add className={classes.icon} />
                        <ThumbUpAltOutlined className={classes.icon} />
                        <ThumbDownOutlined className={classes.icon} />
                     </div>
                     <div className={classes.itemInfoTop}>
                        <span>{movie.duration}</span>
                        <span className={classes.limit}>+{movie.limit}</span>
                        <span>{movie.year}</span>
                     </div>
                     <div className={classes.desc}>{movie.desc}</div>
                     <div className={classes.genre}>{movie.genre}</div>
                  </div>
               </Fragment>
            )}
         </div>
      </Link>
   );
};

export default ListItem;
