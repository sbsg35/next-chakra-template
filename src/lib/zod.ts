import { number, object, string, ZodSchema } from "zod";
import * as zod from "zod";

// casts and validates the data
export const validateCast = async <T extends ZodSchema>(
  data: any,
  schema: T
): Promise<zod.infer<T>> => {
  return schema.parse(data);
};

export const zodId = string().length(24, "Invalid id").optional();

export const zodAt = number().optional();

export const BaseSchema = object({
  id: zodId,
  createdAt: zodAt,
  updatedAt: zodAt,
});

export type BaseSchemaType = zod.infer<typeof BaseSchema>;

export const zodStringTrim = string().trim();
export const zodPassword = string({ required_error: "Enter a password" })
  .min(8, "Password must be at least 8 characters")
  .max(16, "Password must be less than 16 characters");
