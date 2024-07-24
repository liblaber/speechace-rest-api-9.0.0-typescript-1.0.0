# TranscribeScoreOkResponse

**Properties**

| Name           | Type                                 | Required | Description |
| :------------- | :----------------------------------- | :------- | :---------- |
| quotaRemaining | number                               | ❌       |             |
| speechScore    | TranscribeScoreOkResponseSpeechScore | ❌       |             |
| status         | string                               | ❌       |             |
| version        | string                               | ❌       |             |

# TranscribeScoreOkResponseSpeechScore

**Properties**

| Name           | Type                        | Required | Description |
| :------------- | :-------------------------- | :------- | :---------- |
| asrVersion     | string                      | ❌       |             |
| cefrScore      | SpeechScoreCefrScore        | ❌       |             |
| coherence      | Coherence                   | ❌       |             |
| fluency        | SpeechScoreFluency1         | ❌       |             |
| grammar        | Grammar                     | ❌       |             |
| ieltsScore     | SpeechScoreIeltsScore       | ❌       |             |
| pteScore       | SpeechScorePteScore         | ❌       |             |
| relevance      | SpeechScoreRelevance1       | ❌       |             |
| scoreIssueList | ScoreIssueList[]            | ❌       |             |
| speechaceScore | SpeechScoreSpeechaceScore   | ❌       |             |
| toeicScore     | SpeechScoreToeicScore       | ❌       |             |
| transcript     | string                      | ❌       |             |
| vocab          | Vocab                       | ❌       |             |
| wordScoreList  | SpeechScoreWordScoreList1[] | ❌       |             |

# SpeechScoreCefrScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | string | ❌       |             |
| fluency       | string | ❌       |             |
| grammar       | string | ❌       |             |
| overall       | string | ❌       |             |
| pronunciation | string | ❌       |             |
| vocab         | string | ❌       |             |

# Coherence

**Properties**

| Name           | Type                    | Required | Description |
| :------------- | :---------------------- | :------- | :---------- |
| overallMetrics | CoherenceOverallMetrics | ❌       |             |

# CoherenceOverallMetrics

**Properties**

| Name                | Type                | Required | Description |
| :------------------ | :------------------ | :------- | :---------- |
| adverbDiversity     | AdverbDiversity     | ❌       |             |
| basicConnectives    | BasicConnectives    | ❌       |             |
| causalConnectives   | CausalConnectives   | ❌       |             |
| lexicalDensity      | LexicalDensity      | ❌       |             |
| negativeConnectives | NegativeConnectives | ❌       |             |
| pronounDensity      | PronounDensity      | ❌       |             |
| verbDiversity       | VerbDiversity       | ❌       |             |

# AdverbDiversity

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# BasicConnectives

**Properties**

| Name     | Type     | Required | Description |
| :------- | :------- | :------- | :---------- |
| examples | string[] | ❌       |             |
| level    | string   | ❌       |             |
| score    | number   | ❌       |             |

# CausalConnectives

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# LexicalDensity

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# NegativeConnectives

**Properties**

| Name     | Type     | Required | Description |
| :------- | :------- | :------- | :---------- |
| examples | string[] | ❌       |             |
| level    | string   | ❌       |             |
| message  | string   | ❌       |             |
| score    | number   | ❌       |             |

# PronounDensity

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# VerbDiversity

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# SpeechScoreFluency1

**Properties**

| Name                 | Type                         | Required | Description |
| :------------------- | :--------------------------- | :------- | :---------- |
| fluencyVersion       | string                       | ❌       |             |
| ieltsSubscoreVersion | string                       | ❌       |             |
| overallMetrics       | FluencyOverallMetrics2       | ❌       |             |
| segmentMetricsList   | FluencySegmentMetricsList2[] | ❌       |             |

# FluencyOverallMetrics2

**Properties**

| Name                     | Type       | Required | Description |
| :----------------------- | :--------- | :------- | :---------- |
| allPauseCount            | number     | ❌       |             |
| allPauseDuration         | number     | ❌       |             |
| allPauseList             | number[][] | ❌       |             |
| articulationLength       | number     | ❌       |             |
| articulationRate         | number     | ❌       |             |
| correctSyllableCount     | number     | ❌       |             |
| correctWordCount         | number     | ❌       |             |
| duration                 | number     | ❌       |             |
| fluencyScore             | number     | ❌       |             |
| maxLengthRun             | number     | ❌       |             |
| meanLengthRun            | number     | ❌       |             |
| segment                  | number[]   | ❌       |             |
| speechRate               | number     | ❌       |             |
| syllableCorrectPerMinute | number     | ❌       |             |
| syllableCount            | number     | ❌       |             |
| wordCorrectPerMinute     | number     | ❌       |             |
| wordCount                | number     | ❌       |             |

# FluencySegmentMetricsList2

**Properties**

| Name                     | Type                              | Required | Description |
| :----------------------- | :-------------------------------- | :------- | :---------- |
| allPauseCount            | number                            | ❌       |             |
| allPauseDuration         | number                            | ❌       |             |
| allPauseList             | number[][]                        | ❌       |             |
| articulationLength       | number                            | ❌       |             |
| articulationRate         | number                            | ❌       |             |
| cefrScore                | SegmentMetricsListCefrScore2      | ❌       |             |
| correctSyllableCount     | number                            | ❌       |             |
| correctWordCount         | number                            | ❌       |             |
| duration                 | number                            | ❌       |             |
| ieltsScore               | SegmentMetricsListIeltsScore      | ❌       |             |
| maxLengthRun             | number                            | ❌       |             |
| meanLengthRun            | number                            | ❌       |             |
| pteScore                 | SegmentMetricsListPteScore        | ❌       |             |
| segment                  | number[]                          | ❌       |             |
| speechRate               | number                            | ❌       |             |
| speechaceScore           | SegmentMetricsListSpeechaceScore2 | ❌       |             |
| syllableCorrectPerMinute | number                            | ❌       |             |
| syllableCount            | number                            | ❌       |             |
| toeicScore               | SegmentMetricsListToeicScore      | ❌       |             |
| wordCorrectPerMinute     | number                            | ❌       |             |
| wordCount                | number                            | ❌       |             |

# SegmentMetricsListCefrScore2

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | string | ❌       |             |
| fluency       | string | ❌       |             |
| grammar       | string | ❌       |             |
| pronunciation | string | ❌       |             |
| vocab         | string | ❌       |             |

# SegmentMetricsListIeltsScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# SegmentMetricsListPteScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# SegmentMetricsListSpeechaceScore2

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# SegmentMetricsListToeicScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# Grammar

**Properties**

| Name           | Type                  | Required | Description |
| :------------- | :-------------------- | :------- | :---------- |
| errors         | Errors[]              | ❌       |             |
| overallMetrics | GrammarOverallMetrics | ❌       |             |

# Errors

**Properties**

| Name         | Type     | Required | Description |
| :----------- | :------- | :------- | :---------- |
| category     | string   | ❌       |             |
| matchedText  | string   | ❌       |             |
| message      | string   | ❌       |             |
| replacements | string[] | ❌       |             |
| span         | number[] | ❌       |             |

# GrammarOverallMetrics

**Properties**

| Name                | Type                            | Required | Description |
| :------------------ | :------------------------------ | :------- | :---------- |
| grammaticalAccuracy | GrammaticalAccuracy             | ❌       |             |
| grammaticalRange    | GrammaticalRange                | ❌       |             |
| length              | Length                          | ❌       |             |
| lexicalDiversity    | OverallMetricsLexicalDiversity1 | ❌       |             |

# GrammaticalAccuracy

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# GrammaticalRange

**Properties**

| Name                      | Type                      | Required | Description |
| :------------------------ | :------------------------ | :------- | :---------- |
| adverbModifierVariation   | AdverbModifierVariation   | ❌       |             |
| level                     | string                    | ❌       |             |
| message                   | string                    | ❌       |             |
| nounPhraseComplexity      | NounPhraseComplexity      | ❌       |             |
| nounPhraseVariation       | NounPhraseVariation       | ❌       |             |
| score                     | number                    | ❌       |             |
| verbConstructionVariation | VerbConstructionVariation | ❌       |             |

# AdverbModifierVariation

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# NounPhraseComplexity

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| level   | string | ❌       |             |
| message | string | ❌       |             |
| score   | number | ❌       |             |

# NounPhraseVariation

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# VerbConstructionVariation

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# Length

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# OverallMetricsLexicalDiversity1

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# SpeechScoreIeltsScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| overall       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# SpeechScorePteScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| overall       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# SpeechScoreRelevance1

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| class | string | ❌       |             |

# ScoreIssueList

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| detailMessage | string | ❌       |             |
| shortMessage  | string | ❌       |             |
| source        | string | ❌       |             |
| status        | string | ❌       |             |

# SpeechScoreSpeechaceScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| overall       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# SpeechScoreToeicScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| coherence     | number | ❌       |             |
| fluency       | number | ❌       |             |
| grammar       | number | ❌       |             |
| overall       | number | ❌       |             |
| pronunciation | number | ❌       |             |
| vocab         | number | ❌       |             |

# Vocab

**Properties**

| Name           | Type                | Required | Description |
| :------------- | :------------------ | :------- | :---------- |
| overallMetrics | VocabOverallMetrics | ❌       |             |

# VocabOverallMetrics

**Properties**

| Name                   | Type                            | Required | Description |
| :--------------------- | :------------------------------ | :------- | :---------- |
| academicLanguageUse    | AcademicLanguageUse             | ❌       |             |
| collocationCommonality | CollocationCommonality          | ❌       |             |
| idiomaticity           | Idiomaticity                    | ❌       |             |
| lexicalDiversity       | OverallMetricsLexicalDiversity2 | ❌       |             |
| wordSophistication     | WordSophistication              | ❌       |             |
| wordSpecificity        | WordSpecificity                 | ❌       |             |

# AcademicLanguageUse

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| level   | string | ❌       |             |
| message | string | ❌       |             |
| score   | number | ❌       |             |

# CollocationCommonality

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# Idiomaticity

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# OverallMetricsLexicalDiversity2

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# WordSophistication

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| level | string | ❌       |             |
| score | number | ❌       |             |

# WordSpecificity

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| level   | string | ❌       |             |
| message | string | ❌       |             |
| score   | number | ❌       |             |

# SpeechScoreWordScoreList1

**Properties**

| Name              | Type                              | Required | Description |
| :---------------- | :-------------------------------- | :------- | :---------- |
| endingPunctuation | string                            | ❌       |             |
| phoneScoreList    | WordScoreListPhoneScoreList2[]    | ❌       |             |
| qualityScore      | number                            | ❌       |             |
| syllableScoreList | WordScoreListSyllableScoreList2[] | ❌       |             |
| word              | string                            | ❌       |             |

# WordScoreListPhoneScoreList2

**Properties**

| Name                 | Type     | Required | Description |
| :------------------- | :------- | :------- | :---------- |
| extent               | number[] | ❌       |             |
| phone                | string   | ❌       |             |
| predictedStressLevel | number   | ❌       |             |
| qualityScore         | number   | ❌       |             |
| soundMostLike        | string   | ❌       |             |
| stressLevel          | number   | ❌       |             |
| stressScore          | number   | ❌       |             |

# WordScoreListSyllableScoreList2

**Properties**

| Name                 | Type     | Required | Description |
| :------------------- | :------- | :------- | :---------- |
| extent               | number[] | ❌       |             |
| letters              | string   | ❌       |             |
| phoneCount           | number   | ❌       |             |
| predictedStressLevel | number   | ❌       |             |
| qualityScore         | number   | ❌       |             |
| stressLevel          | number   | ❌       |             |
| stressScore          | number   | ❌       |             |

<!-- This file was generated by liblab | https://liblab.com/ -->
