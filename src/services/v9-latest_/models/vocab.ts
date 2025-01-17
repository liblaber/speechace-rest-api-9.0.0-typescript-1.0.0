// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { vocabOverallMetrics, vocabOverallMetricsRequest, vocabOverallMetricsResponse } from './vocab-overall-metrics';

/**
 * The shape of the model inside the application code - what the users use
 */
export const vocab = z.lazy(() => {
  return z.object({
    overallMetrics: vocabOverallMetrics.optional(),
  });
});

/**
 *
 * @typedef  {Vocab} vocab
 * @property {VocabOverallMetrics}
 */
export type Vocab = z.infer<typeof vocab>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const vocabResponse = z.lazy(() => {
  return z
    .object({
      overall_metrics: vocabOverallMetricsResponse.optional(),
    })
    .transform((data) => ({
      overallMetrics: data['overall_metrics'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const vocabRequest = z.lazy(() => {
  return z.object({ overallMetrics: vocabOverallMetricsRequest.nullish() }).transform((data) => ({
    overall_metrics: data['overallMetrics'],
  }));
});
