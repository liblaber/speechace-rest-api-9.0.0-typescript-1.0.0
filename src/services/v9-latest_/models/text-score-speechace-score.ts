// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const textScoreSpeechaceScore = z.lazy(() => {
  return z.object({
    fluency: z.number().optional(),
    pronunciation: z.number().optional(),
  });
});

/**
 *
 * @typedef  {TextScoreSpeechaceScore} textScoreSpeechaceScore
 * @property {number}
 * @property {number}
 */
export type TextScoreSpeechaceScore = z.infer<typeof textScoreSpeechaceScore>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const textScoreSpeechaceScoreResponse = z.lazy(() => {
  return z
    .object({
      fluency: z.number().optional(),
      pronunciation: z.number().optional(),
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
export const textScoreSpeechaceScoreRequest = z.lazy(() => {
  return z.object({ fluency: z.number().nullish(), pronunciation: z.number().nullish() }).transform((data) => ({
    fluency: data['fluency'],
    pronunciation: data['pronunciation'],
  }));
});
