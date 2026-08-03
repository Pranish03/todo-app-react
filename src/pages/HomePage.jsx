// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

//
export function TodoPage() {
  return (
    <div className="p-3">
      <div className="flex item-center justify-between px-4 py-3 bg-white border-b">
        <div>
          <span className="font-semibold">Do Me</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground bg-gray-300 px-3 py-1 rounded-full">
            I Will Do
          </span>
          <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
            PC
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <p className="text-muted-foreground text-sm">
              7 tasks across 3 columns
            </p>
          </div>

          <Button className={"bg-blue-500"}>+ Add</Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-muted/40 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">To do</h2>
              <span className="text-sm text-muted-foreground">3</span>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-md p-4 shadow-sm border">
                <h3 className="font-medium mb-1">Redesign onboarding flow</h3>
                <p className="text-sm text-muted-foreground mb-2">Update the welcome screens and reduce steps to 3.</p>
                <Badge className="bg-red-100 text-red-700">High</Badge>
              </div>

              <div className="bg-white rounded-md p-4 shadow-sm border">
                <h3 className="font-medium mb-1">Fix payment gateway timeout</h3>
                <p className="text-sm text-muted-foreground mb-2">Stripe webhook failing on retry after 30s.</p>
                <Badge className="bg-red-100 text-red-700">High</Badge>
              </div>
          </div>
        </div>
          <div className="bg-muted/40 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">In Progress</h2>
              <span className="text-sm text-muted-foreground">3</span>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-md p-4 shadow-sm border">
                <h3 className="font-medium mb-1">Redesign onboarding flow</h3>
                <p className="text-sm text-muted-foreground mb-2">Update the welcome screens and reduce steps to 3.</p>
                <Badge className="bg-red-100 text-red-700">High</Badge>
              </div>

              <div className="bg-white rounded-md p-4 shadow-sm border">
                <h3 className="font-medium mb-1">Fix payment gateway timeout</h3>
                <p className="text-sm text-muted-foreground mb-2">Stripe webhook failing on retry after 30s.</p>
                <Badge className="bg-red-100 text-red-700">High</Badge>
              </div>
          </div>
        </div>
          <div className="bg-muted/40 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">Done</h2>
              <span className="text-sm text-muted-foreground">3</span>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-md p-4 shadow-sm border">
                <h3 className="font-medium mb-1">Redesign onboarding flow</h3>
                <p className="text-sm text-muted-foreground mb-2">Update the welcome screens and reduce steps to 3.</p>
                <Badge className="bg-red-100 text-red-700">High</Badge>
              </div>

              <div className="bg-white rounded-md p-4 shadow-sm border">
                <h3 className="font-medium mb-1">Fix payment gateway timeout</h3>
                <p className="text-sm text-muted-foreground mb-2">Stripe webhook failing on retry after 30s.</p>
                <Badge className="bg-red-100 text-red-700">High</Badge>
              </div>
          </div>
        </div>

        


      </div>
    </div>
    </div>
  );
}
