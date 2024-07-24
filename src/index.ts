// This file was generated by liblab | https://liblab.com/

import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { V9Latest_Service } from './services/v9-latest_';
import { V1V7OlderVersions_Service } from './services/v1-v7-older-versions_';

export class Speechaceapi {
  public readonly v9Latest_: V9Latest_Service;

  public readonly v1V7OlderVersions_: V1V7OlderVersions_Service;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.v9Latest_ = new V9Latest_Service(this.config);

    this.v1V7OlderVersions_ = new V1V7OlderVersions_Service(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.v9Latest_.baseUrl = baseUrl;
    this.v1V7OlderVersions_.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.v9Latest_.baseUrl = environment;
    this.v1V7OlderVersions_.baseUrl = environment;
  }

  set timeout(timeout: number) {
    this.v9Latest_.timeout = timeout;
    this.v1V7OlderVersions_.timeout = timeout;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c