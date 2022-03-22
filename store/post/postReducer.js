const initPosts={
    posts: [{id: 1, title: 'Test', body: 'Lorem asdasdasdasd'}],
    error: null,
    load: false
}

const posts = (state = initPosts, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return { load: false, error: null, posts: action.payload };
        case 'ADD_POST':
          return { load: false, error: null, posts: [...state.posts, action.payload] };
      case 'SET_POSTS_LOAD':
        return { ...state, loading: action.loading };
      case 'SET_POSTS_ERROR':
        return { ...state, error: action.error, loading: false };
      default:
        return state;
    }
  };
  
  export default posts;