import { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.scss';
import axios from 'axios';

const Home = ({ type }) => {
   const [lists, setLists] = useState([]);
   const [genre, setGenre] = useState(null);

   useEffect(() => {
      const getRandomList = async () => {
         try {
            const res = await axios.get(
               `lists${type ? '?type=' + type : ''}${
                  genre ? '&genre=' + genre : ''
               }`,
               {
                  headers: {
                     token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWIzNWI0Zjc0Y2U2N2MxYjY2M2VjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTQ2MDAyNywiZXhwIjoxNjU1ODkyMDI3fQ.xQGeeLbn7tGEGd7CAZDXWj3WmCpreXGGxkuVcU6a_Ws',
                  },
               }
            );
            setLists(res.data);
         } catch (err) {
            console.log(err);
         }
      };
      getRandomList();
   }, [genre, type]);
   return (
      <div className={classes.home}>
         <Navbar />
         <Featured type={type} setGenre={setGenre}/>
         {lists.map((list) => (
            <List list={list} key={list._id} />
         ))}
      </div>
   );
};

export default Home;
