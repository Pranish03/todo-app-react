import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { updateTodoSchema } from "@/schemas/todoSchema";

export function EditTaskDialog({
  task,
  open,
  onOpenChange,
  onUpdateTask,
  onDeleteTask,
}) {
  const [confirmingDelete, setConfirmingDelete] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task?.title ?? "",
      description: task?.description ?? "",
      priority: task?.priority ?? "medium",
      status: task?.status ?? "todo",
    },
    resolver: zodResolver(updateTodoSchema),
  });

  if (!task) return null;

  const onSubmit = (data) => {
    onUpdateTask({
      ...task,
      ...data,
    });
    onOpenChange(false);
  };

  const handleDeleteClick = () => {
    if (!confirmingDelete) {
      setConfirmingDelete(true);
      return;
    }
    onDeleteTask(task?.id);
    onOpenChange(false);
  };

  const handleOpenChange = (next) => {
    if (!next) setConfirmingDelete(false);
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title *</FieldLabel>
              <Input
                id="title"
                aria-invalid={!!errors.title}
                {...register("title")}
              />
              {errors.title && <FieldError errors={[errors.title]} />}
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                aria-invalid={!!errors.description}
                {...register("description")}
              />
              {errors.description && (
                <FieldError errors={[errors.description]} />
              )}
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="priority">Priority</FieldLabel>
                <Controller
                  name="priority"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="priority" className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.priority && <FieldError errors={[errors.priority]} />}
              </Field>

              <Field>
                <FieldLabel htmlFor="status">Status</FieldLabel>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="status" className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">To do</SelectItem>
                        <SelectItem value="ongoing">In progress</SelectItem>
                        <SelectItem value="completed">Done</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.status && <FieldError errors={[errors.status]} />}
              </Field>
            </div>

            <div className="flex justify-between pt-2">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="destructive"
                  onClick={handleDeleteClick}
                >
                  {confirmingDelete ? "Confirm delete" : "Delete"}
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save changes</Button>
              </div>
            </div>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
