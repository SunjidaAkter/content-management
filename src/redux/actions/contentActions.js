import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes"


export const getContent =(data)=>{
    return{
        type : GET_CONTENT,
        payload : data,
    }
}