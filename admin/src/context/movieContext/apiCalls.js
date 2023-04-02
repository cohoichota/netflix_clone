import axios from 'axios';
import {
   createMoviesFailure,
   createMoviesStart,
   createMoviesSuccess,
   deleteMoviesFailure,
   deleteMoviesStart,
   deleteMoviesSuccess,
   getMoviesFailure,
   getMoviesStart,
   getMoviesSuccess,
} from './MovieActions';

export const getMovies = async (dispatch) => {
   dispatch(getMoviesStart());
   try {
      const res = await axios.get('/movies', {
         headers: {
            token:
               'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
         },
      });
      dispatch(getMoviesSuccess(res.data));
   } catch (error) {
      dispatch(getMoviesFailure());
   }
};

// delete
export const deleteMovies = async (id, dispatch) => {
   dispatch(deleteMoviesStart());
   try {
      await axios.delete('/movies/' + id, {
         headers: {
            token:
               'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
         },
      });
      dispatch(deleteMoviesSuccess(id));
   } catch (error) {
      dispatch(deleteMoviesFailure());
   }
};

// create
export const createMovie = async (movie, dispatch) => {
   dispatch(createMoviesStart());
   try {
      const res = await axios.post('/movies/', movie, {
         headers: {
            token:
               'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
         },
      });
      console.log(res.data);
      dispatch(createMoviesSuccess(res.data));
   } catch (error) {
      dispatch(createMoviesFailure());
   }
};
