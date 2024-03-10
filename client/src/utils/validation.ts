import { Schema } from "joi";

export const isValid = (data: unknown, schema: Schema) => {
  const { error } = schema.validate(data, { abortEarly: false });

  if (error) {
    return false;
  }
  return true;
};
