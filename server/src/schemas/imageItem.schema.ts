import Joi from "joi";
import { Kind } from "../models/SearchResult";

export const ImageItemSchema = Joi.object({
  id: Joi.string().length(32).required(),
  kind: Joi.string().valid(Kind.CustomsearchResult),
  title: Joi.string().required(),
  htmlTitle: Joi.string(),
  link: Joi.string().uri().required(),
  displayLink: Joi.string().required(),
  snippet: Joi.string().required(),
  htmlSnippet: Joi.string(),
  mime: Joi.string(),
  fileFormat: Joi.string(),
  image: Joi.object({
    contextLink: Joi.string().uri().required(),
    height: Joi.number().required(),
    width: Joi.number().required(),
    byteSize: Joi.number().required(),
    thumbnailLink: Joi.string().uri().required(),
    thumbnailHeight: Joi.number().required(),
    thumbnailWidth: Joi.number().required(),
  }).required(),
});
