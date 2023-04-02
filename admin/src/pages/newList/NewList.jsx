import { useState, useContext, useEffect } from 'react';
import './newList.css';
import { getMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { ListContext } from '../../context/listContext/ListContext';
import { createList } from '../../context/listContext/apiCalls';
import { useHistory } from 'react-router-dom';

export default function NewList() {
   const history = useHistory()

   const [list, setList] = useState(null);

   const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
   const { dispatch } = useContext(ListContext);

   useEffect(() => {
      getMovies(dispatchMovie);
   }, [dispatchMovie]);

   const handlerChange = (event) => {
      event.preventDefault();
      const value = event.target.value;
      setList({ ...list, [event.target.name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      createList(list, dispatch);
      history.push('/lists')
   };

   const handlerSelect = (e) => {
      let value = Array.from(
         e.target.selectedOptions,
         (option) => option.value
      );
      setList({ ...list, [e.target.name]: value });
   };

   return (
      <div className="newProduct">
         <h1 className="addProductTitle">New List</h1>
         <form className="addProductForm">
            <div className="formLeft">
               <div className="addProductItem">
                  <label>Title</label>
                  <input
                     type="text"
                     placeholder="Popular Movies"
                     name="title"
                     onChange={handlerChange}
                  />
               </div>
               <div className="addProductItem">
                  <label>Genre</label>
                  <input
                     type="text"
                     placeholder="genre"
                     name="genre"
                     onChange={handlerChange}
                  />
               </div>
               <div className="addProductItem">
                  <label>Type</label>
                  <select name="type" onChange={handlerChange}>
                     <option>Types</option>
                     <option value="movies">Movies</option>
                     <option value="series">Series</option>
                  </select>
               </div>
            </div>
            <div className="formRight">
               <div className="addProductItem">
                  <label>Content</label>
                  <select
                     multiple
                     name="content"
                     onChange={handlerSelect}
                     style={{ height: '280px' }}
                  >
                     {movies.map((movie) => (
                        <option value={movie._id} key={movie._id}>
                           {movie.title}
                        </option>
                     ))}
                  </select>
               </div>
            </div>

            <button className="addProductButton" onClick={handleSubmit}>
               Create
            </button>
         </form>
      </div>
   );
}
