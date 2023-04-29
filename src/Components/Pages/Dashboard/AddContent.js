import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import addContentData from "../../../redux/thunk/Contents/addContentData";

const AddContent = () => {
  const dispatch = useDispatch();
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    const content = {
      img: data.img,
      title: data.title,
      desc: data.desc,
      status: data.status,
      brand: data.brand,
    };
    console.log(content);
    dispatch(addContentData(content));
    // Swal.fire("Your content is added!");
    Swal.fire({
      title: "Your content has been added!",
      icon: "success",
      confirmButtonText: "Cool",
      confirmButtonColor: "#787777",
    });
    reset();
  };
  return (
    <div className="mt-12 py-5 px-1 flex justify-center items-center">
      <div className="shadow-2xl w-1/2 flex justify-center items-center">
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered w-full mt-5 mb-5"
            type="text"
            placeholder="Enter an image link"
            {...register("img", { required: true })}
          />
          {errors.img && (
            <span className="text-red-600">Image is is required</span>
          )}
          <input
            className="input input-bordered w-full mb-5"
            type="text"
            placeholder="Enter a suitable title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-600">Title is required</span>
          )}
          <input
            className="input input-bordered w-full mb-5"
            type="text"
            placeholder="Enter brand"
            {...register("brand", { required: true })}
          />
          {errors.brand && (
            <span className="text-red-600">Brand is required</span>
          )}
          <textarea
            className="textarea textarea-bordered mb-5 h-40"
            placeholder="Enter your blog here"
            {...register("desc", { required: true })}
          ></textarea>
          {errors.desc && (
            <span className="text-red-600">Your blog is required</span>
          )}
          <label>
            <Controller
              control={control}
              name="status"
              defaultValue={false}
              rules={{ required: false }}
              render={({ field }) => (
                <input className="checkbox" type="checkbox" {...field} />
              )}
            />
            I agree to the terms and conditions
          </label>
          {/* {errors.status && (
            <span className="text-red-600">Title is required</span>
          )} */}
          <button className="" type="submit">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContent;
