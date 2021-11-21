import jsonPlaceholder from "../api/jsonPlaceholder"
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.uniq(_.map(getState().posts, 'userId')).forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');
    console.log(response.data)
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}
// export const fetchUser = (id) => async (dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// }

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
}


//In this way we can call the api only one time and can not get anymore;
// export const fetchUser =  (id)=>  async (dispatch)=> _fetchUser(id,dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// })
