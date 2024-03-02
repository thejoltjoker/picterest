import Joi from "joi";

export const UserFavoriteSchema = Joi.object({
  title: Joi.string().required(),
  snippet: Joi.string(),
  contextLink: Joi.string().uri(),
  link: Joi.string().uri().required(),
  thumbnailLink: Joi.string().uri(),
  thumbnailWidth: Joi.number(),
  thumbnailHeight: Joi.number(),
  favoriteId: Joi.string().length(40).required(),
});
