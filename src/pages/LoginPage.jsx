import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg p-8 shadow-sm max-w-sm">
          <div className="flex items-center gap-2 justify-center mb-6">
            <div className="bg-indigo-600 text-white rounded-md p-1.5">
              Logo
            </div>
            <span className="font-semibold">TaskFlow</span>
          </div>
          <h1 className="text-xl font-bold text-center mb-1">Welcomeback</h1>
          <h1 className="text-sm text-muted-foreground text-center mb-6">
            Sign in to continue
          </h1>

          <div className="space-y-4">
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

            <Button className={"w-full"} onClick={handleLogin}>
              Log in
            </Button>
          </div>

          <p className="text-sm text-center text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
