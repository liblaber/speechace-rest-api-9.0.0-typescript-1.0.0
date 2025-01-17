// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const negativeConnectives = z.lazy(() => {
  return z.object({
    examples: z.array(z.string()).optional(),
    level: z.string().optional(),
    message: z.string().optional(),
    score: z.number().optional(),
  });
});

/**
 *
 * @typedef  {NegativeConnectives} negativeConnectives
 * @property {string[]}
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type NegativeConnectives = z.infer<typeof negativeConnectives>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const negativeConnectivesResponse = z.lazy(() => {
  return z
    .object({
      examples: z.array(z.string()).optional(),
      level: z.string().optional(),
      message: z.string().optional(),
      score: z.number().optional(),
    })
    .transform((data) => ({
      examples: data['examples'],
      level: data['level'],
      message: data['message'],
      score: data['score'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const negativeConnectivesRequest = z.lazy(() => {
  return z
    .object({
      examples: z.array(z.string()).nullish(),
      level: z.string().nullish(),
      message: z.string().nullish(),
      score: z.number().nullish(),
    })
    .transform((data) => ({
      examples: data['examples'],
      level: data['level'],
      message: data['message'],
      score: data['score'],
    }));
});
