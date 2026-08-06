import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(`email: ${data.email}, password: ${data.password}`);
  };

  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-50 shadow-lg">
      <div className="w-full max-w-sm mx-auto">
        <div className="font-semibold text-[26px] text-center mb-4">
          Task
          <span className="text-zinc-400">Master</span>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className={"text-xl font-medium text-center"}>
              Login to your account
            </CardTitle>
            <CardDescription className={"text-center"}>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />

                  {errors.email && <FieldError errors={[errors.email]} />}
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    aria-invalid={!!errors.password}
                    {...register("password")}
                  />

                  {errors.password && <FieldError errors={[errors.password]} />}
                </Field>
                <Field>
                  <Button type="submit">Login</Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link to="/register">Register</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
