import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z
    .enum(["todo", "ongoing", "completed"], {
      message: "Status must be of todo, ongoing or completed",
    })
    .optional(),
  priority: z
    .enum(["low", "medium", "high"], {
      message: "Priority must be of low, meduim or high",
    })
    .optional(),
});

export const updateTodoSchema = createTodoSchema;
