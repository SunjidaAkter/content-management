import { deleteContent } from "../../actions/contentActions";

const deleteContentData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/api/v1/content/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(deleteContent(id));
    }
  };
};

export default deleteContentData;
