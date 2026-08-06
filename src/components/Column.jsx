import { useDroppable } from "@dnd-kit/core";
import { TaskCard } from "./TaskCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Column({ id, title, tasks, onCardClick }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <Card
      ref={setNodeRef}
      className={`transition-all ${isOver ? "ring-2 ring-primary" : ""}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <span className="text-sm text-muted-foreground">{tasks.length}</span>
      </CardHeader>

      <CardContent>
        <div className="space-y-3 min-h-10">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => onCardClick(task)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
