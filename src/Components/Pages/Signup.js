import React from "react";

const Signup = () => {
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
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
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
        </form>
      </div>
      ;
    </div>
  );
};

export default Signup;
