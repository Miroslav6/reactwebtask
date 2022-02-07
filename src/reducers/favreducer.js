//reducer
const favouritesReducer = (state = '', action) => {
  switch (action.type) {
    case "ADD":
      return action.payload;
    case "DELETE":
      return state.filter(album => album !== action.payload)
    default:
      return state;

  }
}
export default favouritesReducer;