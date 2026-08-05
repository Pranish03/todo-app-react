import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";

export function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-sm max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-6">
          <div className="bg-indigo-600 text-white rounded-md p-1.5">Logo</div>
          <span className="font-semibold">TaskFlow</span>
        </div>
        <h1 className="text-xl font-bold text-center mb-1">
          Create an Account
        </h1>
        <h1 className="text-sm text-muted-foreground text-center mb-6">
          Get Started
        </h1>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <Input type="text" placeholder="abc" className={"mt-1"}></Input>
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="abc@gmail.com"
              className={"mt-1"}
            ></Input>
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              placeholder="********"
              className={"mt-1"}
            ></Input>
          </div>
          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <Input
              type="password"
              placeholder="********"
              className={"mt-1"}
            ></Input>
          </div>
          <Button className={"w-full"} onClick={handleSignup}>
            Sign Up
          </Button>
        </div>

        <p className="text-sm text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
