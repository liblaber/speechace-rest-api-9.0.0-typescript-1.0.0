// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const wordScoreListSyllableScoreList4 = z.lazy(() => {
  return z.object({
    extent: z.array(z.number()).optional(),
    letters: z.string().optional(),
    phoneCount: z.number().optional(),
    qualityScore: z.number().optional(),
    stressLevel: z.number().optional(),
    stressScore: z.number().optional(),
  });
});

/**
 *
 * @typedef  {WordScoreListSyllableScoreList4} wordScoreListSyllableScoreList4
 * @property {number[]}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type WordScoreListSyllableScoreList4 = z.infer<typeof wordScoreListSyllableScoreList4>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListSyllableScoreList4Response = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).optional(),
      letters: z.string().optional(),
      phone_count: z.number().optional(),
      quality_score: z.number().optional(),
      stress_level: z.number().optional(),
      stress_score: z.number().optional(),
    })
    .transform((data) => ({
      extent: data['extent'],
      letters: data['letters'],
      phoneCount: data['phone_count'],
      qualityScore: data['quality_score'],
      stressLevel: data['stress_level'],
      stressScore: data['stress_score'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListSyllableScoreList4Request = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).nullish(),
      letters: z.string().nullish(),
      phoneCount: z.number().nullish(),
      qualityScore: z.number().nullish(),
      stressLevel: z.number().nullish(),
      stressScore: z.number().nullish(),
    })
    .transform((data) => ({
      extent: data['extent'],
      letters: data['letters'],
      phone_count: data['phoneCount'],
      quality_score: data['qualityScore'],
      stress_level: data['stressLevel'],
      stress_score: data['stressScore'],
    }));
});
