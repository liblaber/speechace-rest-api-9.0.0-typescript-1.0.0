// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const transcribeScoreRequest = z.lazy(() => {
  return z.object({
    includeIeltsFeedback: z.string().optional(),
    questionInfo: z.string().optional(),
    userAudioFile: z.instanceof(ArrayBuffer).optional(),
  });
});

/**
 *
 * @typedef  {TranscribeScoreRequest} transcribeScoreRequest
 * @property {string} - include feedback metrics for Grammar, Vocab, Coherence.
 * @property {string} - A unique identifier for the activity or question this user audio is answering.
 * @property {ArrayBuffer} - file with user audio (wav, mp3, m4a, webm, ogg, aiff)
 */
export type TranscribeScoreRequest = z.infer<typeof transcribeScoreRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const transcribeScoreRequestResponse = z.lazy(() => {
  return z
    .object({
      include_ielts_feedback: z.string().optional(),
      question_info: z.string().optional(),
      user_audio_file: z.instanceof(ArrayBuffer).optional(),
    })
    .transform((data) => ({
      includeIeltsFeedback: data['include_ielts_feedback'],
      questionInfo: data['question_info'],
      userAudioFile: data['user_audio_file'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const transcribeScoreRequestRequest = z.lazy(() => {
  return z
    .object({
      includeIeltsFeedback: z.string().nullish(),
      questionInfo: z.string().nullish(),
      userAudioFile: z.instanceof(ArrayBuffer).nullish(),
    })
    .transform((data) => ({
      include_ielts_feedback: data['includeIeltsFeedback'],
      question_info: data['questionInfo'],
      user_audio_file: data['userAudioFile'],
    }));
});
