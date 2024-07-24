# ScoreAWordOrSentenceOkResponse

**Properties**

| Name           | Type                                    | Required | Description |
| :------------- | :-------------------------------------- | :------- | :---------- |
| quotaRemaining | number                                  | ❌       |             |
| status         | string                                  | ❌       |             |
| textScore      | ScoreAWordOrSentenceOkResponseTextScore | ❌       |             |
| version        | string                                  | ❌       |             |

# ScoreAWordOrSentenceOkResponseTextScore

**Properties**

| Name           | Type                      | Required | Description |
| :------------- | :------------------------ | :------- | :---------- |
| cefrScore      | TextScoreCefrScore        | ❌       |             |
| fluency        | TextScoreFluency1         | ❌       |             |
| ieltsScore     | TextScoreIeltsScore       | ❌       |             |
| pteScore       | TextScorePteScore         | ❌       |             |
| speechaceScore | TextScoreSpeechaceScore   | ❌       |             |
| text           | string                    | ❌       |             |
| toeicScore     | TextScoreToeicScore       | ❌       |             |
| wordScoreList  | TextScoreWordScoreList1[] | ❌       |             |

# TextScoreCefrScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| fluency       | string | ❌       |             |
| pronunciation | string | ❌       |             |

# TextScoreFluency1

**Properties**

| Name               | Type                         | Required | Description |
| :----------------- | :--------------------------- | :------- | :---------- |
| fluencyVersion     | any                          | ❌       |             |
| overallMetrics     | FluencyOverallMetrics1       | ❌       |             |
| segmentMetricsList | FluencySegmentMetricsList1[] | ❌       |             |

# FluencyOverallMetrics1

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
| maxLengthRun             | number     | ❌       |             |
| meanLengthRun            | number     | ❌       |             |
| segment                  | number[]   | ❌       |             |
| speechRate               | number     | ❌       |             |
| syllableCorrectPerMinute | number     | ❌       |             |
| syllableCount            | number     | ❌       |             |
| wordCorrectPerMinute     | number     | ❌       |             |
| wordCount                | number     | ❌       |             |

# FluencySegmentMetricsList1

**Properties**

| Name                     | Type                              | Required | Description |
| :----------------------- | :-------------------------------- | :------- | :---------- |
| allPauseCount            | number                            | ❌       |             |
| allPauseDuration         | number                            | ❌       |             |
| allPauseList             | number[][]                        | ❌       |             |
| articulationLength       | number                            | ❌       |             |
| articulationRate         | number                            | ❌       |             |
| cefrScore                | SegmentMetricsListCefrScore1      | ❌       |             |
| correctSyllableCount     | number                            | ❌       |             |
| correctWordCount         | number                            | ❌       |             |
| duration                 | number                            | ❌       |             |
| maxLengthRun             | number                            | ❌       |             |
| meanLengthRun            | number                            | ❌       |             |
| segment                  | number[]                          | ❌       |             |
| speechRate               | number                            | ❌       |             |
| speechaceScore           | SegmentMetricsListSpeechaceScore1 | ❌       |             |
| syllableCorrectPerMinute | number                            | ❌       |             |
| syllableCount            | number                            | ❌       |             |
| wordCorrectPerMinute     | number                            | ❌       |             |
| wordCount                | number                            | ❌       |             |

# SegmentMetricsListCefrScore1

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| fluency       | string | ❌       |             |
| pronunciation | string | ❌       |             |

# SegmentMetricsListSpeechaceScore1

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| fluency       | number | ❌       |             |
| pronunciation | number | ❌       |             |

# TextScoreIeltsScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| pronunciation | number | ❌       |             |

# TextScorePteScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| pronunciation | number | ❌       |             |

# TextScoreSpeechaceScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| fluency       | number | ❌       |             |
| pronunciation | number | ❌       |             |

# TextScoreToeicScore

**Properties**

| Name          | Type   | Required | Description |
| :------------ | :----- | :------- | :---------- |
| pronunciation | number | ❌       |             |

# TextScoreWordScoreList1

**Properties**

| Name              | Type                              | Required | Description |
| :---------------- | :-------------------------------- | :------- | :---------- |
| phoneScoreList    | WordScoreListPhoneScoreList1[]    | ❌       |             |
| qualityScore      | number                            | ❌       |             |
| syllableScoreList | WordScoreListSyllableScoreList1[] | ❌       |             |
| word              | string                            | ❌       |             |

# WordScoreListPhoneScoreList1

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
| wordExtent           | number[] | ❌       |             |

# WordScoreListSyllableScoreList1

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
