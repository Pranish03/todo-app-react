import { PageChange } from "@/components/home/PageChange";
import { SettingSidebar } from "@/components/settings/SettingSidebar";
import { ProfileSection } from "@/components/settings/ProfileSection";
import { AccountSection } from "@/components/settings/AccountSection";
import { NotificationSection } from "@/components/settings/NotificationSection";
import { CheckSquare } from "lucide-react";

export function SettingPage({ section }) {
  return (
    <div className="min-h-screen bg-gray-50">

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
          <SettingSidebar />
          {section === "profile" && <ProfileSection />}
          {section === "account" && <AccountSection />}
          {section === "notifications" && <NotificationSection />}
        </div>
      </div>

      <PageChange />
    </div>
  );
}