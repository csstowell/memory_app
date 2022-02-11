export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;

    case "CREATE":
      return posts;

    default:
      return posts;
  }
};


// we are using it in reducers/index.js