import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

export const getContent = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};
export const addContent = (data) => {
  return {
    type: ADD_CONTENT,
    payload: data,
  };
};
export const deleteContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};
