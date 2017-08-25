import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IContact } from './models/contact';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
  readonly API_URL = 'http://localhost:8910/api/contacts';
  constructor(private http: Http) { }

  getListContacts() {
    /*
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic token-here');

    const params = new URLSearchParams();
    params.set('page', '1');

    return this.http.get(this.API_URL, {
      headers: headers,
      params: params
    })
    */
    return this.http.get(this.API_URL)
      .map(res => res.json())
      .catch(err => {
        return Observable.of(err);
      });
  }
  createContact(contact: IContact) {
    return this.http.post(this.API_URL, contact)
      .map(res => res.json())
      .catch(err => {
        return Observable.of(err);
      });
  }
  deleteContact(contactId) {
    return this.http.delete(this.API_URL + '/' + contactId)
      .map(res => res.json())
      .catch(err => {
        return Observable.of(err);
      });
  }
}
