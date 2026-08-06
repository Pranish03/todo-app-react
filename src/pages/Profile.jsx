import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "@/schemas/authSchema";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

export function Profile() {
  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(changePasswordSchema),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="max-w-2xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-600 text-white rounded-lg w-16 h-16 flex items-center justify-center text-xl font-medium">
                  PC
                </div>
                <div>
                  <p className="font-medium">Pranish Chaulagain</p>
                  <p className="text-sm text-muted-foreground">
                    pc@pranishchaulagain.com.np
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeyRound size={16} />
                Change password
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Update your password to keep your account secure.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="oldPassword">
                      Current Password
                    </FieldLabel>
                    <Input
                      id="oldPassword"
                      type="password"
                      placeholder="••••••••"
                      aria-invalid={!!errors.oldPassword}
                      {...register("oldPassword")}
                    />

                    {errors.oldPassword && (
                      <FieldError errors={[errors.oldPassword]} />
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="newPassword">
                      Current Password
                    </FieldLabel>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="••••••••"
                      aria-invalid={!!errors.newPassword}
                      {...register("newPassword")}
                    />

                    {errors.newPassword && (
                      <FieldError errors={[errors.newPassword]} />
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="confirmPassword">
                      Current Password
                    </FieldLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      aria-invalid={!!errors.confirmPassword}
                      {...register("confirmPassword")}
                    />

                    {errors.confirmPassword && (
                      <FieldError errors={[errors.confirmPassword]} />
                    )}
                  </Field>

                  <Field>
                    <Button type="submit">Update password</Button>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
