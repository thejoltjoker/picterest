import Joi from "joi";

export const imageItemSchema = Joi.object({
  imageId: Joi.string().length(32).required(),
  title: Joi.string().required(),
  snippet: Joi.string().required(),
  link: Joi.string().uri().required(),
  contextLink: Joi.string().uri().required(),
  thumbnailLink: Joi.string().uri().required(),
  width: Joi.number().integer().positive().required(),
  height: Joi.number().integer().positive().required(),
});
