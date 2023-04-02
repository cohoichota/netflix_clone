import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function WidgetSm() {
   const [newUsers, setNewUsers] = useState([]);

   useEffect(() => {
      const getNewUsers = async () => {
         try {
            const res = await axios.get('/users?new=true', {
               headers: {
                  token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWIzNWI0Zjc0Y2U2N2MxYjY2M2VjZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTQ2MDAyNywiZXhwIjoxNjU1ODkyMDI3fQ.xQGeeLbn7tGEGd7CAZDXWj3WmCpreXGGxkuVcU6a_Ws',
               },
            });
            setNewUsers(res.data);
         } catch (error) {
            console.log(error);
         }
      };
      getNewUsers();
   }, []);

   return (
      <div className="widgetSm">
         <span className="widgetSmTitle">New Join Members</span>
         <ul className="widgetSmList">
            {newUsers.map((user) => (
               <li className="widgetSmListItem" key={user._id}>
                  <img
                     src={
                        user.profilePic ||
                        'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
                     }
                     alt=""
                     className="widgetSmImg"
                  />
                  <div className="widgetSmUser">
                     <span className="widgetSmUsername">{user.username}</span>
                  </div>
                  <button className="widgetSmButton">
                     <Visibility className="widgetSmIcon" />
                     Display
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
}
