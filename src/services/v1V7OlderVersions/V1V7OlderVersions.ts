// This file was generated by liblab | https://liblab.com/

import BaseService from '../../BaseService';

import { ScoreVocabularyGrammarResponse } from './models/ScoreVocabularyGrammarResponse';
import { ScoreVocabularyGrammarRequest } from './models/ScoreVocabularyGrammarRequest';
import { ScoreAPhonemeList1Response } from './models/ScoreAPhonemeList1Response';
import { ScoreAPhonemeList1Request } from './models/ScoreAPhonemeList1Request';
import { ValidateText1Response } from './models/ValidateText1Response';
import { ValidateText1Request } from './models/ValidateText1Request';
import { AssessRelevance1Response } from './models/AssessRelevance1Response';
import { AssessRelevance1Request } from './models/AssessRelevance1Request';

import { serializeQuery } from '../../http/QuerySerializer';

export class V1V7OlderVersionsService extends BaseService {
  /**
   * @summary Score Vocabulary & Grammar
   * @description **In this example we score the IELTS Speaking Fluency and obtain the IELTS Vocabulary and Grammar subscore of a scripted speech answer.**

Scoring Vocabulary & Grammar is typically done in Spontaneous speaking Transcribe & Score requests. In this example we demonstrate how it can be done in a scripted speech request as well.

In this request in addition to fluency and pronunciation scores, the fluency node in the JSON result includes the following scores:

| Field | Description |
| --- | --- |
| ielts_estimate | an estimate of the IELTS Speaking Fluency of the speaker. |
| pte_estimate | an estimate of the PTE Read-Aloud Speaking Fluency of the speaker. |
| ielts_subscore.vocab | an estimate of the Vocabulary IELTS band of the text submitted. |
| ielts_subscore.grammar | an estimate of the Grammar IELTS band of the text submitted. |
| segment_metrics_list\[\] | A list of segments within the overall text/audio with the fluency and ielt_subscore.vocab scores for each segment. |

   * @param optionalParams - Optional parameters
   * @param optionalParams.key - API key issued by Speechace.
   * @param optionalParams.userId - A unique anonymized identifier for the end-user who spoke the audio. 

Structure this field to include as much info as possible to aid in reporting and analytics.

For example: **user_id=XYZ-ABC-99001** where:
 
* XYZ is an id for your Product or App
* ABC is an id for the customer/site/account
* 99001 is an id for the end-user

Ensure user_id is unique and anonymized containing **no personally identifiable information**.
   * @param optionalParams.dialect - The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English).

en-gb requires setting v0.1 in url path. i.e. `https://api.speechace.co/api/scoring/text/v0.1/json?`
   * @returns {Promise<ScoreVocabularyGrammarResponse>} - The promise with the result
   */
  async scoreVocabularyGrammar(
    input: ScoreVocabularyGrammarRequest,
    optionalParams: { key?: string; userId?: string; dialect?: string } = {},
  ): Promise<ScoreVocabularyGrammarResponse> {
    const { key, userId, dialect } = optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-Type': 'multipart/form-data' };
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    if (userId) {
      queryParams.push(serializeQuery('form', true, 'user_id', userId));
    }
    if (dialect) {
      queryParams.push(serializeQuery('form', true, 'dialect', dialect));
    }
    const urlEndpoint = '/api/scoring/text/v0.5/json';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const formInput = V1V7OlderVersionsService.formData(input);
    const response: any = await this.httpClient.post(
      finalUrl,
      formInput,
      {
        ...headers,
      },
      true,
    );
    const responseModel = response.data as ScoreVocabularyGrammarResponse;
    return responseModel;
  }

  /**
   * @summary Score a Phoneme list
   * @description **In this example we score the term:**

"gotcha" /g/ao1/ch/ah0

Since **gotcha** is an american vernacular and not a valid dictionary word we use the phoneme list API to score it. 

The phoneme list uses a different url endpoint and expects the list of phonemes in [Arpabet notation](https://en.wikipedia.org/wiki/Arpabet).

Note that we specify phoneme stress as 0,1,2 per Arpabet notation. This API allows you to score any word or sentence that can phonetically expressed in Arpabet.

**Copy the example code and be sure to:**

1. Add your Speechace API key
2. Add a valid file path in the **user_audio_file** parameter. *For example in curl the you would add something like @/tmp/gotcha_16k.wav*

You can download a sample *gotcha_16k.wav* file [here](https://s3-us-west-2.amazonaws.com/speechace-public/sample-audio/gotcha_16k.wav).

   * @param optionalParams - Optional parameters
   * @param optionalParams.key - API key issued by Speechace.
   * @param optionalParams.userId - A unique anonymized identifier for the end-user who spoke the audio. 

Structure this field to include as much info as possible to aid in reporting and analytics.

For example: **user_id=XYZ-ABC-99001** where:
 
* XYZ is an id for your Product or App
* ABC is an id for the customer/site/account
* 99001 is an id for the end-user

Ensure user_id is unique and anonymized containing **no personally identifiable information**.
   * @param optionalParams.dialect - The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English).

en-gb requires setting v0.1 in url path. i.e. `https://api.speechace.co/api/scoring/text/v0.1/json?`
   * @returns {Promise<ScoreAPhonemeList1Response>} - The promise with the result
   */
  async scoreAPhonemeList1(
    input: ScoreAPhonemeList1Request,
    optionalParams: { key?: string; userId?: string; dialect?: string } = {},
  ): Promise<ScoreAPhonemeList1Response> {
    const { key, userId, dialect } = optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-Type': 'multipart/form-data' };
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    if (userId) {
      queryParams.push(serializeQuery('form', true, 'user_id', userId));
    }
    if (dialect) {
      queryParams.push(serializeQuery('form', true, 'dialect', dialect));
    }
    const urlEndpoint = '/api/scoring/phone_list/v0.5/json';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const formInput = V1V7OlderVersionsService.formData(input);
    const response: any = await this.httpClient.post(
      finalUrl,
      formInput,
      {
        ...headers,
      },
      true,
    );
    const responseModel = response.data as ScoreAPhonemeList1Response;
    return responseModel;
  }

  /**
   * @summary Validate Text
   * @description In this example we validate whether all the words in the text exist in the Speechace lexicon. This API allows you to quickly check whether authored content will be able to be scored with Speechace. This is useful to use at the time of text authoring to avoid errors later on.

Out of lexicon terms can be reported to support@speechace.com for inclusion. Or you can see the phoneme list API as an alternative.

**Copy the example code and be sure to:**

1. Add your Speechace API key
2. Replace text with the text you wish to validate.
3. Set the dialect parameter to the dialect you will use when scoring. If you are not sure which dialect will be used then validate once using each available dialect.

   * @param optionalParams - Optional parameters
   * @param optionalParams.key - API key issued by Speechace.
   * @param optionalParams.text - A sentence or sequence of words to validate.
   * @param optionalParams.dialect - The dialect to use for validation. Default is "en-us". Supported values are "en-us" (US English) and "en-gb" (UK English).
   * @returns {Promise<ValidateText1Response>} - The promise with the result
   */
  async validateText1(
    input: ValidateText1Request,
    optionalParams: { key?: string; text?: string; dialect?: string } = {},
  ): Promise<ValidateText1Response> {
    const { key, text, dialect } = optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-Type': 'multipart/form-data' };
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    if (text) {
      queryParams.push(serializeQuery('form', true, 'text', text));
    }
    if (dialect) {
      queryParams.push(serializeQuery('form', true, 'dialect', dialect));
    }
    const urlEndpoint = '/api/validating/text/v0.5/json';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const formInput = V1V7OlderVersionsService.formData(input);
    const response: any = await this.httpClient.post(
      finalUrl,
      formInput,
      {
        ...headers,
      },
      true,
    );
    const responseModel = response.data as ValidateText1Response;
    return responseModel;
  }

  /**
   * @summary Assess Relevance
   * @description **In this example we transcribe a free speaking audio and evaluate the relevance of the response given a particular question prompt.**

In addition we also score Fluency, Pronunciation, Grammar, Vocabulary, and Coherence on an IELTS Speaking scale.

The API accepts the user audio and a relevance context as inputs. The relevance context is typically a question prompt provided to the user.

In this request JSON result includes the following fields:

| Field | Description |
| --- | --- |
| transcript | The speech-to-text transcript of what the user has said. |
| relevance.class | Boolean. Whether the user response is relevant to the relevance context passed to the API. |
| ielts_estimate | an estimate of the IELTS Speaking Fluency of the speaker |
| ielts_subscore.vocab | an estimate of the IELTS Vocabulary level of the speaker's response |
| ielts_subscore.grammar | an estimate of the IELTS Grammar level of the speaker's response |
| ielts_subscore.coherence | an estimate of the IELTS Coherence level of the speaker's response |
| quality_score | An overall pronunciation score for the the utterance on a scale of 0 to 100. See [guide](https://docs.speechace.com/#b41375b3-a9e6-48f0-aa92-a9a1a0aed116) for detail on score rubric. |
| duration | total length of speech in seconds |
| articulation | total length of articulation (speech minus pauses, hesitations and non-speech events such as laughter). Excludes beginning silence on very first segment and ending silence on very last segment. |
| speech_rate | speaking rate in syllables per second. |
| articulation_rate | articulation rate in syllables per second. |
| syllable_count | Count of syllables in this segmtent |
| word_count | Count of words in this segment |
| correct_syllable_count | Count of correctly spoken syllables in this segment |
| correct_word_count | Count of correctly spoken words in this segment |
| syllable_correct_per_minute | correct_syllable_count / duration in mins |
| word_correct_per_minute | correct_word_count / duration in mins |
| all_pause_count | count of all pauses (filled and unfilled) which are longer than the minimum pause threshold |
| all_pause_duration | total duration of all pauses (filled and unfilled) in seconds |
| all_pause_list\[\] | a list of all the pauses with the begin/end markers for each in extents of 10 msecs |
| mean_length_run | mean length of run in syllables between pauses |
| max_length_run | max length of run in syllables between pauses |
| segment_metrics_list\[\] | A list of segments within the overall text/audio with the IELTS scores, subscrores, and fluency metrics for each segment. |
| syllable_score_list\[\] | a list of syllables in each word in the word_score_list\[\], each with it's own quality_score |
| word_score_list\[\] | a list of words in the utterance, each with it's own quality_score |
| syllable_score_list\[\] | a list of syllables in each word in the word_score_list\[\], each with it's own quality_score |
| phone_score_list\[\] | a list of phonemes in each word in the word_score_list\[\], each with it's own quality_score |
| extent\[\] | start and end boundaries of a syllable or phoneme in units of 10 msec. |

   * @param optionalParams - Optional parameters
   * @param optionalParams.key - API key issued by Speechace.
   * @param optionalParams.dialect - The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English).
   * @param optionalParams.userId - A unique anonymized identifier for the end-user who spoke the audio. 
Structure this field to include as much info as possible to aid in reporting and analytics.
For example: **user_id=XYZ-ABC-99001** where:
 
* XYZ is an id for your Product or App
* ABC is an id for the customer/site/account
* 99001 is an id for the end-user
Ensure user_id is unique and anonymized containing **no personally identifiable information**.
   * @returns {Promise<AssessRelevance1Response>} - The promise with the result
   */
  async assessRelevance1(
    input: AssessRelevance1Request,
    optionalParams: { key?: string; dialect?: string; userId?: string } = {},
  ): Promise<AssessRelevance1Response> {
    const { key, dialect, userId } = optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-Type': 'multipart/form-data' };
    if (key) {
      queryParams.push(serializeQuery('form', true, 'key', key));
    }
    if (dialect) {
      queryParams.push(serializeQuery('form', true, 'dialect', dialect));
    }
    if (userId) {
      queryParams.push(serializeQuery('form', true, 'user_id', userId));
    }
    const urlEndpoint = '/api/scoring/speech/v0.5/json';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const formInput = V1V7OlderVersionsService.formData(input);
    const response: any = await this.httpClient.post(
      finalUrl,
      formInput,
      {
        ...headers,
      },
      true,
    );
    const responseModel = response.data as AssessRelevance1Response;
    return responseModel;
  }
}
