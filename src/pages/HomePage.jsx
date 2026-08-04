import { AddTaskDialog } from "@/components/home/AddTaskDialog";
import { EditTaskDialog } from "@/components/home/EditTaskDialog";
import { PageChange } from "@/components/home/PageChange";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router";

const priorityColor = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-green-100 text-green-700",
};

export function HomePage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Redesign onboarding flow", desc: "Update the welcome screens and reduce steps to 3.", priority: "High", status: "todo" },
    { id: 2, title: "Fix payment gateway timeout", desc: "Stripe webhook failing on retry after 30s.", priority: "High", status: "todo" },
    { id: 3, title: "Redesign onboarding flow", desc: "Update the welcome screens and reduce steps to 3.", priority: "High", status: "inprogress" },
    { id: 4, title: "Fix payment gateway timeout", desc: "Stripe webhook failing on retry after 30s.", priority: "High", status: "inprogress" },
    { id: 5, title: "Redesign onboarding flow", desc: "Update the welcome screens and reduce steps to 3.", priority: "High", status: "done" },
    { id: 6, title: "Fix payment gateway timeout", desc: "Stripe webhook failing on retry after 30s.", priority: "High", status: "done" },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCardClick = (task) => {
    setSelectedTask(task);
    setEditOpen(true);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "inprogress");
  const doneTasks = tasks.filter((t) => t.status === "done");

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

          <Link to="/settings/profile">
            <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
              PC
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <p className="text-muted-foreground text-sm">
              {tasks.length} tasks across 3 columns
            </p>
          </div>

          <AddTaskDialog onAddTask={handleAddTask} />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* To do column */}
          <div className="bg-muted/40 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">To do</h2>
              <span className="text-sm text-muted-foreground">{todoTasks.length}</span>
            </div>
            <div className="space-y-3">
              {todoTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleCardClick(task)}
                  className="bg-white rounded-md p-4 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium mb-1">{task.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{task.desc}</p>
                  <Badge className={priorityColor[task.priority]}>{task.priority}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* In Progress column */}
          <div className="bg-muted/40 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">In Progress</h2>
              <span className="text-sm text-muted-foreground">{inProgressTasks.length}</span>
            </div>
            <div className="space-y-3">
              {inProgressTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleCardClick(task)}
                  className="bg-white rounded-md p-4 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium mb-1">{task.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{task.desc}</p>
                  <Badge className={priorityColor[task.priority]}>{task.priority}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Done column */}
          <div className="bg-muted/40 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">Done</h2>
              <span className="text-sm text-muted-foreground">{doneTasks.length}</span>
            </div>
            <div className="space-y-3">
              {doneTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleCardClick(task)}
                  className="bg-white rounded-md p-4 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium mb-1">{task.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{task.desc}</p>
                  <Badge className={priorityColor[task.priority]}>{task.priority}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        <PageChange />
      </div>

      <EditTaskDialog
        key={selectedTask?.id}
        task={selectedTask}
        open={editOpen}
        onOpenChange={setEditOpen}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}