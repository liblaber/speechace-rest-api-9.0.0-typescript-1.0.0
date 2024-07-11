# Speechaceapi Services

A list of all services and services methods.

- Services

  - [V9Latest](#v9latest)

  - [V1V7OlderVersions](#v1v7olderversions)

- [All Methods](#all-methods)

## V9Latest

| Method                                                                              | Description                                    |
| :---------------------------------------------------------------------------------- | :--------------------------------------------- |
| [scoreFluencySpanish](#scorefluencyspanish)                                         | Score Fluency - Spanish                        |
| [scoreAPhonemeList](#scoreaphonemelist)                                             | Score a Phoneme list                           |
| [validateText](#validatetext)                                                       | Validate Text                                  |
| [pteAnswerQuestion](#pteanswerquestion)                                             | PTE Answer Question                            |
| [getGrammarVocabCoherenceFeedbackMetrics](#getgrammarvocabcoherencefeedbackmetrics) | Get Grammar, Vocab, Coherence feedback metrics |

## V1V7OlderVersions

| Method                                            | Description                |
| :------------------------------------------------ | :------------------------- |
| [scoreVocabularyGrammar](#scorevocabularygrammar) | Score Vocabulary & Grammar |
| [scoreAPhonemeList1](#scoreaphonemelist1)         | Score a Phoneme list       |
| [validateText1](#validatetext1)                   | Validate Text              |
| [assessRelevance1](#assessrelevance1)             | Assess Relevance           |

## All Methods

### **scoreFluencySpanish**

Score Fluency - Spanish

- HTTP Method: POST
- Endpoint: /api/scoring/text/v9/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                      |
| :------ | :----- | :------------------------------------------------------------------------------- |
| key     | string | API key issued by Speechace.                                                     |
| dialect | string | The dialect to use for scoring. Supported values are: en-us, en-gb, fr-fr, fr-ca |

**Return Type**

ScoreFluencySpanishResponse

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v9Latest.scoreFluencySpanish(input, {
    key: '{{speechace_prokey}}',
    dialect: 'es-es',
  });
  console.log(result);
})();

```

### **scoreAPhonemeList**

Score a Phoneme list

- HTTP Method: POST
- Endpoint: /api/scoring/phone_list/v9/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                                         |
| :------ | :----- | :-------------------------------------------------------------------------------------------------- |
| key     | string | API key issued by Speechace.                                                                        |
| userId  | string | Optional: A unique anonymized identifier for the end-user who spoke the audio.                      |
| dialect | string | The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English). |

**Return Type**

ScoreAPhonemeListResponse

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v9Latest.scoreAPhonemeList(input, {
    key: '{{speechacekey}}',
    userId: 'XYZ-ABC-99001',
    dialect: 'en-us',
  });
  console.log(result);
})();

```

### **validateText**

Validate Text

- HTTP Method: POST
- Endpoint: /api/validating/text/v9/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                                                                |
| :------ | :----- | :------------------------------------------------------------------------------------------------------------------------- |
| key     | string | API key issued by Speechace.                                                                                               |
| text    | string | A sentence or sequence of words to validate.                                                                               |
| dialect | string | The dialect to use for validation. Default is "en-us". Supported values are "en-us" (US English) and "en-gb" (UK English). |

**Return Type**

ValidateTextResponse

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v9Latest.validateText(input, {
    key: '{{speechacekey}}',
    text: '"Validate these words existeee."',
    dialect: 'en-us',
  });
  console.log(result);
})();

```

### **pteAnswerQuestion**

PTE Answer Question

- HTTP Method: POST
- Endpoint: /api/scoring/task/v9/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name     | Type   | Description                                                                                     |
| :------- | :----- | :---------------------------------------------------------------------------------------------- |
| key      | string | API key issued by Speechace                                                                     |
| taskType | string | The task_type to score. Supported types are: describe-image, retell-lecture, answer-question.   |
| dialect  | string | The dialect to use for scoring. Supported values are: en-us, en-gb, fr-fr, fr-ca, es-es, es-mx. |

**Return Type**

PteAnswerQuestionResponse

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v9Latest.pteAnswerQuestion(input, {
    key: '{{speechace_premiumkey}}',
    taskType: 'answer-question',
    dialect: 'en-us',
  });
  console.log(result);
})();

```

### **getGrammarVocabCoherenceFeedbackMetrics**

Get Grammar, Vocab, Coherence feedback metrics

- HTTP Method: POST
- Endpoint: /api/scoring/speech/v9/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                                                   |
| :------ | :----- | :------------------------------------------------------------------------------------------------------------ |
| key     | string | API key issued by Speechace.                                                                                  |
| userId  | string | A unique anonymized identifier for the end-user who spoke the audio.                                          |
| dialect | string | Optional: The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English). |

**Return Type**

GetGrammarVocabCoherenceFeedbackMetricsResponse

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v9Latest.getGrammarVocabCoherenceFeedbackMetrics(input, {
    key: '{{speechace_premiumkey}}',
    userId: 'XYZ-ABC-99001',
    dialect: 'en-us',
  });
  console.log(result);
})();

```

### **scoreVocabularyGrammar**

Score Vocabulary & Grammar

- HTTP Method: POST
- Endpoint: /api/scoring/text/v0.5/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key     | string | API key issued by Speechace.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| userId  | string | A unique anonymized identifier for the end-user who spoke the audio. <br><br>Structure this field to include as much info as possible to aid in reporting and analytics.<br><br>For example: **user_id=XYZ-ABC-99001** where:<br> <br>_ XYZ is an id for your Product or App<br>_ ABC is an id for the customer/site/account<br>\* 99001 is an id for the end-user<br><br>Ensure user_id is unique and anonymized containing **no personally identifiable information**. |
| dialect | string | The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English).<br><br>en-gb requires setting v0.1 in url path. i.e. `https://api.speechace.co/api/scoring/text/v0.1/json?`                                                                                                                                                                                                                                                          |

**Return Type**

ScoreVocabularyGrammarResponse

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v1V7OlderVersions.scoreVocabularyGrammar(input, {
    key: '{{speechace_premiumkey}}',
    userId: 'XYZ-ABC-99001',
    dialect: 'en-us',
  });
  console.log(result);
})();

```

### **scoreAPhonemeList1**

Score a Phoneme list

- HTTP Method: POST
- Endpoint: /api/scoring/phone_list/v0.5/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key     | string | API key issued by Speechace.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| userId  | string | A unique anonymized identifier for the end-user who spoke the audio. <br><br>Structure this field to include as much info as possible to aid in reporting and analytics.<br><br>For example: **user_id=XYZ-ABC-99001** where:<br> <br>_ XYZ is an id for your Product or App<br>_ ABC is an id for the customer/site/account<br>\* 99001 is an id for the end-user<br><br>Ensure user_id is unique and anonymized containing **no personally identifiable information**. |
| dialect | string | The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English).<br><br>en-gb requires setting v0.1 in url path. i.e. `https://api.speechace.co/api/scoring/text/v0.1/json?`                                                                                                                                                                                                                                                          |

**Return Type**

ScoreAPhonemeList1Response

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v1V7OlderVersions.scoreAPhonemeList1(input, {
    key: '{{speechacekey}}',
    userId: 'XYZ-ABC-99001',
    dialect: 'en-us',
  });
  console.log(result);
})();

```

### **validateText1**

Validate Text

- HTTP Method: POST
- Endpoint: /api/validating/text/v0.5/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                                                                |
| :------ | :----- | :------------------------------------------------------------------------------------------------------------------------- |
| key     | string | API key issued by Speechace.                                                                                               |
| text    | string | A sentence or sequence of words to validate.                                                                               |
| dialect | string | The dialect to use for validation. Default is "en-us". Supported values are "en-us" (US English) and "en-gb" (UK English). |

**Return Type**

ValidateText1Response

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v1V7OlderVersions.validateText1(input, {
    key: '{{speechacekey}}',
    text: '"Validate these words existeee."',
    dialect: 'en-us',
  });
  console.log(result);
})();

```

### **assessRelevance1**

Assess Relevance

- HTTP Method: POST
- Endpoint: /api/scoring/speech/v0.5/json

**Required Parameters**

| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key     | string | API key issued by Speechace.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| dialect | string | The dialect to use for scoring. Supported values are "en-us" (US English) and "en-gb" (UK English).                                                                                                                                                                                                                                                                                                                                                          |
| userId  | string | A unique anonymized identifier for the end-user who spoke the audio. <br>Structure this field to include as much info as possible to aid in reporting and analytics.<br>For example: **user_id=XYZ-ABC-99001** where:<br> <br>_ XYZ is an id for your Product or App<br>_ ABC is an id for the customer/site/account<br>\* 99001 is an id for the end-user<br>Ensure user_id is unique and anonymized containing **no personally identifiable information**. |

**Return Type**

AssessRelevance1Response

**Example Usage Code Snippet**

```Typescript
import { Speechaceapi } from 'speechaceapi';

const sdk = new Speechaceapi();

(async () => {
  const input = {};
  const result = await sdk.v1V7OlderVersions.assessRelevance1(input, {
    key: '{{speechace_premiumkey}}',
    dialect: 'en-us',
    userId: 'XYZ-ABC-99001',
  });
  console.log(result);
})();

```

<!-- This file was generated by liblab | https://liblab.com/ -->
