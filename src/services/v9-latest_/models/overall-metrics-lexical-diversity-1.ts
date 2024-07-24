// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const overallMetricsLexicalDiversity1 = z.lazy(() => {
  return z.object({
    level: z.string().optional(),
    score: z.number().optional(),
  });
});

/**
 *
 * @typedef  {OverallMetricsLexicalDiversity1} overallMetricsLexicalDiversity1
 * @property {string}
 * @property {number}
 */
export type OverallMetricsLexicalDiversity1 = z.infer<typeof overallMetricsLexicalDiversity1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const overallMetricsLexicalDiversity1Response = z.lazy(() => {
  return z
    .object({
      level: z.string().optional(),
      score: z.number().optional(),
    })
    .transform((data) => ({
      level: data['level'],
      score: data['score'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const overallMetricsLexicalDiversity1Request = z.lazy(() => {
  return z.object({ level: z.string().nullish(), score: z.number().nullish() }).transform((data) => ({
    level: data['level'],
    score: data['score'],
  }));
});