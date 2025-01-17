// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  segmentMetricsListCefrScore1,
  segmentMetricsListCefrScore1Request,
  segmentMetricsListCefrScore1Response,
} from './segment-metrics-list-cefr-score-1';
import {
  segmentMetricsListSpeechaceScore1,
  segmentMetricsListSpeechaceScore1Request,
  segmentMetricsListSpeechaceScore1Response,
} from './segment-metrics-list-speechace-score-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const fluencySegmentMetricsList1 = z.lazy(() => {
  return z.object({
    allPauseCount: z.number().optional(),
    allPauseDuration: z.number().optional(),
    allPauseList: z.array(z.array(z.number())).optional(),
    articulationLength: z.number().optional(),
    articulationRate: z.number().optional(),
    cefrScore: segmentMetricsListCefrScore1.optional(),
    correctSyllableCount: z.number().optional(),
    correctWordCount: z.number().optional(),
    duration: z.number().optional(),
    maxLengthRun: z.number().optional(),
    meanLengthRun: z.number().optional(),
    segment: z.array(z.number()).optional(),
    speechRate: z.number().optional(),
    speechaceScore: segmentMetricsListSpeechaceScore1.optional(),
    syllableCorrectPerMinute: z.number().optional(),
    syllableCount: z.number().optional(),
    wordCorrectPerMinute: z.number().optional(),
    wordCount: z.number().optional(),
  });
});

/**
 *
 * @typedef  {FluencySegmentMetricsList1} fluencySegmentMetricsList1
 * @property {number}
 * @property {number}
 * @property {number[][]}
 * @property {number}
 * @property {number}
 * @property {SegmentMetricsListCefrScore1}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number[]}
 * @property {number}
 * @property {SegmentMetricsListSpeechaceScore1}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type FluencySegmentMetricsList1 = z.infer<typeof fluencySegmentMetricsList1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const fluencySegmentMetricsList1Response = z.lazy(() => {
  return z
    .object({
      all_pause_count: z.number().optional(),
      all_pause_duration: z.number().optional(),
      all_pause_list: z.array(z.array(z.number())).optional(),
      articulation_length: z.number().optional(),
      articulation_rate: z.number().optional(),
      cefr_score: segmentMetricsListCefrScore1Response.optional(),
      correct_syllable_count: z.number().optional(),
      correct_word_count: z.number().optional(),
      duration: z.number().optional(),
      max_length_run: z.number().optional(),
      mean_length_run: z.number().optional(),
      segment: z.array(z.number()).optional(),
      speech_rate: z.number().optional(),
      speechace_score: segmentMetricsListSpeechaceScore1Response.optional(),
      syllable_correct_per_minute: z.number().optional(),
      syllable_count: z.number().optional(),
      word_correct_per_minute: z.number().optional(),
      word_count: z.number().optional(),
    })
    .transform((data) => ({
      allPauseCount: data['all_pause_count'],
      allPauseDuration: data['all_pause_duration'],
      allPauseList: data['all_pause_list'],
      articulationLength: data['articulation_length'],
      articulationRate: data['articulation_rate'],
      cefrScore: data['cefr_score'],
      correctSyllableCount: data['correct_syllable_count'],
      correctWordCount: data['correct_word_count'],
      duration: data['duration'],
      maxLengthRun: data['max_length_run'],
      meanLengthRun: data['mean_length_run'],
      segment: data['segment'],
      speechRate: data['speech_rate'],
      speechaceScore: data['speechace_score'],
      syllableCorrectPerMinute: data['syllable_correct_per_minute'],
      syllableCount: data['syllable_count'],
      wordCorrectPerMinute: data['word_correct_per_minute'],
      wordCount: data['word_count'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const fluencySegmentMetricsList1Request = z.lazy(() => {
  return z
    .object({
      allPauseCount: z.number().nullish(),
      allPauseDuration: z.number().nullish(),
      allPauseList: z.array(z.array(z.number())).nullish(),
      articulationLength: z.number().nullish(),
      articulationRate: z.number().nullish(),
      cefrScore: segmentMetricsListCefrScore1Request.nullish(),
      correctSyllableCount: z.number().nullish(),
      correctWordCount: z.number().nullish(),
      duration: z.number().nullish(),
      maxLengthRun: z.number().nullish(),
      meanLengthRun: z.number().nullish(),
      segment: z.array(z.number()).nullish(),
      speechRate: z.number().nullish(),
      speechaceScore: segmentMetricsListSpeechaceScore1Request.nullish(),
      syllableCorrectPerMinute: z.number().nullish(),
      syllableCount: z.number().nullish(),
      wordCorrectPerMinute: z.number().nullish(),
      wordCount: z.number().nullish(),
    })
    .transform((data) => ({
      all_pause_count: data['allPauseCount'],
      all_pause_duration: data['allPauseDuration'],
      all_pause_list: data['allPauseList'],
      articulation_length: data['articulationLength'],
      articulation_rate: data['articulationRate'],
      cefr_score: data['cefrScore'],
      correct_syllable_count: data['correctSyllableCount'],
      correct_word_count: data['correctWordCount'],
      duration: data['duration'],
      max_length_run: data['maxLengthRun'],
      mean_length_run: data['meanLengthRun'],
      segment: data['segment'],
      speech_rate: data['speechRate'],
      speechace_score: data['speechaceScore'],
      syllable_correct_per_minute: data['syllableCorrectPerMinute'],
      syllable_count: data['syllableCount'],
      word_correct_per_minute: data['wordCorrectPerMinute'],
      word_count: data['wordCount'],
    }));
});
