// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const errors = z.lazy(() => {
  return z.object({
    category: z.string().optional(),
    matchedText: z.string().optional(),
    message: z.string().optional(),
    replacements: z.array(z.string()).optional(),
    span: z.array(z.number()).optional(),
  });
});

/**
 *
 * @typedef  {Errors} errors
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string[]}
 * @property {number[]}
 */
export type Errors = z.infer<typeof errors>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const errorsResponse = z.lazy(() => {
  return z
    .object({
      category: z.string().optional(),
      matched_text: z.string().optional(),
      message: z.string().optional(),
      replacements: z.array(z.string()).optional(),
      span: z.array(z.number()).optional(),
    })
    .transform((data) => ({
      category: data['category'],
      matchedText: data['matched_text'],
      message: data['message'],
      replacements: data['replacements'],
      span: data['span'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const errorsRequest = z.lazy(() => {
  return z
    .object({
      category: z.string().nullish(),
      matchedText: z.string().nullish(),
      message: z.string().nullish(),
      replacements: z.array(z.string()).nullish(),
      span: z.array(z.number()).nullish(),
    })
    .transform((data) => ({
      category: data['category'],
      matched_text: data['matchedText'],
      message: data['message'],
      replacements: data['replacements'],
      span: data['span'],
    }));
});
