import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class CoreRequestOptionsService extends BaseRequestOptions {

  constructor() {
    super();
    // Set the default 'Authorization' header
    this.headers.set('Authorization', 'Bearer some-token');
    this.headers.set('Content-Type', 'application/json');
  }

}

export const requestOptionsProvider = {
  provide: RequestOptions,
  useClass: CoreRequestOptionsService
};
