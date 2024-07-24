# TranscribeScore1OkResponse

**Properties**

| Name           | Type                                  | Required | Description |
| :------------- | :------------------------------------ | :------- | :---------- |
| quotaRemaining | number                                | ❌       |             |
| speechScore    | TranscribeScore1OkResponseSpeechScore | ❌       |             |
| status         | string                                | ❌       |             |
| version        | string                                | ❌       |             |

# TranscribeScore1OkResponseSpeechScore

**Properties**

| Name          | Type                        | Required | Description |
| :------------ | :-------------------------- | :------- | :---------- |
| fidelityClass | string                      | ❌       |             |
| fluency       | SpeechScoreFluency2         | ❌       |             |
| qualityScore  | number                      | ❌       |             |
| relevance     | SpeechScoreRelevance2       | ❌       |             |
| transcript    | string                      | ❌       |             |
| wordScoreList | SpeechScoreWordScoreList2[] | ❌       |             |

# SpeechScoreFluency2

**Properties**

| Name                 | Type                         | Required | Description |
| :------------------- | :--------------------------- | :------- | :---------- |
| fluencyVersion       | any                          | ❌       |             |
| ieltsSubscoreVersion | any                          | ❌       |             |
| overallMetrics       | FluencyOverallMetrics4       | ❌       |             |
| segmentMetricsList   | FluencySegmentMetricsList4[] | ❌       |             |

# FluencyOverallMetrics4

**Properties**

| Name                     | Type                         | Required | Description |
| :----------------------- | :--------------------------- | :------- | :---------- |
| allPauseCount            | number                       | ❌       |             |
| allPauseDuration         | number                       | ❌       |             |
| allPauseList             | number[][]                   | ❌       |             |
| articulationLength       | number                       | ❌       |             |
| articulationRate         | number                       | ❌       |             |
| correctSyllableCount     | number                       | ❌       |             |
| correctWordCount         | number                       | ❌       |             |
| duration                 | number                       | ❌       |             |
| fluencyScore             | number                       | ❌       |             |
| ieltsEstimate            | number                       | ❌       |             |
| ieltsSubscore            | OverallMetricsIeltsSubscore2 | ❌       |             |
| maxLengthRun             | number                       | ❌       |             |
| meanLengthRun            | number                       | ❌       |             |
| pteEstimate              | number                       | ❌       |             |
| segment                  | number[]                     | ❌       |             |
| speechRate               | number                       | ❌       |             |
| syllableCorrectPerMinute | number                       | ❌       |             |
| syllableCount            | number                       | ❌       |             |
| wordCorrectPerMinute     | number                       | ❌       |             |
| wordCount                | number                       | ❌       |             |

# OverallMetricsIeltsSubscore2

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| coherence | number | ❌       |             |
| grammar   | number | ❌       |             |
| vocab     | number | ❌       |             |

# FluencySegmentMetricsList4

**Properties**

| Name                     | Type                            | Required | Description |
| :----------------------- | :------------------------------ | :------- | :---------- |
| allPauseCount            | number                          | ❌       |             |
| allPauseDuration         | number                          | ❌       |             |
| allPauseList             | number[][]                      | ❌       |             |
| articulationLength       | number                          | ❌       |             |
| articulationRate         | number                          | ❌       |             |
| correctSyllableCount     | number                          | ❌       |             |
| correctWordCount         | number                          | ❌       |             |
| duration                 | number                          | ❌       |             |
| fluencyScore             | number                          | ❌       |             |
| ieltsEstimate            | number                          | ❌       |             |
| ieltsSubscore            | SegmentMetricsListIeltsSubscore | ❌       |             |
| maxLengthRun             | number                          | ❌       |             |
| meanLengthRun            | number                          | ❌       |             |
| pteEstimate              | number                          | ❌       |             |
| segment                  | number[]                        | ❌       |             |
| speechRate               | number                          | ❌       |             |
| syllableCorrectPerMinute | number                          | ❌       |             |
| syllableCount            | number                          | ❌       |             |
| wordCorrectPerMinute     | number                          | ❌       |             |
| wordCount                | number                          | ❌       |             |

# SegmentMetricsListIeltsSubscore

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| coherence | number | ❌       |             |
| grammar   | number | ❌       |             |
| vocab     | number | ❌       |             |

# SpeechScoreRelevance2

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| class | string | ❌       |             |

# SpeechScoreWordScoreList2

**Properties**

| Name              | Type                              | Required | Description |
| :---------------- | :-------------------------------- | :------- | :---------- |
| endingPunctuation | string                            | ❌       |             |
| phoneScoreList    | WordScoreListPhoneScoreList4[]    | ❌       |             |
| qualityScore      | number                            | ❌       |             |
| syllableScoreList | WordScoreListSyllableScoreList4[] | ❌       |             |
| word              | string                            | ❌       |             |

# WordScoreListPhoneScoreList4

**Properties**

| Name          | Type     | Required | Description |
| :------------ | :------- | :------- | :---------- |
| extent        | number[] | ❌       |             |
| phone         | string   | ❌       |             |
| qualityScore  | number   | ❌       |             |
| soundMostLike | string   | ❌       |             |
| stressLevel   | number   | ❌       |             |
| stressScore   | number   | ❌       |             |

# WordScoreListSyllableScoreList4

**Properties**

| Name         | Type     | Required | Description |
| :----------- | :------- | :------- | :---------- |
| extent       | number[] | ❌       |             |
| letters      | string   | ❌       |             |
| phoneCount   | number   | ❌       |             |
| qualityScore | number   | ❌       |             |
| stressLevel  | number   | ❌       |             |
| stressScore  | number   | ❌       |             |

<!-- This file was generated by liblab | https://liblab.com/ -->
