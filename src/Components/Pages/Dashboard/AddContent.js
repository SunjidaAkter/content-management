import React from "react";
import { useForm } from "react-hook-form";

const componentName = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col w-1/4" onSubmit={handleSubmit(onSubmit)}>
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
        <textarea
          className="textarea textarea-bordered mb-5 h-40"
          placeholder="Enter your blog here"
          {...register("desc", { required: true })}
        ></textarea>
        {errors.desc && (
          <span className="text-red-600">Your blog is required</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default componentName;
