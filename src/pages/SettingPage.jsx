import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, CheckSquare, LogOut, Mail, Settings, Upload, User } from "lucide-react";
import { Link } from "react-router";

export function SettingPage(){
    return(
 <div className="min-h-screen bg-gray-50">

      {/* Top header bar */}
      <div className="flex items-center px-8 py-4 bg-white border-b">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white rounded-md p-1.5">
            <CheckSquare size={18} />
          </div>
          <span className="font-semibold">TaskFlow</span>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="flex gap-6 max-w-4xl">

          {/* Sidebar nav */}
          <div className="w-56 bg-white rounded-lg border p-2 h-fit">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-indigo-50 text-indigo-600 font-medium text-sm">
              <User size={16} />
              Profile
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              <Settings size={16} />
              Account settings
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              <Bell size={16} />
              Notifications
            </button>
            <div className="border-t my-2" />
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50">
              <LogOut size={16} />
              Log out
            </button>
          </div>

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

      {/* Bottom floating nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg border px-2 py-2 flex gap-1">
        <Link to="/login" className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:bg-gray-100">Login</Link>
        <Link to="/signup" className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:bg-gray-100">Sign up</Link>
        <Link to="/" className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:bg-gray-100">Kanban</Link>
        <Link to="/settings" className="px-4 py-2 rounded-full text-sm bg-indigo-600 text-white font-medium">Settings</Link>
      </div>
    </div>
    );

}