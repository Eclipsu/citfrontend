"use client";
import { useForm } from "react-hook-form";
import { TextField, Button, Stack, Typography, FormControlLabel, Checkbox } from "@mui/material";

export default function Contact() {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section class="text-gray-600 w-full ">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d262.62459917930755!2d85.34358141208595!3d27.672751043423652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2snp!4v1686298434292!5m2!1sen!2snp"
          ></iframe>
          {/* <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">Koteshwor - 32, Kathmandu</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a class="text-indigo-500 leading-relaxed">ccrcitclub2077@gmail.com</a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">986-1250474</p>
            </div>
          </div> */}
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Got any feedbacks or complaints? <br /> Write to us!
          </p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2} width="100%">
              <TextField
                label="Name"
                type="name"
                autoComplete="off"
                {...register("name", {
                  required: "name is required",
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                className="w-full"
              />
              <TextField
                label="Email"
                type="email"
                autoComplete="off"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email Format",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                className="w-full"
              />

              <TextField
                label="Feedback"
                multiline
                rows={4}
                defaultValue=""
                {...register("feedback", {
                  required: "Feedback message is required",
                })}
                error={!!errors.feedback}
                helperText={errors.feedback?.message}
              />
              <Button type="submit" variant="contained" className="bg-blue-600 w-full">
                Submit
              </Button>
            </Stack>
          </form>
          {/* <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button> */}
        </div>
      </div>
    </section>
  );
}
