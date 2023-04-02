export const getListsStart = () => ({
   type: 'GET_LISTS_START',
});

export const getListsSuccess = (lists) => ({
   type: 'GET_LISTS_SUCCESS',
   payload: lists,
});

export const getListsFailure = () => ({
   type: 'GET_LISTS_FAILURE',
});

//delete list
export const deleteListStart = () => ({
   type: 'DELETE_LIST_START',
});

export const deleteListSuccess = (id) => ({
   type: 'DELETE_LIST_SUCCESS',
   payload: id,
});

export const deleteListFailure = () => ({
   type: 'DELETE_LIST_FAILURE',
});

// create list
export const createListsStart = () => ({
   type: 'CREATE_LISTS_START',
});

export const createListsSuccess = (list) => ({
   type: 'CREATE_LISTS_SUCCESS',
   payload: list,
});

export const createListsFailure = () => ({
   type: 'CREATE_LISTS_FAILURE',
});

//update list
export const updateListStart = () => ({
   type: 'UPDATE_LIST_START',
});

export const updateListSuccess = (movie) => ({
   type: 'UPDATE_LIST_SUCCESS',
   payload: movie,
});

export const updateListFailure = () => ({
   type: 'UPDATE_LIST_FAILURE',
});
