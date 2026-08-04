import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  Mail, Upload} from "lucide-react";

export function ProfileSection(){
    return(
        <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="flex gap-6 max-w-4xl">



          {/* Profile panel */}
          <div className="flex-1 bg-white rounded-lg border p-8">
            <h2 className="text-lg font-bold mb-1">Profile</h2>
            <p className="text-sm text-muted-foreground mb-6">Manage your name, photo, and email address.</p>

            {/* Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="bg-indigo-600 text-white rounded-lg w-16 h-16 flex items-center justify-center text-xl font-medium">
                  SC
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border shadow-sm">
                  <Upload size={12} />
                </div>
              </div>
              <div>
                <p className="font-medium">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">JPG, PNG or GIF · max 5 MB</p>
                <a href="#" className="text-sm text-indigo-600 font-medium">Upload new photo</a>
              </div>
            </div>

            {/* Full name */}
            <div className="mb-4">
              <label className="text-sm font-medium">Full name</label>
              <Input defaultValue="Sarah Chen" className="mt-1" />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="text-sm font-medium">Email address</label>
              <div className="relative mt-1">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input defaultValue="sarah@acme.com" className="pl-9" />
              </div>
            </div>

            <Button>Save changes</Button>
          </div>
        </div>
      </div>
    );
}