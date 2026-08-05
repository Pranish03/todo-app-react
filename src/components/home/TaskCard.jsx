import { useDraggable } from "@dnd-kit/core";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";

const priorityColor = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-green-100 text-green-700",
};

export function TaskCard({ task, onClick }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: { task },
    });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        opacity: isDragging ? 0.4 : 1,
        zIndex: isDragging ? 50 : "auto",
      }
    : {
        opacity: isDragging ? 0.4 : 1,
      };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className="cursor-pointer transition-shadow hover:shadow"
    >
      <CardHeader>
        <CardTitle>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium">{task.title}</h3>
            <Badge className={priorityColor[task.priority]}>
              {task.priority}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {task.desc}
        </p>
      </CardContent>
    </Card>
  );
}
