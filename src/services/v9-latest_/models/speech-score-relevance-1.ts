// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const speechScoreRelevance1 = z.lazy(() => {
  return z.object({
    class: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SpeechScoreRelevance1} speechScoreRelevance1
 * @property {string}
 */
export type SpeechScoreRelevance1 = z.infer<typeof speechScoreRelevance1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const speechScoreRelevance1Response = z.lazy(() => {
  return z
    .object({
      class: z.string().optional(),
    })
    .transform((data) => ({
      class: data['class'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const speechScoreRelevance1Request = z.lazy(() => {
  return z.object({ class: z.string().nullish() }).transform((data) => ({
    class: data['class'],
  }));
});
