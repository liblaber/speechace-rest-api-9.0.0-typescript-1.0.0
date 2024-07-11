// This file was generated by liblab | https://liblab.com/

import { BaseHTTPError } from './base';

export default class PreconditionFailed extends BaseHTTPError {
  statusCode = 412;

  title = 'PreconditionFailed';

  constructor(detail: string = '') {
    super(detail);
  }
}
