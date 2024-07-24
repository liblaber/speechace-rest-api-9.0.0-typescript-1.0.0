// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  transcribeScore1OkResponseSpeechScore,
  transcribeScore1OkResponseSpeechScoreRequest,
  transcribeScore1OkResponseSpeechScoreResponse,
} from './transcribe-score1-ok-response-speech-score';

/**
 * The shape of the model inside the application code - what the users use
 */
export const transcribeScore1OkResponse = z.lazy(() => {
  return z.object({
    quotaRemaining: z.number().optional(),
    speechScore: transcribeScore1OkResponseSpeechScore.optional(),
    status: z.string().optional(),
    version: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TranscribeScore1OkResponse} transcribeScore1OkResponse
 * @property {number}
 * @property {TranscribeScore1OkResponseSpeechScore}
 * @property {string}
 * @property {string}
 */
export type TranscribeScore1OkResponse = z.infer<typeof transcribeScore1OkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const transcribeScore1OkResponseResponse = z.lazy(() => {
  return z
    .object({
      quota_remaining: z.number().optional(),
      speech_score: transcribeScore1OkResponseSpeechScoreResponse.optional(),
      status: z.string().optional(),
      version: z.string().optional(),
    })
    .transform((data) => ({
      quotaRemaining: data['quota_remaining'],
      speechScore: data['speech_score'],
      status: data['status'],
      version: data['version'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const transcribeScore1OkResponseRequest = z.lazy(() => {
  return z
    .object({
      quotaRemaining: z.number().nullish(),
      speechScore: transcribeScore1OkResponseSpeechScoreRequest.nullish(),
      status: z.string().nullish(),
      version: z.string().nullish(),
    })
    .transform((data) => ({
      quota_remaining: data['quotaRemaining'],
      speech_score: data['speechScore'],
      status: data['status'],
      version: data['version'],
    }));
});