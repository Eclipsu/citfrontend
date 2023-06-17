"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TextField, Button, Stack, Typography, FormControlLabel, Checkbox } from "@mui/material";
import Logo from "@/../public/login.webp";

export default function form() {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <Image src={Logo} className="w-full" alt="CCRC IT Club" />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 mx-14">
            <Typography variant="h3">Login</Typography>
            <hr className="mb-24" />

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={2} width="100%">
                {" "}
                {/* Set the width to 100% */}
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
                  label="Password"
                  type="password"
                  autoComplete="off"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  className="w-full"
                />
                <div className="flex items-center justify-between">
                  <FormControlLabel
                    control={<Checkbox />} // Replace with your Checkbox component
                    label="Remember Me"
                  />
                  <Link href="/forgot-password" className="text-blue-600 ">
                    Forgot Password
                  </Link>
                </div>
                <Button type="submit" variant="contained" className="bg-blue-600 w-full">
                  Login
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
