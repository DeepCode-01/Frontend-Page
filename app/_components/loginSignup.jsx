"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import sideImage from "../../public/owl.jpg"

const LoginSignup = () => {
  const [isSignIn, setIsSignIn] = useState(true); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn); 
  };

  return (
    <>
      <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
        <div className="my-4">
          {isSignIn ? (
            <>
              {/* Sign In Form */}
              <h1 className="text-3xl font-semibold">Log In</h1>
              <p className="mt-2 mb-3 text-xs text-slate-400">
                Let's Connect With Us
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Button
                  className="flex mb-4 items-center w-full gap-4 px-12 bg-transparent rounded-full"
                  variant="outline"
                >
                  <FcGoogle /> Sign In With Google
                </Button>

                <Label htmlFor="email">Your Email</Label>
                <Input
                  className="mt-2 mb-2 bg-transparent"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}

                {/* <Label htmlFor="password">Password</Label>
                <Input
                  className="mt-2 mb-2 bg-transparent"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )} */}

                <Button
                  type="submit"
                  className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
                >
                  Log In
                </Button>
              </form>
              <p className="mt-4 text-xs text-slate-400 text-center">
                Don't have an account?{" "}
                <span
                  onClick={toggleForm}
                  className="text-indigo-500 cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              {/* Sign Up Form */}
              <h1 className="text-3xl font-semibold">Sign Up</h1>
              <p className="mt-2 mb-3 text-xs text-slate-400">
                Join us by creating an account
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <Button
                  className="flex mb-4 items-center w-full gap-4 px-12 bg-transparent rounded-full"
                  variant="outline"
                >
                  <FcGoogle /> Sign up With Google
                </Button>
                {/* <Label htmlFor="name">Name</Label>
                <Input
                  className="mt-2 mb-2 bg-transparent"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )} */}

                <Label htmlFor="signup-email">Your Email</Label>
                <Input
                  className="mt-2 mb-2 bg-transparent"
                  type="email"
                  id="signup-email"
                  placeholder="Enter Your Email"
                  {...register("signupEmail", { required: "Email is required" })}
                />
                {errors.signupEmail && (
                  <p className="text-red-500 text-xs">
                    {errors.signupEmail.message}
                  </p>
                )}

                {/* <Label htmlFor="signup-password">Password</Label>
                <Input
                  className="mt-2 mb-2 bg-transparent"
                  type="password"
                  id="signup-password"
                  placeholder="Enter Your Password"
                  {...register("signupPassword", {
                    required: "Password is required",
                  })}
                />
                {errors.signupPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.signupPassword.message}
                  </p>
                )} */}

                <Button
                  type="submit"
                  className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
                >
                  Sign Up
                </Button>
              </form>
              <p className="mt-4 text-xs text-slate-400 text-center">
                Already have an account?{" "}
                <span
                  onClick={toggleForm}
                  className="text-indigo-500 cursor-pointer"
                >
                  Log In
                </span>
              </p>
            </>
          )}
          <p className="mt-4 text-xs text-slate-400 text-center">
            @2024 All Rights Reserved
          </p>
        </div>
      </div>

      <div className="relative hidden md:block">
      <Image
          className="object-cover"
          src={sideImage} 
          alt="background-img"
        
          layout="fill" 
          objectFit="cover"
        />
              <h1 className=''>
            Congratulations! <br /> You have found us
          </h1>
    
      </div>
    </>
  );
};

export default LoginSignup;
