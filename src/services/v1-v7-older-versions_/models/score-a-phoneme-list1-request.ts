// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scoreAPhonemeList1Request = z.lazy(() => {
  return z.object({
    phoneList: z.string().optional(),
    questionInfo: z.string().optional(),
    userAudioFile: z.instanceof(ArrayBuffer).optional(),
  });
});

/**
 * 
 * @typedef  {ScoreAPhonemeList1Request} scoreAPhonemeList1Request   
 * @property {string} - A phoneme list to score.
 * @property {string} - A unique identifier for the activity or question this user audio is answering.

Structure this field to include as much info as possible to aid in reporting and analytics.

For example: **question_info='u1/q1'** where:
 
* u1: means the question belongs to Unit 1 in your content
* q1: means this is question 1 within the unit

You can add more levels as needed.

Ensure  **no personally identifiable information** is passed in this field.
 * @property {ArrayBuffer} - file with user audio (wav, mp3, m4a, webm, ogg, aiff)
 */
export type ScoreAPhonemeList1Request = z.infer<typeof scoreAPhonemeList1Request>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreAPhonemeList1RequestResponse = z.lazy(() => {
  return z
    .object({
      phone_list: z.string().optional(),
      question_info: z.string().optional(),
      user_audio_file: z.instanceof(ArrayBuffer).optional(),
    })
    .transform((data) => ({
      phoneList: data['phone_list'],
      questionInfo: data['question_info'],
      userAudioFile: data['user_audio_file'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreAPhonemeList1RequestRequest = z.lazy(() => {
  return z
    .object({
      phoneList: z.string().nullish(),
      questionInfo: z.string().nullish(),
      userAudioFile: z.instanceof(ArrayBuffer).nullish(),
    })
    .transform((data) => ({
      phone_list: data['phoneList'],
      question_info: data['questionInfo'],
      user_audio_file: data['userAudioFile'],
    }));
});
