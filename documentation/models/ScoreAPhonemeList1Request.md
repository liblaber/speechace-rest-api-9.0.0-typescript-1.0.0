# ScoreAPhonemeList1Request

**Properties**

| Name          | Type        | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------ | :---------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| phoneList     | string      | ❌       | A phoneme list to score.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| questionInfo  | string      | ❌       | A unique identifier for the activity or question this user audio is answering. Structure this field to include as much info as possible to aid in reporting and analytics. For example: **question_info='u1/q1'** where: _ u1: means the question belongs to Unit 1 in your content _ q1: means this is question 1 within the unit You can add more levels as needed. Ensure **no personally identifiable information** is passed in this field. |
| userAudioFile | ArrayBuffer | ❌       | file with user audio (wav, mp3, m4a, webm, ogg, aiff)                                                                                                                                                                                                                                                                                                                                                                                            |

<!-- This file was generated by liblab | https://liblab.com/ -->