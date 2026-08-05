import { AddTaskDialog } from "@/components/home/AddTaskDialog";
import { EditTaskDialog } from "@/components/home/EditTaskDialog";
import { PageChange } from "@/components/home/PageChange";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Column } from "@/components/home/Column";

const priorityColor = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-green-100 text-green-700",
};

export function HomePage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Redesign onboarding flow",
      desc: "Update the welcome screens and reduce steps to 3.",
      priority: "High",
      status: "todo",
    },
    {
      id: 2,
      title: "Fix payment gateway timeout",
      desc: "Stripe webhook failing on retry after 30s.",
      priority: "High",
      status: "todo",
    },
    {
      id: 3,
      title: "Redesign onboarding flow",
      desc: "Update the welcome screens and reduce steps to 3.",
      priority: "High",
      status: "inprogress",
    },
    {
      id: 4,
      title: "Fix payment gateway timeout",
      desc: "Stripe webhook failing on retry after 30s.",
      priority: "High",
      status: "inprogress",
    },
    {
      id: 5,
      title: "Redesign onboarding flow",
      desc: "Update the welcome screens and reduce steps to 3.",
      priority: "High",
      status: "done",
    },
    {
      id: 6,
      title: "Fix payment gateway timeout",
      desc: "Stripe webhook failing on retry after 30s.",
      priority: "High",
      status: "done",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

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

  const handleDragStart = (event) => {
    setActiveTask(event.active.data.current?.task ?? null);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id; // "todo" | "inprogress" | "done"

    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
    );
  };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const inProgressTasks = tasks.filter((t) => t.status === "inprogress");
  const doneTasks = tasks.filter((t) => t.status === "done");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // must move 8px before it counts as a drag
      },
    }),
  );

  return (
    <div>
      <div className="flex item-center justify-between container mx-auto py-3 bg-white border-b">
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

      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Tasks</h1>
            <p className="text-muted-foreground text-sm">
              {tasks.length} tasks across 3 columns
            </p>
          </div>

          <AddTaskDialog onAddTask={handleAddTask} />
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-3 gap-6">
            <Column
              id="todo"
              title="To do"
              tasks={todoTasks}
              onCardClick={handleCardClick}
            />
            <Column
              id="inprogress"
              title="In Progress"
              tasks={inProgressTasks}
              onCardClick={handleCardClick}
            />
            <Column
              id="done"
              title="Done"
              tasks={doneTasks}
              onCardClick={handleCardClick}
            />
          </div>

          <DragOverlay>
            {activeTask ? (
              <div className="bg-white rounded-md p-4 shadow-lg border rotate-2">
                <h3 className="font-medium mb-1">{activeTask.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {activeTask.desc}
                </p>
                <Badge className={priorityColor[activeTask.priority]}>
                  {activeTask.priority}
                </Badge>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

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
