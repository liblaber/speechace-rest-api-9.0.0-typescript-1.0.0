// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const segmentMetricsListCefrScore2 = z.lazy(() => {
  return z.object({
    coherence: z.string().optional(),
    fluency: z.string().optional(),
    grammar: z.string().optional(),
    pronunciation: z.string().optional(),
    vocab: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SegmentMetricsListCefrScore2} segmentMetricsListCefrScore2
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SegmentMetricsListCefrScore2 = z.infer<typeof segmentMetricsListCefrScore2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const segmentMetricsListCefrScore2Response = z.lazy(() => {
  return z
    .object({
      coherence: z.string().optional(),
      fluency: z.string().optional(),
      grammar: z.string().optional(),
      pronunciation: z.string().optional(),
      vocab: z.string().optional(),
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
export const segmentMetricsListCefrScore2Request = z.lazy(() => {
  return z
    .object({
      coherence: z.string().nullish(),
      fluency: z.string().nullish(),
      grammar: z.string().nullish(),
      pronunciation: z.string().nullish(),
      vocab: z.string().nullish(),
    })
    .transform((data) => ({
      coherence: data['coherence'],
      fluency: data['fluency'],
      grammar: data['grammar'],
      pronunciation: data['pronunciation'],
      vocab: data['vocab'],
    }));
});
