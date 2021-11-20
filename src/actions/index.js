import jsonPlaceholder from "../api/jsonPlaceholder"
export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');
    console.log(response.data)
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}