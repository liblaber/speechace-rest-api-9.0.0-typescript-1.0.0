// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { grammaticalAccuracy, grammaticalAccuracyRequest, grammaticalAccuracyResponse } from './grammatical-accuracy';
import { grammaticalRange, grammaticalRangeRequest, grammaticalRangeResponse } from './grammatical-range';
import { length, lengthRequest, lengthResponse } from './length';
import {
  overallMetricsLexicalDiversity1,
  overallMetricsLexicalDiversity1Request,
  overallMetricsLexicalDiversity1Response,
} from './overall-metrics-lexical-diversity-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const grammarOverallMetrics = z.lazy(() => {
  return z.object({
    grammaticalAccuracy: grammaticalAccuracy.optional(),
    grammaticalRange: grammaticalRange.optional(),
    length: length.optional(),
    lexicalDiversity: overallMetricsLexicalDiversity1.optional(),
  });
});

/**
 *
 * @typedef  {GrammarOverallMetrics} grammarOverallMetrics
 * @property {GrammaticalAccuracy}
 * @property {GrammaticalRange}
 * @property {Length}
 * @property {OverallMetricsLexicalDiversity1}
 */
export type GrammarOverallMetrics = z.infer<typeof grammarOverallMetrics>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const grammarOverallMetricsResponse = z.lazy(() => {
  return z
    .object({
      grammatical_accuracy: grammaticalAccuracyResponse.optional(),
      grammatical_range: grammaticalRangeResponse.optional(),
      length: lengthResponse.optional(),
      lexical_diversity: overallMetricsLexicalDiversity1Response.optional(),
    })
    .transform((data) => ({
      grammaticalAccuracy: data['grammatical_accuracy'],
      grammaticalRange: data['grammatical_range'],
      length: data['length'],
      lexicalDiversity: data['lexical_diversity'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const grammarOverallMetricsRequest = z.lazy(() => {
  return z
    .object({
      grammaticalAccuracy: grammaticalAccuracyRequest.nullish(),
      grammaticalRange: grammaticalRangeRequest.nullish(),
      length: lengthRequest.nullish(),
      lexicalDiversity: overallMetricsLexicalDiversity1Request.nullish(),
    })
    .transform((data) => ({
      grammatical_accuracy: data['grammaticalAccuracy'],
      grammatical_range: data['grammaticalRange'],
      length: data['length'],
      lexical_diversity: data['lexicalDiversity'],
    }));
});
