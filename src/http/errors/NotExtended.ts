// This file was generated by liblab | https://liblab.com/

import { BaseHTTPError } from './base';

export default class NotExtended extends BaseHTTPError {
  statusCode = 510;

  title = 'Not Extended';

  constructor(detail: string = '') {
    super(detail);
  }
}
