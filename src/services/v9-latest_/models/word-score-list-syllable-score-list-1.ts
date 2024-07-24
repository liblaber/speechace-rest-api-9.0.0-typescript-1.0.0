// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const wordScoreListSyllableScoreList1 = z.lazy(() => {
  return z.object({
    extent: z.array(z.number()).optional(),
    letters: z.string().optional(),
    phoneCount: z.number().optional(),
    predictedStressLevel: z.number().optional(),
    qualityScore: z.number().optional(),
    stressLevel: z.number().optional(),
    stressScore: z.number().optional(),
  });
});

/**
 *
 * @typedef  {WordScoreListSyllableScoreList1} wordScoreListSyllableScoreList1
 * @property {number[]}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type WordScoreListSyllableScoreList1 = z.infer<typeof wordScoreListSyllableScoreList1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListSyllableScoreList1Response = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).optional(),
      letters: z.string().optional(),
      phone_count: z.number().optional(),
      predicted_stress_level: z.number().optional(),
      quality_score: z.number().optional(),
      stress_level: z.number().optional(),
      stress_score: z.number().optional(),
    })
    .transform((data) => ({
      extent: data['extent'],
      letters: data['letters'],
      phoneCount: data['phone_count'],
      predictedStressLevel: data['predicted_stress_level'],
      qualityScore: data['quality_score'],
      stressLevel: data['stress_level'],
      stressScore: data['stress_score'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListSyllableScoreList1Request = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).nullish(),
      letters: z.string().nullish(),
      phoneCount: z.number().nullish(),
      predictedStressLevel: z.number().nullish(),
      qualityScore: z.number().nullish(),
      stressLevel: z.number().nullish(),
      stressScore: z.number().nullish(),
    })
    .transform((data) => ({
      extent: data['extent'],
      letters: data['letters'],
      phone_count: data['phoneCount'],
      predicted_stress_level: data['predictedStressLevel'],
      quality_score: data['qualityScore'],
      stress_level: data['stressLevel'],
      stress_score: data['stressScore'],
    }));
});
