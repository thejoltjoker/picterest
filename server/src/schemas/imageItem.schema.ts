import Joi from "joi";
import j2s from "joi-to-swagger";

export const ImageItemSchema = Joi.object({
  title: Joi.string().required(),
  snippet: Joi.string(),
  contextLink: Joi.string().uri(),
  link: Joi.string().uri().required(),
  thumbnailLink: Joi.string().uri(),
  thumbnailWidth: Joi.number(),
  thumbnailHeight: Joi.number(),
  imageId: Joi.string().length(40).required(),
});

export const ImageSchemaSwagger = j2s(ImageItemSchema).swagger;
export default ImageSchemaSwagger;
