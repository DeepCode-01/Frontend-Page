
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const LoginSignup = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <>
      <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
        <div className="my-4">
          <h1 className="text-3xl font-semibold">LogIn</h1>
          <p className="mt-2 mb-3 text-xs text-slate-400">Let's Connect With Us</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Button
              className="flex mb-4 items-center w-full gap-4 px-12 bg-transparent rounded-full"
              variant="outline"
            >
              <FcGoogle /> SignIn With Google
            </Button>

            {/* Email Input */}
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

            {/* Password Input */}
            <Label htmlFor="password">Password</Label>
            <Input
              className="mt-2 mb-2 bg-transparent"
              type="password"
              id="password"
              placeholder="Enter Your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}

            <Button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              LogIn
            </Button>
          </form>

          <h2 className="text-2xl font-semibold mt-8">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {/* Name Input */}
            <Label htmlFor="name">Name</Label>
            <Input
              className="mt-2 mb-2 bg-transparent"
              type="text"
              id="name"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}

            {/* Email Input for Signup */}
            <Label htmlFor="signup-email">Your Email</Label>
            <Input
              className="mt-2 mb-2 bg-transparent"
              type="email"
              id="signup-email"
              placeholder="Enter Your Email"
              {...register("signupEmail", { required: "Email is required" })}
            />
            {errors.signupEmail && (
              <p className="text-red-500 text-xs">{errors.signupEmail.message}</p>
            )}

            {/* Password Input for Signup */}
            <Label htmlFor="signup-password">Password</Label>
            <Input
              className="mt-2 mb-2 bg-transparent"
              type="password"
              id="signup-password"
              placeholder="Enter Your Password"
              {...register("signupPassword", { required: "Password is required" })}
            />
            {errors.signupPassword && (
              <p className="text-red-500 text-xs">{errors.signupPassword.message}</p>
            )}

            <Button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Sign Up
            </Button>
          </form>

          <p className="mt-4 text-xs text-slate-400 text-center">
            @2024 All Rights Reserved
          </p>
        </div>
      </div>

      <div className="bg-indigo-600 flex items-center justify-center text-3xl text-bold text-white">
        <div className="my-4">
          <h1>Congratulations! <br /> You have found us</h1>
        </div>

        <div className="border-2 w-10 border-white"></div>
      </div>
    </>
  );
};

export default LoginSignup;
