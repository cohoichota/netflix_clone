import axios from 'axios';
import {
   createListsFailure,
   createListsStart,
   createListsSuccess,
   deleteListFailure,
   deleteListStart,
   deleteListSuccess,
   getListsFailure,
   getListsStart,
   getListsSuccess,
} from './ListActions';

export const getLists = async (dispatch) => {
   dispatch(getListsStart());
   try {
      const res = await axios.get('/lists', {
         headers: {
            token:
               'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
         },
      });
      dispatch(getListsSuccess(res.data));
   } catch (error) {
      dispatch(getListsFailure());
   }
};

// delete
export const deleteList = async (id, dispatch) => {
   dispatch(deleteListStart());
   try {
      await axios.delete('/lists/' + id, {
         headers: {
            token:
               'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
         },
      });
      dispatch(deleteListSuccess(id));
   } catch (error) {
      dispatch(deleteListFailure());
   }
};

// create
export const createList = async (list, dispatch) => {
   dispatch(createListsStart());
   try {
      const res = await axios.post('/lists/', list, {
         headers: {
            token:
               'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
         },
      });
      console.log(res.data);
      dispatch(createListsSuccess(res.data));
   } catch (error) {
      dispatch(createListsFailure());
   }
};
