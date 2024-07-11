// This file was generated by liblab | https://liblab.com/

import { V1V7OlderVersionsService } from './services/v1V7OlderVersions/V1V7OlderVersions';
import { V9LatestService } from './services/v9Latest/V9Latest';

export * from './models';

export * as V1V7OlderVersionsModels from './services/v1V7OlderVersions';
export * as V9LatestModels from './services/v9Latest';

export * from './http/errors';

/**
 * [Speechace](https://www.speechace.com) is a Speech Recognition API for fluency and pronunciation assessment. Our patented technology is unique in its ability to score a learner's speech and pinpoint individual syllable and phoneme level mistakes in a user's pronunciation in real time.
 */
export class Speechaceapi {
  public v1V7OlderVersions: V1V7OlderVersionsService;
  public v9Latest: V9LatestService;

  constructor() {
    this.v1V7OlderVersions = new V1V7OlderVersionsService();
    this.v9Latest = new V9LatestService();
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.v1V7OlderVersions.setBaseUrl(url);
    this.v9Latest.setBaseUrl(url);
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
