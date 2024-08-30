
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc";

const LoginSignup = () => {
  return (
    <div className="my-4">
            <h1 className="text-3xl font-semibold">LogIn</h1>
            <p className="mt-2 text-xs text-slate-400">
              {""}
              Let's Connect With Us</p>
              <form>
                <Label htmlFor="email">Your Email</Label>
                <Input className="mt-2 mb-2 bg-transparent" type="email" id="email" placeholder="Enter Your Email" />
                <Label htmlFor="password">Password</Label>
                <Input className="mt-2 mb-2 bg-transparent" type="password" id="password" placeholder="Enter Your password" />
                <Button className="flex items-center w-full gap-4 px-12 bg-transparent rounded-full" variant="outline">
                <FcGoogle/> SignIn With Google
                </Button>

                <Button type="submit" className="w-full mt-6 bg-indigo rounded-full hover">LogIn</Button>
              </form>
          </div>
  )
}

export default LoginSignup
