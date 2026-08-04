import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
export function AccountSection(){
    return(
    <div className="flex-1 bg-white rounded-lg border p-8">


        {/* <SettingSidebar/> */}
      <h2 className="text-lg font-bold mb-1">Account settings</h2>
      <p className="text-sm text-muted-foreground mb-6">Manage your password and account security.</p>

      <div className="mb-4">
        <label className="text-sm font-medium">Current password</label>
        <Input type="password" placeholder="••••••••" className="mt-1" />
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium">New password</label>
        <Input type="password" placeholder="••••••••" className="mt-1" />
      </div>

      <div className="mb-6">
        <label className="text-sm font-medium">Confirm new password</label>
        <Input type="password" placeholder="••••••••" className="mt-1" />
      </div>

      <Button>Save Change</Button>
      </div>
    );
}