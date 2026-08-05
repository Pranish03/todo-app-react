import { useDraggable } from "@dnd-kit/core";
import { Badge } from "@/components/ui/badge";

const priorityColor = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-green-100 text-green-700",
};

export function TaskCard({ task, onClick }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: task.id, data: { task } });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        opacity: isDragging ? 0.4 : 1,
        zIndex: isDragging ? 50 : "auto",
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className="bg-white rounded-md p-4 shadow-sm border cursor-pointer hover:shadow-md transition-shadow"
    >
      <h3 className="font-medium mb-1">{task.title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{task.desc}</p>
      <Badge className={priorityColor[task.priority]}>{task.priority}</Badge>
    </div>
  );
}
