# ScoreAPhonemeList1OkResponse

**Properties**

| Name           | Type                                  | Required | Description |
| :------------- | :------------------------------------ | :------- | :---------- |
| quotaRemaining | number                                | ❌       |             |
| status         | string                                | ❌       |             |
| version        | string                                | ❌       |             |
| wordScore      | ScoreAPhonemeList1OkResponseWordScore | ❌       |             |

# ScoreAPhonemeList1OkResponseWordScore

**Properties**

| Name           | Type                       | Required | Description |
| :------------- | :------------------------- | :------- | :---------- |
| phoneScoreList | WordScorePhoneScoreList2[] | ❌       |             |
| qualityScore   | number                     | ❌       |             |
| word           | string                     | ❌       |             |

# WordScorePhoneScoreList2

**Properties**

| Name          | Type     | Required | Description |
| :------------ | :------- | :------- | :---------- |
| extent        | number[] | ❌       |             |
| phone         | string   | ❌       |             |
| qualityScore  | number   | ❌       |             |
| soundMostLike | string   | ❌       |             |
| stressLevel   | any      | ❌       |             |

<!-- This file was generated by liblab | https://liblab.com/ -->
