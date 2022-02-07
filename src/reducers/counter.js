//reducer
const counterReducer = (state = '', action) => {
  switch (action.type) {
    case "ADD":
      return action.payload;
    case "DELETE":
      debugger
      return state.filter(album => album !== action.payload)
    default:
      return state;

  }
}
export default counterReducer;