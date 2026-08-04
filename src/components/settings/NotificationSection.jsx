
export function NotificationSection() {
  return (
    <div className="flex-1 bg-white rounded-lg border p-8">
        
      <h2 className="text-lg font-bold mb-1">Notifications</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Choose what you want to be notified about.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-2 border-b">
          <div>
            <p className="text-sm font-medium">Task assigned to you</p>
            <p className="text-sm text-muted-foreground">
              Get notified when someone assigns you a task
            </p>
          </div>
          <input type="checkbox" defaultChecked className="w-4 h-4" />
        </div>

        <div className="flex items-center justify-between py-2 border-b">
          <div>
            <p className="text-sm font-medium">Task status changes</p>
            <p className="text-sm text-muted-foreground">
              Get notified when a task moves columns
            </p>
          </div>
          <input type="checkbox" className="w-4 h-4" />
        </div>

        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm font-medium">Weekly summary</p>
            <p className="text-sm text-muted-foreground">
              Get a weekly email of your task activity
            </p>
          </div>
          <input type="checkbox" defaultChecked className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
