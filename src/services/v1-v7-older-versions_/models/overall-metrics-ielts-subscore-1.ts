// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const overallMetricsIeltsSubscore1 = z.lazy(() => {
  return z.object({
    grammar: z.number().optional(),
    vocab: z.number().optional(),
  });
});

/**
 *
 * @typedef  {OverallMetricsIeltsSubscore1} overallMetricsIeltsSubscore1
 * @property {number}
 * @property {number}
 */
export type OverallMetricsIeltsSubscore1 = z.infer<typeof overallMetricsIeltsSubscore1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const overallMetricsIeltsSubscore1Response = z.lazy(() => {
  return z
    .object({
      grammar: z.number().optional(),
      vocab: z.number().optional(),
    })
    .transform((data) => ({
      grammar: data['grammar'],
      vocab: data['vocab'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const overallMetricsIeltsSubscore1Request = z.lazy(() => {
  return z.object({ grammar: z.number().nullish(), vocab: z.number().nullish() }).transform((data) => ({
    grammar: data['grammar'],
    vocab: data['vocab'],
  }));
});