import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { KeyRound } from "lucide-react";

export function ProfilePage() {
  const [password, setPassword] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const handlePasswordChange = () => {
    if (!password.current || !password.next || !password.confirm) return;
    if (password.next !== password.confirm) return;
    // TODO: wire up to backend
    setPassword({ current: "", next: "", confirm: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="max-w-2xl space-y-6">
          {/* Static profile info */}
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

          {/* Password change */}
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
              <div className="mb-4">
                <label className="text-sm font-medium">Current password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1"
                  value={password.current}
                  onChange={(e) =>
                    setPassword({ ...password, current: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="text-sm font-medium">New password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1"
                  value={password.next}
                  onChange={(e) =>
                    setPassword({ ...password, next: e.target.value })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium">
                  Confirm new password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1"
                  value={password.confirm}
                  onChange={(e) =>
                    setPassword({ ...password, confirm: e.target.value })
                  }
                />
                {password.next &&
                  password.confirm &&
                  password.next !== password.confirm && (
                    <p className="text-xs text-destructive mt-1">
                      Passwords don't match.
                    </p>
                  )}
              </div>

              <Button onClick={handlePasswordChange}>Update password</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
