// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { textScoreFluency2, textScoreFluency2Request, textScoreFluency2Response } from './text-score-fluency-2';
import { wordIntonationList, wordIntonationListRequest, wordIntonationListResponse } from './word-intonation-list';
import {
  textScoreWordScoreList2,
  textScoreWordScoreList2Request,
  textScoreWordScoreList2Response,
} from './text-score-word-score-list-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scoreAWordOrSentence1OkResponseTextScore = z.lazy(() => {
  return z.object({
    fidelityClass: z.string().optional(),
    fluency: textScoreFluency2.optional(),
    qualityScore: z.number().optional(),
    text: z.string().optional(),
    wordIntonationList: z.array(wordIntonationList).optional(),
    wordScoreList: z.array(textScoreWordScoreList2).optional(),
  });
});

/**
 *
 * @typedef  {ScoreAWordOrSentence1OkResponseTextScore} scoreAWordOrSentence1OkResponseTextScore
 * @property {string}
 * @property {TextScoreFluency2}
 * @property {number}
 * @property {string}
 * @property {WordIntonationList[]}
 * @property {TextScoreWordScoreList2[]}
 */
export type ScoreAWordOrSentence1OkResponseTextScore = z.infer<typeof scoreAWordOrSentence1OkResponseTextScore>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreAWordOrSentence1OkResponseTextScoreResponse = z.lazy(() => {
  return z
    .object({
      fidelity_class: z.string().optional(),
      fluency: textScoreFluency2Response.optional(),
      quality_score: z.number().optional(),
      text: z.string().optional(),
      word_intonation_list: z.array(wordIntonationListResponse).optional(),
      word_score_list: z.array(textScoreWordScoreList2Response).optional(),
    })
    .transform((data) => ({
      fidelityClass: data['fidelity_class'],
      fluency: data['fluency'],
      qualityScore: data['quality_score'],
      text: data['text'],
      wordIntonationList: data['word_intonation_list'],
      wordScoreList: data['word_score_list'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scoreAWordOrSentence1OkResponseTextScoreRequest = z.lazy(() => {
  return z
    .object({
      fidelityClass: z.string().nullish(),
      fluency: textScoreFluency2Request.nullish(),
      qualityScore: z.number().nullish(),
      text: z.string().nullish(),
      wordIntonationList: z.array(wordIntonationListRequest).nullish(),
      wordScoreList: z.array(textScoreWordScoreList2Request).nullish(),
    })
    .transform((data) => ({
      fidelity_class: data['fidelityClass'],
      fluency: data['fluency'],
      quality_score: data['qualityScore'],
      text: data['text'],
      word_intonation_list: data['wordIntonationList'],
      word_score_list: data['wordScoreList'],
    }));
});