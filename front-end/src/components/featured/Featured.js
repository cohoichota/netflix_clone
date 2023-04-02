import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from './Featured.module.scss';

const Featured = ({ type, setGenre }) => {
   const [content, setContent] = useState({});

   useEffect(() => {
      const getRandomContent = async () => {
         try {
            const res = await axios.get(`/movies/random?type=${type}`, {
               headers: {
                  token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWIzNWI0Zjc0Y2U2N2MxYjY2M2VjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTQ2MDAyNywiZXhwIjoxNjU1ODkyMDI3fQ.xQGeeLbn7tGEGd7CAZDXWj3WmCpreXGGxkuVcU6a_Ws',
               },
            });
            setContent(res.data[0]);
         } catch (err) {
            console.log(err);
         }
      };
      getRandomContent();
   }, [type]);
   return (
      <div className={classes.featured}>
         {type && (
            <div className={classes.category}>
               <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
               <select
                  name="genre"
                  id="genre"
                  onChange={(e) => setGenre(e.target.value)}
               >
                  <option>Genre</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="crime">Crime</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="historical">Historical</option>
                  <option value="horror">Horror</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Sci-fi</option>
                  <option value="thriller">Thriller</option>
                  <option value="western">Western</option>
                  <option value="animation">Animation</option>
                  <option value="drama">Drama</option>
                  <option value="documentary">Documentary</option>
               </select>
            </div>
         )}
         <img src={content.img} alt="" />
         <div className={classes.info}>
            <img src={content.imgTitle} alt="" />
            <span className={classes.desc}>{content.desc}</span>
            <div className={classes.buttons}>
               <button className={classes.play}>
                  <PlayArrow />
                  <span>Play</span>
               </button>
               <button className={classes.more}>
                  <InfoOutlined />
                  <span>Info</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Featured;
