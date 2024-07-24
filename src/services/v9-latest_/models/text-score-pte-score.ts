// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const textScorePteScore = z.lazy(() => {
  return z.object({
    pronunciation: z.number().optional(),
  });
});

/**
 *
 * @typedef  {TextScorePteScore} textScorePteScore
 * @property {number}
 */
export type TextScorePteScore = z.infer<typeof textScorePteScore>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const textScorePteScoreResponse = z.lazy(() => {
  return z
    .object({
      pronunciation: z.number().optional(),
    })
    .transform((data) => ({
      pronunciation: data['pronunciation'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const textScorePteScoreRequest = z.lazy(() => {
  return z.object({ pronunciation: z.number().nullish() }).transform((data) => ({
    pronunciation: data['pronunciation'],
  }));
});
