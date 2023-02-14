import { addContent } from "../../actions/contentActions";

const addContentData = (content) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/api/v1/content/", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = res.json();
    if (data.acknowledged) {
      dispatch(
        addContent({
          _id: data.insertedId,
          ...content,
        })
      );
    }
  };
};

export default addContentData;
