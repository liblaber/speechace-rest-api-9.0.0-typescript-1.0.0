# ScoreAWordOrSentence1OkResponse

**Properties**

| Name           | Type                                     | Required | Description |
| :------------- | :--------------------------------------- | :------- | :---------- |
| quotaRemaining | number                                   | ❌       |             |
| status         | string                                   | ❌       |             |
| textScore      | ScoreAWordOrSentence1OkResponseTextScore | ❌       |             |
| version        | string                                   | ❌       |             |

# ScoreAWordOrSentence1OkResponseTextScore

**Properties**

| Name               | Type                      | Required | Description |
| :----------------- | :------------------------ | :------- | :---------- |
| fidelityClass      | string                    | ❌       |             |
| fluency            | TextScoreFluency2         | ❌       |             |
| qualityScore       | number                    | ❌       |             |
| text               | string                    | ❌       |             |
| wordIntonationList | WordIntonationList[]      | ❌       |             |
| wordScoreList      | TextScoreWordScoreList2[] | ❌       |             |

# TextScoreFluency2

**Properties**

| Name                 | Type                         | Required | Description |
| :------------------- | :--------------------------- | :------- | :---------- |
| fluencyVersion       | any                          | ❌       |             |
| ieltsSubscoreVersion | any                          | ❌       |             |
| overallMetrics       | FluencyOverallMetrics3       | ❌       |             |
| segmentMetricsList   | FluencySegmentMetricsList3[] | ❌       |             |

# FluencyOverallMetrics3

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
| ieltsSubscore            | OverallMetricsIeltsSubscore1 | ❌       |             |
| maxLengthRun             | number                       | ❌       |             |
| meanLengthRun            | number                       | ❌       |             |
| pteEstimate              | number                       | ❌       |             |
| segment                  | number[]                     | ❌       |             |
| speechRate               | number                       | ❌       |             |
| syllableCorrectPerMinute | number                       | ❌       |             |
| syllableCount            | number                       | ❌       |             |
| wordCorrectPerMinute     | number                       | ❌       |             |
| wordCount                | number                       | ❌       |             |

# OverallMetricsIeltsSubscore1

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| grammar | number | ❌       |             |
| vocab   | number | ❌       |             |

# FluencySegmentMetricsList3

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
| ieltsEstimate            | number     | ❌       |             |
| maxLengthRun             | number     | ❌       |             |
| meanLengthRun            | number     | ❌       |             |
| pteEstimate              | number     | ❌       |             |
| segment                  | number[]   | ❌       |             |
| speechRate               | number     | ❌       |             |
| syllableCorrectPerMinute | number     | ❌       |             |
| syllableCount            | number     | ❌       |             |
| wordCorrectPerMinute     | number     | ❌       |             |
| wordCount                | number     | ❌       |             |

# WordIntonationList

**Properties**

| Name                   | Type       | Required | Description |
| :--------------------- | :--------- | :------- | :---------- |
| syllableIntonationList | string[][] | ❌       |             |
| word                   | string     | ❌       |             |

# TextScoreWordScoreList2

**Properties**

| Name              | Type                              | Required | Description |
| :---------------- | :-------------------------------- | :------- | :---------- |
| phoneScoreList    | WordScoreListPhoneScoreList3[]    | ❌       |             |
| qualityScore      | number                            | ❌       |             |
| syllableScoreList | WordScoreListSyllableScoreList3[] | ❌       |             |
| word              | string                            | ❌       |             |

# WordScoreListPhoneScoreList3

**Properties**

| Name          | Type     | Required | Description |
| :------------ | :------- | :------- | :---------- |
| extent        | number[] | ❌       |             |
| phone         | string   | ❌       |             |
| qualityScore  | number   | ❌       |             |
| soundMostLike | string   | ❌       |             |
| stressLevel   | number   | ❌       |             |
| stressScore   | number   | ❌       |             |

# WordScoreListSyllableScoreList3

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
