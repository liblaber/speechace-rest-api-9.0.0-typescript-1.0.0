// This file was generated by liblab | https://liblab.com/

import { BaseHTTPError } from './base';

export default class UnprocessableEntity extends BaseHTTPError {
  statusCode = 422;

  title = 'Unprocessable Entity';

  constructor(detail: string = '') {
    super(detail);
  }
}
