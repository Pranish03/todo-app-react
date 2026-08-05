import { useDroppable } from "@dnd-kit/core";
import { TaskCard } from "./TaskCard";

export function Column({ id, title, tasks, onCardClick }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`bg-muted/40 rounded-lg p-4 transition-colors ${
        isOver ? "bg-muted/70 ring-2 ring-indigo-400" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold">{title}</h2>
        <span className="text-sm text-muted-foreground">{tasks.length}</span>
      </div>
      <div className="space-y-3 min-h-10">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => onCardClick(task)}
          />
        ))}
      </div>
    </div>
  );
}
