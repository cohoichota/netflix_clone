import {
   ArrowBackIosOutlined,
   ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import classes from './List.module.scss';

const List = ({ list }) => {
   const [slideNumber, setSlideNumber] = useState(0);
   const [isMoved, setIsMoved] = useState(false);
   const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

   const listRef = useRef();

   const clickHandle = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === 'left' && slideNumber > 0) {
         setSlideNumber(slideNumber - 1);
         listRef.current.style.transform = `translateX(${230 + distance}px)`;
      } else if (direction === 'right' && slideNumber < 10 - clickLimit) {
         setSlideNumber(slideNumber + 1);
         listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
   };

   return (
      <div className={classes.list}>
         <span className={classes.listTitle}>{list.title}</span>
         <div className={classes.wrapper}>
            <ArrowBackIosOutlined
               className={`${classes.sliderArrow} ${classes.left}`}
               onClick={() => clickHandle('left')}
               style={{ display: !isMoved && 'none' }}
            />
            <div className={classes.container} ref={listRef}>
               {list.content.map((item, i) => (
                  <ListItem index={i} item={item} key={i} />
               ))}
            </div>
            <ArrowForwardIosOutlined
               className={`${classes.sliderArrow} ${classes.right}`}
               onClick={() => clickHandle('right')}
            />
         </div>
      </div>
   );
};

export default List;
