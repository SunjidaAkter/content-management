import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
  contents: [],
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        contents: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
    default:
      return state;
  }
};
export default contentReducer;
