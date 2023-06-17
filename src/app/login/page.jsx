"use client";
import { useForm } from "react-hook-form";

export default function login() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex flex-col">
      <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" className="text-lg font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("username", {
            required: "Username is required",
          })}
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="email" className="text-lg font-medium mt-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email format",
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password" className="text-lg font-medium mt-4">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
}
