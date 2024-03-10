import Joi from "joi";

export const userSchema = Joi.object({
  userId: Joi.string().length(32).required(),
  favorites: Joi.array().required(),
});
