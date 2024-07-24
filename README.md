# Speechaceapi TypeScript SDK 1.0.0

Welcome to the Speechaceapi SDK documentation. This guide will help you get started with integrating and using the Speechaceapi SDK in your project.

## Versions

- API version: `1.0.0`
- SDK version: `1.0.0`

## About the API

[Speechace](https://www.speechace.com) is a Speech Recognition API for fluency and pronunciation assessment. Our patented technology is unique in its ability to score a learner's speech and pinpoint individual syllable and phoneme level mistakes in a user's pronunciation in real time.

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Services](#services)
- [Models](#models)
- [License](#license)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm`:

```bash
npm install speechaceapi
```

## Services

The SDK provides various services to interact with the API.

<details> 
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                                             |
| :------------------------------------------------------------------------------- |
| [V9Latest_Service](documentation/services/V9Latest_Service.md)                   |
| [V1V7OlderVersions_Service](documentation/services/V1V7OlderVersions_Service.md) |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details> 
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                                         | Description |
| :----------------------------------------------------------------------------------------------------------- | :---------- |
| [ScoreAWordOrSentenceRequest](documentation/models/ScoreAWordOrSentenceRequest.md)                           |             |
| [ScoreAWordOrSentenceOkResponse](documentation/models/ScoreAWordOrSentenceOkResponse.md)                     |             |
| [ScoreAPhonemeListRequest](documentation/models/ScoreAPhonemeListRequest.md)                                 |             |
| [ScoreAPhonemeListOkResponse](documentation/models/ScoreAPhonemeListOkResponse.md)                           |             |
| [ValidateTextOkResponse](documentation/models/ValidateTextOkResponse.md)                                     |             |
| [ScoreTaskRequest](documentation/models/ScoreTaskRequest.md)                                                 |             |
| [TranscribeScoreRequest](documentation/models/TranscribeScoreRequest.md)                                     |             |
| [TranscribeScoreOkResponse](documentation/models/TranscribeScoreOkResponse.md)                               |             |
| [ScoreAWordOrSentence1Request](documentation/models/ScoreAWordOrSentence1Request.md)                         |             |
| [ScoreAWordOrSentence1OkResponse](documentation/models/ScoreAWordOrSentence1OkResponse.md)                   |             |
| [ScoreAPhonemeList1Request](documentation/models/ScoreAPhonemeList1Request.md)                               |             |
| [ScoreAPhonemeList1OkResponse](documentation/models/ScoreAPhonemeList1OkResponse.md)                         |             |
| [ValidateText1OkResponse](documentation/models/ValidateText1OkResponse.md)                                   |             |
| [TranscribeScore1Request](documentation/models/TranscribeScore1Request.md)                                   |             |
| [TranscribeScore1OkResponse](documentation/models/TranscribeScore1OkResponse.md)                             |             |
| [ScoreAWordOrSentenceOkResponseTextScore](documentation/models/ScoreAWordOrSentenceOkResponseTextScore.md)   |             |
| [TextScoreCefrScore](documentation/models/TextScoreCefrScore.md)                                             |             |
| [TextScoreFluency1](documentation/models/TextScoreFluency1.md)                                               |             |
| [TextScoreIeltsScore](documentation/models/TextScoreIeltsScore.md)                                           |             |
| [TextScorePteScore](documentation/models/TextScorePteScore.md)                                               |             |
| [TextScoreSpeechaceScore](documentation/models/TextScoreSpeechaceScore.md)                                   |             |
| [TextScoreToeicScore](documentation/models/TextScoreToeicScore.md)                                           |             |
| [TextScoreWordScoreList1](documentation/models/TextScoreWordScoreList1.md)                                   |             |
| [FluencyOverallMetrics1](documentation/models/FluencyOverallMetrics1.md)                                     |             |
| [FluencySegmentMetricsList1](documentation/models/FluencySegmentMetricsList1.md)                             |             |
| [SegmentMetricsListCefrScore1](documentation/models/SegmentMetricsListCefrScore1.md)                         |             |
| [SegmentMetricsListSpeechaceScore1](documentation/models/SegmentMetricsListSpeechaceScore1.md)               |             |
| [WordScoreListPhoneScoreList1](documentation/models/WordScoreListPhoneScoreList1.md)                         |             |
| [WordScoreListSyllableScoreList1](documentation/models/WordScoreListSyllableScoreList1.md)                   |             |
| [ScoreAPhonemeListOkResponseWordScore](documentation/models/ScoreAPhonemeListOkResponseWordScore.md)         |             |
| [WordScorePhoneScoreList1](documentation/models/WordScorePhoneScoreList1.md)                                 |             |
| [TranscribeScoreOkResponseSpeechScore](documentation/models/TranscribeScoreOkResponseSpeechScore.md)         |             |
| [SpeechScoreCefrScore](documentation/models/SpeechScoreCefrScore.md)                                         |             |
| [Coherence](documentation/models/Coherence.md)                                                               |             |
| [SpeechScoreFluency1](documentation/models/SpeechScoreFluency1.md)                                           |             |
| [Grammar](documentation/models/Grammar.md)                                                                   |             |
| [SpeechScoreIeltsScore](documentation/models/SpeechScoreIeltsScore.md)                                       |             |
| [SpeechScorePteScore](documentation/models/SpeechScorePteScore.md)                                           |             |
| [SpeechScoreRelevance1](documentation/models/SpeechScoreRelevance1.md)                                       |             |
| [ScoreIssueList](documentation/models/ScoreIssueList.md)                                                     |             |
| [SpeechScoreSpeechaceScore](documentation/models/SpeechScoreSpeechaceScore.md)                               |             |
| [SpeechScoreToeicScore](documentation/models/SpeechScoreToeicScore.md)                                       |             |
| [Vocab](documentation/models/Vocab.md)                                                                       |             |
| [SpeechScoreWordScoreList1](documentation/models/SpeechScoreWordScoreList1.md)                               |             |
| [CoherenceOverallMetrics](documentation/models/CoherenceOverallMetrics.md)                                   |             |
| [AdverbDiversity](documentation/models/AdverbDiversity.md)                                                   |             |
| [BasicConnectives](documentation/models/BasicConnectives.md)                                                 |             |
| [CausalConnectives](documentation/models/CausalConnectives.md)                                               |             |
| [LexicalDensity](documentation/models/LexicalDensity.md)                                                     |             |
| [NegativeConnectives](documentation/models/NegativeConnectives.md)                                           |             |
| [PronounDensity](documentation/models/PronounDensity.md)                                                     |             |
| [VerbDiversity](documentation/models/VerbDiversity.md)                                                       |             |
| [FluencyOverallMetrics2](documentation/models/FluencyOverallMetrics2.md)                                     |             |
| [FluencySegmentMetricsList2](documentation/models/FluencySegmentMetricsList2.md)                             |             |
| [SegmentMetricsListCefrScore2](documentation/models/SegmentMetricsListCefrScore2.md)                         |             |
| [SegmentMetricsListIeltsScore](documentation/models/SegmentMetricsListIeltsScore.md)                         |             |
| [SegmentMetricsListPteScore](documentation/models/SegmentMetricsListPteScore.md)                             |             |
| [SegmentMetricsListSpeechaceScore2](documentation/models/SegmentMetricsListSpeechaceScore2.md)               |             |
| [SegmentMetricsListToeicScore](documentation/models/SegmentMetricsListToeicScore.md)                         |             |
| [Errors](documentation/models/Errors.md)                                                                     |             |
| [GrammarOverallMetrics](documentation/models/GrammarOverallMetrics.md)                                       |             |
| [GrammaticalAccuracy](documentation/models/GrammaticalAccuracy.md)                                           |             |
| [GrammaticalRange](documentation/models/GrammaticalRange.md)                                                 |             |
| [Length](documentation/models/Length.md)                                                                     |             |
| [OverallMetricsLexicalDiversity1](documentation/models/OverallMetricsLexicalDiversity1.md)                   |             |
| [AdverbModifierVariation](documentation/models/AdverbModifierVariation.md)                                   |             |
| [NounPhraseComplexity](documentation/models/NounPhraseComplexity.md)                                         |             |
| [NounPhraseVariation](documentation/models/NounPhraseVariation.md)                                           |             |
| [VerbConstructionVariation](documentation/models/VerbConstructionVariation.md)                               |             |
| [VocabOverallMetrics](documentation/models/VocabOverallMetrics.md)                                           |             |
| [AcademicLanguageUse](documentation/models/AcademicLanguageUse.md)                                           |             |
| [CollocationCommonality](documentation/models/CollocationCommonality.md)                                     |             |
| [Idiomaticity](documentation/models/Idiomaticity.md)                                                         |             |
| [OverallMetricsLexicalDiversity2](documentation/models/OverallMetricsLexicalDiversity2.md)                   |             |
| [WordSophistication](documentation/models/WordSophistication.md)                                             |             |
| [WordSpecificity](documentation/models/WordSpecificity.md)                                                   |             |
| [WordScoreListPhoneScoreList2](documentation/models/WordScoreListPhoneScoreList2.md)                         |             |
| [WordScoreListSyllableScoreList2](documentation/models/WordScoreListSyllableScoreList2.md)                   |             |
| [ScoreAWordOrSentence1OkResponseTextScore](documentation/models/ScoreAWordOrSentence1OkResponseTextScore.md) |             |
| [TextScoreFluency2](documentation/models/TextScoreFluency2.md)                                               |             |
| [WordIntonationList](documentation/models/WordIntonationList.md)                                             |             |
| [TextScoreWordScoreList2](documentation/models/TextScoreWordScoreList2.md)                                   |             |
| [FluencyOverallMetrics3](documentation/models/FluencyOverallMetrics3.md)                                     |             |
| [FluencySegmentMetricsList3](documentation/models/FluencySegmentMetricsList3.md)                             |             |
| [OverallMetricsIeltsSubscore1](documentation/models/OverallMetricsIeltsSubscore1.md)                         |             |
| [WordScoreListPhoneScoreList3](documentation/models/WordScoreListPhoneScoreList3.md)                         |             |
| [WordScoreListSyllableScoreList3](documentation/models/WordScoreListSyllableScoreList3.md)                   |             |
| [ScoreAPhonemeList1OkResponseWordScore](documentation/models/ScoreAPhonemeList1OkResponseWordScore.md)       |             |
| [WordScorePhoneScoreList2](documentation/models/WordScorePhoneScoreList2.md)                                 |             |
| [TranscribeScore1OkResponseSpeechScore](documentation/models/TranscribeScore1OkResponseSpeechScore.md)       |             |
| [SpeechScoreFluency2](documentation/models/SpeechScoreFluency2.md)                                           |             |
| [SpeechScoreRelevance2](documentation/models/SpeechScoreRelevance2.md)                                       |             |
| [SpeechScoreWordScoreList2](documentation/models/SpeechScoreWordScoreList2.md)                               |             |
| [FluencyOverallMetrics4](documentation/models/FluencyOverallMetrics4.md)                                     |             |
| [FluencySegmentMetricsList4](documentation/models/FluencySegmentMetricsList4.md)                             |             |
| [OverallMetricsIeltsSubscore2](documentation/models/OverallMetricsIeltsSubscore2.md)                         |             |
| [SegmentMetricsListIeltsSubscore](documentation/models/SegmentMetricsListIeltsSubscore.md)                   |             |
| [WordScoreListPhoneScoreList4](documentation/models/WordScoreListPhoneScoreList4.md)                         |             |
| [WordScoreListSyllableScoreList4](documentation/models/WordScoreListSyllableScoreList4.md)                   |             |

</details>

## License

This SDK is licensed under the MIT License.

See the [LICENSE](LICENSE) file for more details.

<!-- This file was generated by liblab | https://liblab.com/ -->
