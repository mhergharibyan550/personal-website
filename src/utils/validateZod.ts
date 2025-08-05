import { ZodSchema } from "zod";

export default function validateZod(data: object, schema: ZodSchema) {
  const validationResult = schema.safeParse(data);
  return {
    success: validationResult.success,
    errors: validationResult.error?.flatten().fieldErrors,
  };
}
