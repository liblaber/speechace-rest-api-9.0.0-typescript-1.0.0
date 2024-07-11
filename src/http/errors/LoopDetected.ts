// This file was generated by liblab | https://liblab.com/

import { BaseHTTPError } from './base';

export default class LoopDetected extends BaseHTTPError {
  statusCode = 508;

  title = 'Loop Detected';

  constructor(detail: string = '') {
    super(detail);
  }
}