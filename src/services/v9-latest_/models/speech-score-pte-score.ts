// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const speechScorePteScore = z.lazy(() => {
  return z.object({
    coherence: z.number().optional(),
    fluency: z.number().optional(),
    grammar: z.number().optional(),
    overall: z.number().optional(),
    pronunciation: z.number().optional(),
    vocab: z.number().optional(),
  });
});

/**
 *
 * @typedef  {SpeechScorePteScore} speechScorePteScore
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type SpeechScorePteScore = z.infer<typeof speechScorePteScore>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const speechScorePteScoreResponse = z.lazy(() => {
  return z
    .object({
      coherence: z.number().optional(),
      fluency: z.number().optional(),
      grammar: z.number().optional(),
      overall: z.number().optional(),
      pronunciation: z.number().optional(),
      vocab: z.number().optional(),
    })
    .transform((data) => ({
      coherence: data['coherence'],
      fluency: data['fluency'],
      grammar: data['grammar'],
      overall: data['overall'],
      pronunciation: data['pronunciation'],
      vocab: data['vocab'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const speechScorePteScoreRequest = z.lazy(() => {
  return z
    .object({
      coherence: z.number().nullish(),
      fluency: z.number().nullish(),
      grammar: z.number().nullish(),
      overall: z.number().nullish(),
      pronunciation: z.number().nullish(),
      vocab: z.number().nullish(),
    })
    .transform((data) => ({
      coherence: data['coherence'],
      fluency: data['fluency'],
      grammar: data['grammar'],
      overall: data['overall'],
      pronunciation: data['pronunciation'],
      vocab: data['vocab'],
    }));
});
