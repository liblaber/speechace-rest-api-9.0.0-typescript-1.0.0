// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const segmentMetricsListPteScore = z.lazy(() => {
  return z.object({
    coherence: z.number().optional(),
    fluency: z.number().optional(),
    grammar: z.number().optional(),
    pronunciation: z.number().optional(),
    vocab: z.number().optional(),
  });
});

/**
 *
 * @typedef  {SegmentMetricsListPteScore} segmentMetricsListPteScore
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type SegmentMetricsListPteScore = z.infer<typeof segmentMetricsListPteScore>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const segmentMetricsListPteScoreResponse = z.lazy(() => {
  return z
    .object({
      coherence: z.number().optional(),
      fluency: z.number().optional(),
      grammar: z.number().optional(),
      pronunciation: z.number().optional(),
      vocab: z.number().optional(),
    })
    .transform((data) => ({
      coherence: data['coherence'],
      fluency: data['fluency'],
      grammar: data['grammar'],
      pronunciation: data['pronunciation'],
      vocab: data['vocab'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const segmentMetricsListPteScoreRequest = z.lazy(() => {
  return z
    .object({
      coherence: z.number().nullish(),
      fluency: z.number().nullish(),
      grammar: z.number().nullish(),
      pronunciation: z.number().nullish(),
      vocab: z.number().nullish(),
    })
    .transform((data) => ({
      coherence: data['coherence'],
      fluency: data['fluency'],
      grammar: data['grammar'],
      pronunciation: data['pronunciation'],
      vocab: data['vocab'],
    }));
});
