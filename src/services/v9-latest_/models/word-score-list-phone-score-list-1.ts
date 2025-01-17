// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const wordScoreListPhoneScoreList1 = z.lazy(() => {
  return z.object({
    extent: z.array(z.number()).optional(),
    phone: z.string().optional(),
    predictedStressLevel: z.number().optional(),
    qualityScore: z.number().optional(),
    soundMostLike: z.string().optional(),
    stressLevel: z.number().optional().nullable(),
    stressScore: z.number().optional(),
    wordExtent: z.array(z.number()).optional(),
  });
});

/**
 *
 * @typedef  {WordScoreListPhoneScoreList1} wordScoreListPhoneScoreList1
 * @property {number[]}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number[]}
 */
export type WordScoreListPhoneScoreList1 = z.infer<typeof wordScoreListPhoneScoreList1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListPhoneScoreList1Response = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).optional(),
      phone: z.string().optional(),
      predicted_stress_level: z.number().optional(),
      quality_score: z.number().optional(),
      sound_most_like: z.string().optional(),
      stress_level: z.number().optional().nullable(),
      stress_score: z.number().optional(),
      word_extent: z.array(z.number()).optional(),
    })
    .transform((data) => ({
      extent: data['extent'],
      phone: data['phone'],
      predictedStressLevel: data['predicted_stress_level'],
      qualityScore: data['quality_score'],
      soundMostLike: data['sound_most_like'],
      stressLevel: data['stress_level'],
      stressScore: data['stress_score'],
      wordExtent: data['word_extent'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const wordScoreListPhoneScoreList1Request = z.lazy(() => {
  return z
    .object({
      extent: z.array(z.number()).nullish(),
      phone: z.string().nullish(),
      predictedStressLevel: z.number().nullish(),
      qualityScore: z.number().nullish(),
      soundMostLike: z.string().nullish(),
      stressLevel: z.number().nullish(),
      stressScore: z.number().nullish(),
      wordExtent: z.array(z.number()).nullish(),
    })
    .transform((data) => ({
      extent: data['extent'],
      phone: data['phone'],
      predicted_stress_level: data['predictedStressLevel'],
      quality_score: data['qualityScore'],
      sound_most_like: data['soundMostLike'],
      stress_level: data['stressLevel'],
      stress_score: data['stressScore'],
      word_extent: data['wordExtent'],
    }));
});
