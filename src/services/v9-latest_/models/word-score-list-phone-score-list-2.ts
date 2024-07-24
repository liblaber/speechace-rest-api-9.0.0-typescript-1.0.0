// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const wordScoreListPhoneScoreList2 = z.lazy(() => {
  return z.object({
    extent: z.array(z.number()).optional(),
    phone: z.string().optional(),
    predictedStressLevel: z.number().optional(),
    qualityScore: z.number().optional(),
    soundMostLike: z.string().optional(),
    stressLevel: z.number().optional().nullable(),
    stressScore: z.number().optional(),
  });
});

/**
 *
 * @typedef  {WordScoreListPhoneScoreList2} wordScoreListPhoneScoreList2
 * @property {number[]}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type WordScoreListPhoneScoreList2 = z.infer<typeof wordScoreListPhoneScoreList2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListPhoneScoreList2Response = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).optional(),
      phone: z.string().optional(),
      predicted_stress_level: z.number().optional(),
      quality_score: z.number().optional(),
      sound_most_like: z.string().optional(),
      stress_level: z.number().optional().nullable(),
      stress_score: z.number().optional(),
    })
    .transform((data) => ({
      extent: data['extent'],
      phone: data['phone'],
      predictedStressLevel: data['predicted_stress_level'],
      qualityScore: data['quality_score'],
      soundMostLike: data['sound_most_like'],
      stressLevel: data['stress_level'],
      stressScore: data['stress_score'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListPhoneScoreList2Request = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).nullish(),
      phone: z.string().nullish(),
      predictedStressLevel: z.number().nullish(),
      qualityScore: z.number().nullish(),
      soundMostLike: z.string().nullish(),
      stressLevel: z.number().nullish(),
      stressScore: z.number().nullish(),
    })
    .transform((data) => ({
      extent: data['extent'],
      phone: data['phone'],
      predicted_stress_level: data['predictedStressLevel'],
      quality_score: data['qualityScore'],
      sound_most_like: data['soundMostLike'],
      stress_level: data['stressLevel'],
      stress_score: data['stressScore'],
    }));
});