import { getContent } from "../../actions/contentActions";

const getContentData=()=>{
    return async(dispatch,getState)=>{
        const res = await fetch("contents.json");
        const data = await res.json();
        console.log(data);
        if(data.length){
            dispatch(getContent(data))
        }
    }
}

export default getContentData;
