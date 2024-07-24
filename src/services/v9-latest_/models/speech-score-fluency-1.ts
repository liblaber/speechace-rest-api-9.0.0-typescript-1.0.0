// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  fluencyOverallMetrics2,
  fluencyOverallMetrics2Request,
  fluencyOverallMetrics2Response,
} from './fluency-overall-metrics-2';
import {
  fluencySegmentMetricsList2,
  fluencySegmentMetricsList2Request,
  fluencySegmentMetricsList2Response,
} from './fluency-segment-metrics-list-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const speechScoreFluency1 = z.lazy(() => {
  return z.object({
    fluencyVersion: z.string().optional(),
    ieltsSubscoreVersion: z.string().optional().nullable(),
    overallMetrics: fluencyOverallMetrics2.optional(),
    segmentMetricsList: z.array(fluencySegmentMetricsList2).optional(),
  });
});

/**
 *
 * @typedef  {SpeechScoreFluency1} speechScoreFluency1
 * @property {string}
 * @property {string}
 * @property {FluencyOverallMetrics2}
 * @property {FluencySegmentMetricsList2[]}
 */
export type SpeechScoreFluency1 = z.infer<typeof speechScoreFluency1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const speechScoreFluency1Response = z.lazy(() => {
  return z
    .object({
      fluency_version: z.string().optional(),
      ielts_subscore_version: z.string().optional().nullable(),
      overall_metrics: fluencyOverallMetrics2Response.optional(),
      segment_metrics_list: z.array(fluencySegmentMetricsList2Response).optional(),
    })
    .transform((data) => ({
      fluencyVersion: data['fluency_version'],
      ieltsSubscoreVersion: data['ielts_subscore_version'],
      overallMetrics: data['overall_metrics'],
      segmentMetricsList: data['segment_metrics_list'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const speechScoreFluency1Request = z.lazy(() => {
  return z
    .object({
      fluencyVersion: z.string().nullish(),
      ieltsSubscoreVersion: z.string().nullish(),
      overallMetrics: fluencyOverallMetrics2Request.nullish(),
      segmentMetricsList: z.array(fluencySegmentMetricsList2Request).nullish(),
    })
    .transform((data) => ({
      fluency_version: data['fluencyVersion'],
      ielts_subscore_version: data['ieltsSubscoreVersion'],
      overall_metrics: data['overallMetrics'],
      segment_metrics_list: data['segmentMetricsList'],
    }));
});