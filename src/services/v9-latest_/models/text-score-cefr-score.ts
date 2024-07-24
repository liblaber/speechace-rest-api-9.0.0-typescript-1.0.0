// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const textScoreCefrScore = z.lazy(() => {
  return z.object({
    fluency: z.string().optional(),
    pronunciation: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TextScoreCefrScore} textScoreCefrScore
 * @property {string}
 * @property {string}
 */
export type TextScoreCefrScore = z.infer<typeof textScoreCefrScore>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const textScoreCefrScoreResponse = z.lazy(() => {
  return z
    .object({
      fluency: z.string().optional(),
      pronunciation: z.string().optional(),
    })
    .transform((data) => ({
      fluency: data['fluency'],
      pronunciation: data['pronunciation'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const textScoreCefrScoreRequest = z.lazy(() => {
  return z.object({ fluency: z.string().nullish(), pronunciation: z.string().nullish() }).transform((data) => ({
    fluency: data['fluency'],
    pronunciation: data['pronunciation'],
  }));
});