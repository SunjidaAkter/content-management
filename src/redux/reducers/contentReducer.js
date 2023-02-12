const initialState={
    contents:[],
};

const contentReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_CONTENT":
            return {
                ...state,
                contents:[...state.contents,action.payload]
            }
        case "GET_CONTENT":
            return {
                ...state,
                contents: action.payload,
            }
        default:
            return state;
    }
}
export default contentReducer;